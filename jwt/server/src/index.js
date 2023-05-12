require('dotenv/config');    //to use env variables
const express=require('express')
const cookieParser=require('cookie-parser')
const cors=require('cors');
const {createAccessToken,createRefreshToken,sendAccessToken,sendRefreshToken}=require('./tokens')
const {verify}=require('jsonwebtoken');
const {hash,compare}=require('bcryptjs');
const {fakeDB}=require('./fakeDB')
const {isAuth}=require('./isAuth')
//1.register a user
//2.login a user
//3.logout a user
//4.set up a protected route
//5.get a new access token with a refresh token

const server=express()
server.use(cookieParser());
server.use(
    cors({
        origin:'http://localhost:58202',
        // origin:'http://localhost:3111',
        credentials:true,
    })
)

// server.use(cors())
//needed to be able to read body data
server.use(express.json());   //to support json encoded bodies
server.use(express.urlencoded({extended:true})) //supports url encoded bodies


//1.register a user
server.post('/register',async(req,res)=>{
  
    const {email,password}=req.body;
    try{
        //1.check if user exists
        const user=fakeDB.find(user=>user.email === email);
        if(user) throw new Error('user already exists')
        //2.if not exists,hash the password
        const hashedpassword=await hash(password,10);  //salt -how many rounds
        //3.insert the user in database here fakedb
        fakeDB.push({
            id:fakeDB.length,
            email,
            password:hashedpassword
        })
        res.send({message:'user created'})

        console.log(fakeDB);

    }
    catch(err){
res.send({
    error:`${err.message}`
})
    }
})

//2.login a user
server.post('/login',async (req,res)=>{
    const {email,password}=req.body;
console.log(email)
console.log(password);
    try{
//1.find user in db.if not exists send error
const user=fakeDB.find(user=>user.email===email);
if(!user) throw new Error("user not exists")
//2.compare encrypted password and see if it checks out
const valid=await compare(password,user.password);
if (!valid) throw new Error("password not correct");
//3.if its correct refresh and access token.access token has short lifetime and refresh token has long lifetime
const accesstoken=createAccessToken(user.id)
const refreshtoken=createRefreshToken(user.id)
//4.put the refresh token in db
user.refreshtoken=refreshtoken;
console.log(fakeDB);
//5.send token.refresh token as a cookie and access token as a regular response
sendRefreshToken(res,refreshtoken);
sendAccessToken(res,req,accesstoken)

    }
    catch(err){
res.send({
    error:`${err.message}`,
})
    }
})


//3.logout a user
server.post('/logout',(req,res)=>{
    res.clearCookie('refreshtoken',{path:'/refresh_token'});
    return res.send({
        message:'logged out',
    })
})


//4.protected route
server.post('/protected',async (req,res)=>{
    try{
const userId=isAuth(req)
if(userId!==null){
    res.send({
        data:'this is protected data',
    })
}
    }
    catch(err){
res.send({
    error:`${err.message}`
})
    }
})


//5.get new access token with refresh token
server.post('/refresh_token',(req,res)=>{
    const token=req.cookies.refreshtoken;
    //if we dont have a token in our request
    if(!token) return res.send({accesstoken:''})  //empty access token
    //if we have a token,verify it
    let payload=null;
    try{
payload=verify(token,process.env.REFRESH_TOKEN_SECRET); 
    }
    
    catch(err){
return res.send({accesstoken:''})
    }
//token is valid check if user exists
const user=fakeDB.find(user=>user.id==payload.userId)
if(!user) return res.send({accesstoken:''})

//user exists,check if refresh token exists on user
if(user.refreshtoken!==token){   //if we have another token register to user,we dont want to send a new access token
    return res.send({accesstoken:''})

}

//token exists,create new refresh and access token
const accesstoken=createAccessToken(user.id)
const refreshtoken=createRefreshToken(user.id)
user.refreshtoken=refreshtoken;    //updates in db
//send new refresh and access tokens
sendRefreshToken(res,refreshtoken);
return res.send({accesstoken})

})

server.listen(process.env.PORT,()=>
    console.log(`server listening on port ${process.env.PORT}`)
);
