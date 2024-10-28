const mongoose = require("mongoose");
const Note = require("../models/listing");
const express = require("express");
const router = express.Router();
const User = require("../models/user");
// const wrapAsyc = require("../utils/wrapAsyc");
const passport = require("passport");
const app = express();
const cors = require("cors");
app.use(cors());






const fetchListOfNotes = async (req, res) => {
  let noteList;
  try {
    noteList = await Note.find();
  } catch (e) {
    console.log(e);
  }

  if (!noteList) {
    return res.status(404).json({ message: "No Notes Found!" });
  }

  return res.status(200).json({ noteList });
};

const handleNoteClick = async (req, res) => {
  const id = req.params.id;

  const { title, description } = req.body;
  let currentNote;
  try {
    currentNote = await Note.findById(id, {
      title,
      description,
    });
  } catch (e) {
    console.log(e);

    return res.status(500).json({
      message: "Something went wrong ! Please try again",
    });
  }

  if (!currentNote) {
    return res.status(500).json({ message: "Unable to view" });
  }

  return res.status(200).json({ currentNote });
};

const handleSignUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeroedUser = await User.register(newUser, password);
    console.log(registeroedUser);
    // req.login(registeroedUser, (err)=>{  //After signup auto login
    //   if(err){
    //     return next(err);
    //   }
    //   // req.flash("success", "Welcome to IdeaShare");
    //   res.send("success");
    //   // res.redirect("/listings");
    // })
    // res.send("successfuly registered!");
    return res.status(200).json({ registeroedUser });
    // return res.status(200).json("yes it work!");
  } catch (e) {
    // req.flash("error", e.message);
    // res.redirect("/signup");
    res.status(500).json({ error: "Error Occured" });
  }
};

const handleSignIn = async (req, res) => {
  // passport.authenticate("local", {
  //   failureRedirect: "/login",
  //   failureFlash: true,
  // }),
  console.log(req.body);
  
  // passport.authenticate("local");
  return res.status(200).json("yes it work!");


    async (req, res) => {
      // res.send("success", "Welcome back to IdeaShare.");

      return res.status(200).json("yes it work!");
      // let redirectUrl = res.locals.redirectUrl || "/listings";
      // res.redirect(redirectUrl);
    };
};

//   module.exports = {fetchListOfBlogs, deleteABlog, updateABlog, addNewBlog};
module.exports = {
  fetchListOfNotes,
  handleNoteClick,
  handleSignUp,
  handleSignIn,
};
