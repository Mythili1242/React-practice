const mongoose=require("mongoose")
const {Schema}=mongoose;
const imageSchema=new Schema({
    // img:{
    //    // type:String
       
    //     data: Buffer,
    //     contentType: String
    
    // }
    imageData:String
})

const img=mongoose.model("Imglist",imageSchema)
module.exports=img;
