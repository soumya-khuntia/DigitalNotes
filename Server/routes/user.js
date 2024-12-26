const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsyc = require("../utils/wrapAsyc");
const passport = require("passport");
const ensureAuthenticated = require("../middleware");
const mongoose = require("mongoose");
// const { saveRedirectUrl } = require("../middleware");

const CLIENT_URL = "http://localhost:5173/";

router.post(
  "/signup",
  wrapAsyc(async (req, res) => {
    
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });

      const registeroedUser = await User.register(newUser, password);

      return res.status(200).json({
        newUser,
        message: "Welcome to DigitalNote!",
        user: registeroedUser,
      });
    } catch (e) {
      return res.status(400).json({
        flashMessage: { type: "error", text: e.message },
      });
    }
  })
);

router.post("/signin", passport.authenticate("local"), (req, res) => {
  res.json({ user: req.user, message: "Login successful!" });
});

// Route to check if a user is currently authenticated
router.get("/current-user", (req, res) => {
  // console.log("inside curruser");

  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: "No user is authenticated" });
  }
});



router.post("/logout", (req, res) => {
  // req.logout(err => {

  //   if (err) {
  //     return res.status(500).json({ message: "Failed to log out" });
  //   }
  //   // res.clearCookie("connect.sid"); // Clear the session cookie if using sessions
  //   res.redirect(CLIENT_URL);
  //   // res.status(200).json({ message: "Logged out successfully" });
  // });

  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed." });
    }
    res.clearCookie("sessionId"); // Clear the session cookie
    res.status(200).json({ message: "Logged out successfully." });
  });
});

module.exports = router;
