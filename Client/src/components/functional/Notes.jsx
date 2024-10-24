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
  // const navigate = useNavigate();

  

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

  const reviews = [
    {
      id: 1,
      author: "John Doe",
      content: "Great notes! Very helpful.",
      rating: 5,
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Could use more detail, but overall good.",
      rating: 4,
    },
    {
      id: 3,
      author: "Mike Johnson",
      content: "Excellent resource for studying.",
      rating: 3,
    },
  ];

  async function fetchListOfBlogs() {
    // setPending(true);

    const response = await axios.get("http://localhost:8080/api/notes");

    const result = await response.data;

    // console.log(result);
    if (result && result.noteList && result.noteList.length) {
      setNoteList(result.noteList);
      setPending(false);
    } else {
      setPending(false);
      setNoteList([]);
    }
  }

  async function handleNoteClick(noteItem) {

    // const res = await axios.get(
    //   `http://localhost:5000/api/notes/${getCurrNoteItem._id}`
    // );
    // setNoteList(result.noteList);
    navigate(`/view`, { state: {note: noteItem } });
    // navigate(`view/${id}`);
  }



  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  return (
    <>
    <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-2 text-center">Notes</h1>
      {selectedNote === null ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
          {noteList && noteList.length ? (
            noteList.map((noteItem) => (
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
            ))
          ) : (
            <h3>No Notes Added</h3>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-between w-full max-w-xs h-48 sm:h-56 md:h-64 lg:h-72 mb-6 relative">
            <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
              Note {selectedNote + 1}
            </span>
            <FaFilePdf className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500" />
            <StarRating
              totalStars={5}
              initialRating={3}
              onRatingChange={handleRatingChange}
            />
            {bookmarked ? (
              <FaBookmark
                className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
                onClick={toggleBookmark}
              />
            ) : (
              <FaRegBookmark
                className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
                onClick={toggleBookmark}
              />
            )}
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 w-full max-w-sm">
            <button
              onClick={handlePreview}
              className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto text-sm sm:text-base"
            >
              <FaEye className="mr-2" /> Preview
            </button>
            <button className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto text-sm sm:text-base">
              <FaDownload className="mr-2" /> Download
            </button>
          </div>
          <button
            onClick={handleCloseNote}
            className="mt-4 text-gray-500 hover:text-gray-700 font-semibold text-sm sm:text-base"
          >
            <FaArrowLeft className="inline-block mr-2" />
            Back to All Notes
          </button>

          <hr className="w-full my-6 border-t border-gray-300" />

          <div className="w-full max-w-2xl">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Reviews</h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-sm sm:text-base">
                      {review.author}
                    </span>
                    <StarRating
                      totalStars={5}
                      initialRating={review.rating}
                      readonly={true}
                    />
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    {review.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* {previewOpen && (
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
      )} */}
      </div>
    </>
  );
};

export default Notes;
