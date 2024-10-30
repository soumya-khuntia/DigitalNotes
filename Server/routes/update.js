// const express = require("express");
// const router = express.Router();
// const User = require("../models/user");
// const wrapAsyc = require("../utils/wrapAsyc");
// const passport = require("passport");

// // Profile update route
// router.put("/profile", async (req, res) => {
//   try {
//     if (!req.user) {
//       return res
//         .status(401)
//         .json({ message: "Unauthorized: User not logged in." });
//     }

//     const userId = req.user._id; // Ensure req.user is defined

//     // Get profile data from request body
//     const { username, email, regdNo, phoneNo, dob, gender, branch, year, sem } =
//       req.body;

//     // Update user profile
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { username, email, regdNo, phoneNo, dob, gender, branch, year, sem },
//       { new: true, runValidators: true } // Return the updated user with validation
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
//     return res
//       .status(500)
//       .json({ message: "An error occurred while updating the profile." });
//   }
// });

// module.exports = router;
