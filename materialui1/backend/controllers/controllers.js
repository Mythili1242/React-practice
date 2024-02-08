const accmodel=require("../models/model");
const {hash,compare}=require("bcryptjs");


const postuser=async(req,res,next)=>{
    
    const hashedpwd=await hash(req.body.password,10)
    try {
      await accmodel.create({...req.body,hashedpwd}).then(res=>console.log(res)).catch(err=>console.log(err)) 
      res.send("user created");
    } catch (error) {
        console.log(error)
    }
}



module.exports={postuser}