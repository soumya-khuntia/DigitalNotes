const mongoose = require("mongoose");
const Note = require("../models/listing");

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
  
      return res
        .status(500)
        .json({
          message: "Something went wrong ! Please try again",
        });
    }
  
    if (!currentNote) {
      return res.status(500).json({ message: "Unable to view" });
    }
  
    return res.status(200).json({ currentNote });
  };



//   module.exports = {fetchListOfBlogs, deleteABlog, updateABlog, addNewBlog};
module.exports = {fetchListOfNotes, handleNoteClick};