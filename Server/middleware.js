module.exports.saveRedirectUrl = (req,res,next)=>{
    // Saves redirect url in locals
    if(req.session.redirectUrl){
       res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}