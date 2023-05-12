const express=require('express');
const mongoose=require("mongoose")
const BrandName=require("./model")
const cors=require("cors")
const bodyParser=require("body-parser")
const app=express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()) //middleware
app.use(cors())
// const bodyParser = require("body-parser")

mongoose.connect('mongodb+srv://Mythili:0aBaXezG4PiUmXjE@atlascluster.roimqdb.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology:true,
useNewUrlParser:true})
.then(()=>console.log("Db connected..."))
.catch(err=>console.log(err))

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post("/addbrands",async(req,res)=>{
    const {brandname}=req.body;
    try{
        const newData=new BrandName({brandname})   //brandname is property value we received from user;Brandname is schema
        await newData.save();   //to save in db
        return res.json(await BrandName.find())      //after saving return a response-send all data stored in db using find.use json instead of send method as apis are in json format
   
    }
    catch(err){
console.log(err.message);
    }
})

app.get('/getallbrands',async(req,res)=>{
  try{
const allData=await BrandName.find();
return res.json(allData)
  }
  catch(err){
    console.log(err.message);
  }
})

app.get("/getallbrands/:id",async (req,res)=>{
    try{
const data=await BrandName.findById(req.params.id)
return res.json(data)
    }
    catch(err){
        console.log(err.message);
    }
})

app.delete("/deletebrand/:id",async (req,res)=>{
    try{
await BrandName.findByIdAndDelete(req.params.id)
return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})


app.put("/updatebrand/:id",async (req,res)=>{
    console.log(req.body)
    try{
await BrandName.findByIdAndUpdate(req.params.id,req.body)
return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})

app.listen(3222,()=>console.log("Server running..."))
