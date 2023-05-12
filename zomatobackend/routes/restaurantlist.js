var express=require("express")
var router=express.Router();
var cont=require("../controllers/controller")


router.get("/",cont.getlist)
router.get("/items",cont.items)
router.post("/sign",cont.postuser)
router.post("/login",cont.loginuser)
router.post("/refresh",cont.refresh)
router.post("/logout",cont.logout)


module.exports=router;
