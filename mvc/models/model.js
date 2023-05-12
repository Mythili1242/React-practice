var mongoose=require("mongoose")
var {Schema}=mongoose;

const brandSchema=new Schema({
    brandname:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    // rating:{
    //     type:Array
    // },
 price:{
    type:Number
 }



})

const brand=mongoose.model("brandname",brandSchema)
module.exports=brand;

