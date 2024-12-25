import React, { useContext, useEffect, useState } from "react";
import {
  FaEye,
  FaDownload,
  FaArrowLeft,
  FaFilePdf,
  FaBookmark,
  FaRegBookmark,
  FaTimes,
} from "react-icons/fa";
import StarRating from "../functional/StarRating";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../layout/Dashboard";
import NoteItem from "./NoteItem";



const Notes = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const { noteList, setNoteList, pending, setPending } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const { currUser, setCurrUser } =
    useContext(GlobalContext);



  const handleCloseNote = () => {
    setSelectedNote(null);
  };

  const handlePreview = () => {
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
  };



  async function fetchListOfBlogs() {
    try {
      const response = await axios.get("http://localhost:8080/api/notes", {
        params: {
          branch: currUser.branch,
          sem: currUser.sem,
        },
      });

      const result = response.data;

      // console.log("Fetched Data:", result);
      if (result && result.noteList && result.noteList.length) {
        setNoteList(result.noteList);
      } else {
        setNoteList([]);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);

      // Optional: Handle UI updates for errors
      setNoteList([]);
      setPending(false);
    } finally {
      setPending(false);
    }
  }

  async function handleNoteClick(noteItem) {
    // const res = await axios.get(
    //   `http://localhost:5000/api/notes/${getCurrNoteItem._id}`
    // );
    // setNoteList(result.noteList);
    navigate(`/dashboard/view`, { state: { note: noteItem } });
    // navigate(`view/${id}`);
  }

  useEffect(() => {
    if (currUser?.branch && currUser?.sem) {
      fetchListOfBlogs();
    } else {
      setNoteList([]); // Clear note list if branch/sem is not set
    }
  }, [currUser.branch, currUser.sem]);

  return (
    <>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-2 text-center">Notes</h1>
        {noteList && noteList.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {noteList.map((noteItem) => (
              <NoteItem noteItem={noteItem} key={noteItem._id}/>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-center font-semibold text-black lg:text-2xl md:text-xl sm:text-lg text-base px-4">
              Please update branch and semester to see your Notes!
            </p>
          </div>
        )}

        
      </div>
    </>
  );
};

export default Notes;
