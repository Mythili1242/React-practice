const {sign}=require('jsonwebtoken')
const createAccessToken=userId=>{
    return sign({userId},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:'15m'
    })
}

const createRefreshToken=userId=>{
    return sign({userId},process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:'7d'
    })
}

const sendAccessToken=(res,req,accesstoken)=>{
    res.send({
        accesstoken,
        email:req.body.email,
    })
}

const sendRefreshToken=(res,refreshtoken)=>{
    res.cookie('refreshtoken',refreshtoken,{
        httpOnly:true,  //makes sure that we cant modify this cookie with javascript
        path:'/refresh_token'  //we dont want to send this cookie with each request,we just do it when we are on refresh_token end point

    }
    
    )
}

module.exports={
    createAccessToken,createRefreshToken,sendAccessToken,sendRefreshToken
}