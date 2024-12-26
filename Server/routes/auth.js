const passport = require("passport");
const mongoose = require("mongoose");
const express = require("express");
const user = require("../models/user");

const router = express.Router();

const CLIENT_URL = "http://localhost:5173/";

// router.get("/login/success", (req,res)=> {
//     if(req.user){
//         console.log(req.user);

//         res.status(200).json({
//             success: true,
//             user: req.user,
//         })
//     }
// })
// router.get("/login/failed", (req,res)=> {
//     res.status(401).json({
//         success: false,
//         message: "failure",
//     })
// })

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile","email"] })     //,
);

// router.get("/google/callback", passport.authenticate("google",{
//     successRedirect: CLIENT_URL,
//     failureRedirect: CLIENT_URL,
// }))

// router.get("/google/callback", passport.authenticate("google", {
//     failureRedirect: `${CLIENT_URL}/home`, // Redirect in case of failure
//   }), (req, res) => {
//     console.log(req);
//     res.redirect(`${CLIENT_URL}?user=${JSON.stringify(req.user)}`);
//   });

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:5173/signin" }),
  (req, res) => {
    
    res.redirect(CLIENT_URL+"dashboard");
  }
);

// Route to get current user from session
router.get("/current-user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

module.exports = router;
