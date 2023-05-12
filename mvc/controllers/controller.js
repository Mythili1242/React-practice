const createdmodel=require("../models/model")

const createBrand=async (req,res,next)=>{
    
    try{
        // const brands=new createdmodel(req.body)
        // await brands.save();   //mongoose

await createdmodel.create(req.body)  //mongoose
        //     (err,data)=>{
        //     if(err){
        //         console.log("error"+err);
        //     }
        //     else{
        //         console.log(data);
        //     }
        // }
     // createdmodel.insertMany([{brandname:"myth",rating:[1,2]}])  
        return res.json(await createdmodel.find())
    }
    catch(err){
        console.log(err.message);
    }   
}

const getBrands=async(req,res,next)=>{
    try{
        return res.json(await createdmodel.find())
    }
    catch(err){
        console.log(err.message);
    }
}

const getBrand=async(req,res,next)=>{
    
    try{
        const id=req.params.id;
      // return res.json(await createdmodel.findById(id)) //mongoose
        return res.json(await createdmodel.findOne({_id:id}))   //mongodb
    }
    catch(err){
        console.log(err.message);
    }
}

const getAndUpdate=async(req,res,next)=>{
    
    try{
        const id=req.params.id;
        const body=req.body;
        const brandnamep=req.body.brandname;
       // await createdmodel.findByIdAndUpdate(id,body)    //mongoose
      // await createdmodel.findOneAndUpdate(id,body,{upsert:false})
        //await createdmodel.updateOne({_id:id},{$set:{brandname:brandnamep}})   //mongodb
        await createdmodel.updateOne({_id:id},{$push:{rating:3}})  //adds new item into array of given field
        return res.send(await createdmodel.find())
    }
    catch(err){
        console.log(err.message);
    }
}

const deleteBrand=async(req,res,next)=>{
    try{
        const id=req.params.id;
       // await createdmodel.findByIdAndDelete(id)  //mongoose
       await createdmodel.deleteOne({_id:id})  //mongodb
        return res.send(await createdmodel.find())
    }
    catch(err){
        console.log(err.message);
    }
}

const countDoc=async(req,res,next)=>{
    try{
       const body=req.body.brandname
//const count=JSON.stringify(await createdmodel.countDocuments({})) 
const count=JSON.stringify(await createdmodel.countDocuments({brandname:body}))
res.send(count)
    }
    catch(err){
        console.log(err.message);
    }
}

const agg=async(req,res,next)=>{

    try{
// const data=await createdmodel.aggregate([{$match:{"brandname":"apple"}}])
// const data1=await createdmodel.aggregate([{$sort:{"brandname":-1}}])
// const data2=await createdmodel.aggregate([{$group:{_id:"$brandname"}}])
// const data3=await createdmodel.aggregate([{$group:{_id:"$brandname"}},{$count:"total"}])
// const data4=await createdmodel.aggregate([{$match:{}},{$limit:2}])
// const data5=await createdmodel.aggregate([{$match:{}},{$skip:2}])
// const data6=await createdmodel.aggregate([{$project:{_id:0,brandname:1}}])  //0-dont show,1-show
// const data7=await createdmodel.aggregate([{$match:{"brandname":"myth"}},{$lookup:{from:"brandnames",localField:"_id",foreignField:"_id",as:"cost"}},{$limit:1}])
//  const data8=await createdmodel.aggregate([{$group:{_id:"$brandname",properties:{$push:{rating:4,brandname:"$brandname"}}}},{$out:"newrating"}]) //creates new collection with properties
 const data8=await createdmodel.aggregate([{$group:{_id:"$_id",properties:{$push:{rating:4,brandname:"$brandname"}}}},{$out:"newrating"}]) //creates new collection with properties

//const data9=await createdmodel.aggregate([{$addFields:{"price":40000}}])


res.send(data8)
    }
    catch(err){
console.log(err.message);
    }
}

module.exports={createBrand,getBrands,getBrand,getAndUpdate,deleteBrand,countDoc,agg};