const express = require("express");
const dashboardRouter = express.Router();
const User = require("../models/user");
const wrapAsyc = require("../utils/wrapAsyc");
const passport = require("passport");
const ensureAuthenticated = require("../middleware");
const mongoose = require("mongoose");

dashboardRouter.post("/note/view", async (req, res) => {
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
dashboardRouter.put("/:id/profile", async (req, res) => {
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

module.exports = dashboardRouter;
