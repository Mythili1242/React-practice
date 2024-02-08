var express=require("express");
var router=express.Router();
var cont=require("../controllers/controllers");

router.post("/signup",cont.postuser)

module.exports=router;

