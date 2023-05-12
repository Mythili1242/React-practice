var express=require("express");
var router=express.Router()
var cont=require("../controllers/mailcont")

router.post("/",cont.sendmail)

module.exports=router
