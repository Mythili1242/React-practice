const {verify}=require('jsonwebtoken')

const isAuth=req=>{
    console.log(req.headers);
    const authorization=req.headers['authorization'] //gives token
    console.log(authorization)
    if(!authorization) throw new Error("you need to login");
    //format is 'Bearer sdgsfgdskghdifh3ihfiehgihg' .so we need to split out bearer and take token
    const token=authorization.split(' ')[1];
    console.log(token)
    const {userId} = verify(token,process.env.ACCESS_TOKEN_SECRET); //to know it is a legit token
    console.log(verify(token,process.env.ACCESS_TOKEN_SECRET))
    console.log(userId)
return userId;


}
module.exports={
    isAuth,
}


