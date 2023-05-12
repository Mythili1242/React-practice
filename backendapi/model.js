const mongoose=require("mongoose")

const BrandName=mongoose.Schema({
    brandname:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now      //consider present date
    }
})

module.exports=mongoose.model("brandname",BrandName) //1st arg is name of the file in db and 2nd is schema name