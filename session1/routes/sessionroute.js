const session = require("express-session");
var express=require("express");
var router=express.Router();
var cont=require("../controllers/controller");

//var requireAuth=require("./requireAuth")

const requireAuth = (req, res, next) => {
    console.log(req.sessionID);
    //res.send(req.session)
      if (!req.session.userid) {
        return res.status(401).send({ message: 'Unauthorized' });
      }
      next();
    }


router.post("/login",cont.processLogin)
router.get("/protected",requireAuth,cont.authenticated)


module.exports=router