const express = require("express");
const noteRouter = express.Router();


const {
  fetchListOfNotes,
  handleNoteClick,
//   addNewBlog,
//   updateABlog,
//   deleteABlog,
} = require("../controller/note-controller");

noteRouter.get("/", fetchListOfNotes,handleNoteClick);

module.exports = noteRouter;
