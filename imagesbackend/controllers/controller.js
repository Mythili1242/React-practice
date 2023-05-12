const imagemodels=require("../models/imagemodel")

const uploadimg=async(req,res,next)=>{
    try{
    //    console.log(req.body);
       //  const imageData=req.body.imageData;
        // await imagemodels.create({imageData})
        const imageDoc = new imagemodels(req.body);
        var a;
        await imageDoc.save().then(res=>a=res._id.toString()) //console.log(res._id.toString());
        
    //    console.log(a);
       // console.log(typeof(a));
       // res.sendStatus(200);
       res.send(a)
      
    }
    catch(err){
        console.log(err);
    }

}


const fetchimg=async(req,res,next)=>{
    const id=req.params.id
    console.log(id);
    imagemodels.find({_id:id}).then((img)=>{
    // imagemodels.find({_id:"6447a2720b800965709f9549"}).then((img)=>{
       
       var [{_id,imageData}]=img;   
     // console.log(imageData);  
    //  res.setHeader('contentType','image/jpg').send(imageData);
    res.send(JSON.stringify(imageData));
 //   console.log(JSON.stringify(imageData));
    })
  
}
module.exports={uploadimg,fetchimg}
