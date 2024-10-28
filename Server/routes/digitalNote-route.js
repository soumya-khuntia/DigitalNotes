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
handleSignIn
} = require("../controller/note-controller");

noteRouter.get("/", fetchListOfNotes,handleNoteClick);


noteRouter.post("/signup",handleSignUp);
noteRouter.post("/signin",
  passport.authenticate("local", {
    failureRedirect: "/signin",
    // failureFlash: true,
  }),
  handleSignIn);

module.exports = noteRouter;
