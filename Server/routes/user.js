const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsyc = require("../utils/wrapAsyc");
const passport = require("passport");
const ensureAuthenticated  = require("../middleware");
const mongoose = require('mongoose');
// const { saveRedirectUrl } = require("../middleware");
const Review = require("../models/review");

// router.get("/signup", (req, res) => {
//   res.render("users/signup.ejs");
// });
const CLIENT_URL = "http://localhost:5173/";

// // Your Review model (adjust the schema as per your database design)
// const Review = mongoose.model('Review', new mongoose.Schema({
//   noteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Note' }, // Reference to the note
//   rating: Number,
//   comment: String,
//   author: String, // You could use a user ID here
//   date: { type: Date, default: Date.now },
// }));

// // Assuming you have a 'Note' model that stores notes
// const Note = mongoose.model('Note', new mongoose.Schema({
//   title: String,
//   content: String,
//   // other fields
// }));


// // Endpoint to fetch reviews for a specific note
// router.get('/note/:id/reviews', async (req, res) => {
//   console.log(req.params);
  
//   try {
//     const { id } = req.params;  // Extract the note ID from the URL

//     // Find reviews for the note by noteId
//     const reviews = await Review.find({ noteId: id });

//     if (reviews.length === 0) {
//       return res.status(404).json({ message: 'No reviews found for this note' });
//     }

//     // Return reviews in the response
//     res.json({ reviewList: reviews });
//   } catch (error) {
//     console.error('Error fetching reviews:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });





router.post(
  "/signup",
  wrapAsyc(async (req, res) => {
    // console.log(req.body);
    
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      
      const registeroedUser = await User.register(newUser, password);
    //   req.login(registeroedUser, (err)=>{  //After signup auto login
        // if(err){
        //   return next(err);
        // }
    //     req.flash("success", "Welcome to IdeaShare");
    //     res.redirect("/listings");
    //   })
      return res.status(200).json({newUser, message: "Welcome to DigitalNote!", user: registeroedUser });
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




// router.post('/signin', 
//   passport.authenticate('local', { session: true }), 
//   (req, res) => {
//     // console.log(req.user._id);
    
//     res.status(200).json({  user: req.user });
//   }
// );
router.post('/signin', 
  passport.authenticate('local'), 
  (req, res) => {
    // console.log(req.user);
    
    // res.status(200).json({  user: req.user });
    res.json({ user: req.user, message: "Login successful!" });
  }
);

// Route to check if a user is currently authenticated
router.get("/current-user", (req, res) => {
  // console.log("inside curruser");
  
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: "No user is authenticated" });
  }
});


// Profile update route
router.put("/dashboard/profile", async (req, res) => {
  try {
    
    // Get profile data from request body
    const { _id, username, email, regdNo, phoneNo, dob, gender, branch, year, sem } = req.body;
    const userId = _id; // Ensure req.user is defined

    // Update user profile
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email, regdNo, phoneNo, dob, gender, branch, year, sem },
      { new: true, runValidators: true } // Return the updated user with validation
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ message: "An error occurred while updating the profile." });
  }
});


router.post("/dashboard/note/view", async (req, res) => {
  try {
    
    // Get profile data from request body
    const { _id, username } = req.body;
    const userId = _id; // Ensure req.user is defined

    // console.log(req.body);
    

    return res.status(200).json({
      message: "Profile updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ message: "An error occurred while updating the profile." });
  }
});

router.post("/note/:id/reviews", async (req, res) => {
  const { comment, rating, author } = req.body;
  

  if (!author) {
    return res.status(400).json({ message: "User is not logged in." });
  }

  try {
    const newReview = await Review.create({
      comment,
      rating,
      author,
    });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Error creating review", error });
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
})

// // Profile update route
// router.put("/profile",  async (req, res) => {
//   try {
//     console.log(req.user._id);
    
//     // Assuming req.user contains the logged-in user's information
//     const userId = req.user._id;

//     // Get profile data from request body
//     const { regdNo, phoneNo, dob, gender, branch,year, sem } = req.body;

//     // Find the user and update their profile
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       {
//         regdNo,
//         phoneNo,
//         dob,
//         gender,
//         branch,
//         year,
//         sem,
//       },
//       { new: true } // Return the updated user
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     return res.status(200).json({
//       message: "Profile updated successfully!",
//       user: updatedUser,
//     });
//   } catch (error) {
//     console.error("Error updating profile:", error);
//     return res.status(500).json({ message: "An error occurred while updating the profile." });
//   }
// });





module.exports = router;
