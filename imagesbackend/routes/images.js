var express=require("express")
var router=express.Router()
var control=require("../controllers/controller")

router.post("/",control.uploadimg)
router.get("/:id",control.fetchimg)

module.exports=router













