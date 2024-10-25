const express = require("express");
const noteRouter = express.Router();


const {
  fetchListOfNotes,
  handleNoteClick,
//   addNewBlog,
//   updateABlog,
//   deleteABlog,
handleSignUp
} = require("../controller/note-controller");

noteRouter.get("/", fetchListOfNotes,handleNoteClick);

noteRouter.post("/signup",handleSignUp);

module.exports = noteRouter;
