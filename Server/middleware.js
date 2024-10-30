module.exports.saveRedirectUrl = (req,res,next)=>{
    // Saves redirect url in locals
    if(req.session.redirectUrl){
       res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}
module.exports.ensureAuthenticated  = (req,res,next)=>{
    // Saves redirect url in locals
    if (req.isAuthenticated()) {
        return next();
      }
      res.status(401).json({ message: "Unauthorized. Please log in." });
}

