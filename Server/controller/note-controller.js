const mongoose = require("mongoose");
const Note = require("../models/listing");
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Review = require("../models/review");
// const wrapAsyc = require("../utils/wrapAsyc");
const passport = require("passport");
const app = express();
const cors = require("cors");
app.use(cors());






const fetchListOfNotes = async (req, res) => {
  const { branch, sem } = req.query;
  // console.log(branch);
  // console.log(sem);
  
  
  let noteList;
  // try {
  //   // noteList = await Note.find().populate("reviews").populate("owner");
  //   noteList = await Note.find().populate({
  //     path: "reviews",
  //     populate:{
  //         path: "author",
  //     }
  // })
  // .populate("owner");
  // } catch (e) {
  //   console.log(e);
  // }

  // if (!noteList) {
  //   return res.status(404).json({ message: "No Notes Found!" });
  // }

  // return res.status(200).json({ noteList });





  try {
    // Build a filter object for branch and sem
    const filter = {};

    if (branch) {
      filter.branch = branch; // Add filter for branch if it's provided
      // console.log(filter);
      
    }

    if (sem) {
      filter.sem = sem; // Add filter for sem if it's provided
      // console.log(filter);
      
    }

    // Find notes with the specified filter, and populate necessary fields
    // console.log(Note.find({branch: "CSE"}));
    // console.log(Note.find(filter));
    
    // noteList = await Note.find(filter)
    //   .populate({
    //     path: "reviews",
    //     populate: {
    //       path: "author",
    //     },
    //   })
    //   .populate("owner");
    noteList = await Note.find(filter);
      
      if (!noteList || noteList.length === 0) {
        return res.status(404).json({ message: "No Notes Found!" });
      }
      
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Error fetching notes." });
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
    // console.log(registeroedUser);
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
  // console.log(req.body);
  
  // passport.authenticate("local");
  return res.status(200).json("yes it work!");


    async (req, res) => {
      // res.send("success", "Welcome back to IdeaShare.");

      return res.status(200).json("yes it work!");
      // let redirectUrl = res.locals.redirectUrl || "/listings";
      // res.redirect(redirectUrl);
    };
};

const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (e) {
    console.log(e);
  }

  if (!blogList) {
    return res.status(404).json({ message: "No Blogs Found!" });
  }

  return res.status(200).json({ blogList });
};

const fetchListOfReviews = async (req, res) => {
  // let reviewList;
  console.log("it works on review");
  
  try {
    const note = await Note.findById(req.params.id)
      .populate({
        path: "reviews",
        populate: { path: "author", select: "username" }, // Populate the author's username
      });
      const review = Review.findById(req.params.id);
      console.log(review);
      console.log(note);
      
      
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    // let review = note.reviews;
    res.status(200).json({reviews: note.reviews}); // Send the reviews of the note
  } catch (error) {
    console.error("Error fetching reviews", error);
    res.status(500).json({ message: "Error fetching reviews", error });
  }
};




//   module.exports = {fetchListOfBlogs, deleteABlog, updateABlog, addNewBlog};
module.exports = {
  fetchListOfNotes,
  handleNoteClick,
  handleSignUp,
  handleSignIn,
  fetchListOfReviews
};
