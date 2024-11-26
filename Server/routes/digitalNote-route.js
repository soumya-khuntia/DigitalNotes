const express = require("express");
const noteRouter = express.Router();
const {saveRedirectUrl} = require("../middleware");
const passport = require("passport");

const {
  fetchListOfNotes,
  handleNoteClick,
//   addNewBlog,
//   updateABlog,
//   deleteABlog,
handleSignUp,
handleSignIn,
fetchListOfReviews
} = require("../controller/note-controller");

noteRouter.get("/", fetchListOfNotes,fetchListOfReviews,handleNoteClick);
// noteRouter.post("/",fetchListOfReviews);

// noteRouter.get("/note/:id/reviews", fetchListOfReviews);
noteRouter.post("/signup",handleSignUp);
noteRouter.post("/signin",
  passport.authenticate("local", {
    failureRedirect: "/signin",
    // failureFlash: true,
  }),
  handleSignIn);

module.exports = noteRouter;
