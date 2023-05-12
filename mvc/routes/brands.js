var express=require("express")
var router=express.Router();
var controllers=require("../controllers/controller")

router.post("/",controllers.createBrand)
router.get("/",controllers.getBrands)
router.get("/sample",controllers.countDoc)
router.get("/aggregate",controllers.agg)
router.get("/:id",controllers.getBrand)
router.put("/:id",controllers.getAndUpdate)
router.delete("/:id",controllers.deleteBrand)


module.exports=router;
