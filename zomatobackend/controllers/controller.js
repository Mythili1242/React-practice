const restmodel=require("../models/model")
const usermodel=require("../models/model1")
const itemsmodel=require("../models/model2")


const {hash,compare}=require("bcryptjs")
// require("dotenv/config")
const {createAccessToken,createRefreshToken,sendAccessToken,sendRefreshToken}=require("./tokens")
const { verify } = require("jsonwebtoken")

const getlist=async (req,res,next)=>{
try{
    return  res.json(await restmodel.find())
}
catch(err){
    console.log(err.message);
}
}

const postuser=async (req,res,next)=>{
    try{
        console.log(req.body)
        const hashedPassword=await hash(req.body.password,10)
        await usermodel.create({...req.body,password:hashedPassword}).then(res=>console.log(res)).catch(err=>console.log(err))
    //    return res.json(await usermodel.find())
    return res.send("user created")
    }
    catch(err){
        console.log(err)
    }
}

const loginuser=async (req,res,next)=>{
    const {email,password}=req.body;
    try{

        const user=await usermodel.findOne({email:email})
        
        if(!user) throw new Error("user not exists")
        const valid=await compare(password,user.password)
        //if(!valid) res.send("password not correct")
        if(!valid) res.send({msg:"password not correct"})
        if  (!valid) throw new Error("Incorrect password")
        const accessToken=createAccessToken(user.firstname)
        const refreshToken=createRefreshToken(user.firstname)
        user.refreshToken=refreshToken;
        sendRefreshToken(res,refreshToken)
        sendAccessToken(req,res,accessToken)
    }
    catch(err){
        // res.send(err.message)
        console.log(err.message);
    }
}


const refresh=async (req,res,next)=>{
    const token=req.cookies.refreshtoken;
    if(!token) return res.send({accesstoken:""})
    let payload=null;
    try{
        payload=verify(token,process.env.REFRESH_TOKEN_SECRET)   //returns decoded token
    }
    catch(err){
        return res.send({accesstoken:""})
    }
    const user=usermodel.findOne({firstname:payload.firstname})
    if(!user) return res.send({accesstoken:""})

    if(user.refreshtoken!==token){
        return res.send({accesstoken:''})
    }

    const accessToken=createAccessToken(user.firstname)
    const refreshToken=createRefreshToken(user.firstname)
    user.refreshToken=refreshToken;
    sendRefreshToken(res,refreshToken)
    return res.send({accessToken})
}

const logout=async (req,res,next)=>{
    res.clearCookie("refreshtoken",{path:"/refresh"})
    return res.json({message:"logged out"})
}

const items=async (req,res,next)=>{
    try{
      return res.json(await itemsmodel.find())
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports={getlist,postuser,loginuser,refresh,logout,items}