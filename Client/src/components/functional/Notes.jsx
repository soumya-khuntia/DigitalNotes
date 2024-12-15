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

const Notes = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const { noteList, setNoteList, pending, setPending } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const { currUser, setCurrUser } = useContext(GlobalContext);

  const handleCloseNote = () => {
    setSelectedNote(null);
  };

  const handleRatingChange = (newRating) => {
    console.log("New rating:", newRating);
  };

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
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
              <div
                key={noteItem._id}
                className="bg-white p-4 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center w-full h-48 sm:h-56 md:h-64 lg:h-72 cursor-pointer hover:bg-gray-100 transition-colors relative"
                onClick={() => handleNoteClick(noteItem)}
              >
                <img
                  src={noteItem.image.url}
                  alt={noteItem.title}
                  className="h-40 w-40"
                />
                <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2">
                  {noteItem.title}
                </span>

                {/* <FaFilePdf className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500" /> */}
                <div className="mt-4 text-xs sm:text-sm">
                  <StarRating
                    totalStars={5}
                    initialRating={3}
                    readonly={true}
                  />
                  <p className="mt-1 text-gray-600">3 reviews</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-center font-semibold text-black lg:text-2xl md:text-xl sm:text-lg text-base px-4">
              Please update branch and semester to see your Notes!
            </p>
          </div>
        )}

        {previewOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl mx-4 sm:mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Preview: Note {selectedNote + 1}
                </h2>
                <button
                  onClick={handleClosePreview}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center h-64 sm:h-96 bg-gray-100 rounded">
                <FaFilePdf className="text-6xl sm:text-8xl text-red-500 mb-4" />
                <p className="text-gray-600 text-sm sm:text-base">
                  PDF Preview Placeholder
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Notes;
