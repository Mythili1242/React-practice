var session=require("express-session");


const requireAuth = (req, res, next) => {
  //console.log(req);
    if (!req.session.userid) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    next();
  }

  module.exports=requireAuth;