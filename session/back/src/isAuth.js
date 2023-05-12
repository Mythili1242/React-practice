const {verify}=require('jsonwebtoken')

const isAuth=req=>{
    console.log(req.headers);
    const authorization=req.headers['authorization'] //gives token
    if(!authorization) throw new Error("you need to login");
    //format is 'Bearer sdgsfgdskghdifh3ihfiehgihg' .so we need to split out bearer and taken token
    const token=authorization.split(' ')[1];
    const {userId} = verify(token,process.env.ACCESS_TOKEN_SECRET); //to know it is a legit token
return userId;


}
module.exports={
    isAuth,
}


