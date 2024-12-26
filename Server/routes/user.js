const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsyc = require("../utils/wrapAsyc");
const passport = require("passport");
const ensureAuthenticated = require("../middleware");
const mongoose = require("mongoose");
// const { saveRedirectUrl } = require("../middleware");
const Review = require("../models/review");
const Note = require("../models/listing");

const CLIENT_URL = "http://localhost:5173/";

router.post(
  "/signup",
  wrapAsyc(async (req, res) => {
    // console.log(req.body);

    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });

      const registeroedUser = await User.register(newUser, password);

      return res
        .status(200)
        .json({
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

// Note Routes

router.get("/note/:id/reviews", async (req, res) => {
  // console.log(req.params.id);
  try {
    const note = await Note.findById(req.params.id).populate({
      path: "reviews",
      populate: { path: "author" }, // Populate the author's username
    });
    // const note = await Note.findById(req.params.id).populate("reviews");

    // console.log(note);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    // console.log(note.reviews);

    // console.log(note);

    res.status(200).json({ reviews: note.reviews }); // Send the reviews of the note
  } catch (error) {
    console.error("Error fetching reviews", error);
    res.status(500).json({ message: "Error fetching reviews", error });
  }
});

router.delete("/notes/:noteId/reviews/:reviewId", async (req, res) => {
  const { noteId, reviewId } = req.params;

  try {
    await Note.findByIdAndUpdate(noteId, { $pull: { reviews: reviewId } });
    const review = await Review.findByIdAndDelete(reviewId);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete review" });
  }
});

router.post("/note/:id/reviews", async (req, res) => {
  const { comment, rating, author } = req.body;
  if (!author) {
    return res.status(400).json({ message: "User is not logged in." });
  }

  try {
    let note = await Note.findById(req.params.id);
    // let newReview = new Review(req.body.)
    // console.log(comment,rating,author);

    let newReview = new Review({
      comment,
      rating,
      author,
    });
    // console.log(newReview);

    note.reviews.push(newReview);
    await newReview.save();
    await note.save();
    // console.log(newReview);

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Error creating review", error });
  }
});

router.post("/dashboard/note/view", async (req, res) => {
  try {
    // Get profile data from request body
    const { _id, username } = req.body;
    const userId = _id; // Ensure req.user is defined

    return res.status(200).json({
      message: "Profile updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while updating the profile." });
  }
});

// Profile update route
router.put("/dashboard/:id/profile", async (req, res) => {
  try {
    // console.log(req.body.userId);

    // Assuming req.user contains the logged-in user's information
    const userId = req.body.userId;

    // Get profile data from request body
    // const { regdNo, phoneNo, dob, gender, branch,year, sem } = req.body;
    const { regdNo, phoneNo, dob, gender, branch, year, sem } = req.body;

    // Find the user and update their profile
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        regdNo,
        phoneNo,
        dob,
        gender,
        branch,
        year,
        sem,
      },
      { new: true } // Return the updated user
    );
    // console.log(updatedUser);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while updating the profile." });
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
