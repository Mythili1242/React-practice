var session=require("express-session")

const processLogin=(req,res)=>{
    if(req.body.uname !=="admin" || req.body.password !== "admin"){
        res.send("invalid username or password")
    }
else{
    req.session.userid=req.body.uname;
     console.log( req.sessionID);
    // res.send(req.session.userid)
    res.cookie('sessionID', req.sessionID, { httpOnly: true });
    //console.log( res.cookie('sessionID', req.sessionID, { httpOnly: true }));
    res.send({ message: 'Login successful' });
}

}

const authenticated=(req,res)=>{
    res.send({ message: 'This endpoint is protected' });

}



module.exports={processLogin,authenticated}
