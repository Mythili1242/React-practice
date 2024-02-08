var mongoose=require("mongoose");
var {Schema}=mongoose;

const accountsSchema=new Schema({
    name:String,
    email:String,
    password:String
})

const accSchema=mongoose.model("accounts",accountsSchema);
module.exports=accSchema;