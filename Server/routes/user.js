const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsyc = require("../utils/wrapAsyc");
const passport = require("passport");
// const { saveRedirectUrl } = require("../middleware");

// router.get("/signup", (req, res) => {
//   res.render("users/signup.ejs");
// });

router.post(
  "/signup",
  wrapAsyc(async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registeroedUser = await User.register(newUser, password);
      // console.log(registeroedUser);
    //   req.login(registeroedUser, (err)=>{  //After signup auto login
        // if(err){
        //   return next(err);
        // }
    //     req.flash("success", "Welcome to IdeaShare");
    //     res.redirect("/listings");
    //   })
      return res.status(200).json({ message: "Welcome to DigitalNote!", user: registeroedUser });
    } catch (e) {
    //   req.flash("error", e.message);
    //   res.redirect("/signup");
        // res.send("some error occured!");
        // return res.status(400).json({ message: e.message });
        return res.status(400).json({ 
          flashMessage: { type: "error", text: e.message } 
      });
    }
  })
);

// router.get("/login", (req, res) => {
//   res.render("users/login.ejs");
// });

// router.post(
//   "/signin",
// //   saveRedirectUrl,
//   passport.authenticate("local", {
//      successRedirect: '/',
//   failureRedirect: '/signin'
//   }),

    

// //   passport.authenticate("local");
//   async(req, res) => {
//     // req.flash("success", "Welcome back to IdeaShare.");
//     // let redirectUrl = res.locals.redirectUrl || "/listings";
//     // res.redirect(redirectUrl);
//     // res.send("It's work");
//     console.log(req.body);
    
//     return res.status(200).json({ flashMessage: { type: "success", text: "Welcome back to DigitalNote!" } });
//   },
// );


router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), (req, res) => {
  res.status(200).json({ message: "Welcome back to DigitalNote!" });
});


router.get("/logout", (req, res,next) => {
  req.logout((err)=>{
    if(err){
      return next(err);
    }
    return res.status(200).json({ message: "Successfully logout!" });

  })
});



module.exports = router;
