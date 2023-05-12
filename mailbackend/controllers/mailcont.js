//frontend in images folder

const nodemailer=require("nodemailer")


const sendmail=(req,res,next)=>{
console.log(req.body);

var transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:req.body.email,
        pass:req.body.password    //otsodkyksdvskrvr
    }
})

transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

var options={
    from:req.body.email,
    // to:"tejaswinimukthapuram123@gmail.com",
    to:"mythiligalidevara82@gmail.com",
    subject:"feedback",
    text:req.body.feedback
}

transporter.sendMail(options,(err,info)=>{
    // if(err){
    //     console.log(err);
    // }
    // else{
    //     console.log("email sent"+info.response);
    // }

    if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
    }
})


//res.send("mail sent")
}

module.exports={sendmail}