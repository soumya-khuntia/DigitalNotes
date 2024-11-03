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
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const SaveNotesItem = ({ item }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { note } = location.state || {};
  const { noteList, setNoteList, pending, setPending, handleAddToFavorite } =
    useContext(GlobalContext);
  const { favoritesList, setFavoritesList } = useContext(GlobalContext);
  const fileId = import.meta.env.VITE_FIELDID;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  //   if (!note) {
  //     return <p>Note not found</p>;
  //   }

  const handlePreview = (noteUrl) => {
    // Open pdf in a new tab
    window.open(noteUrl, "_blank");
  };

  const handleCloseNote = () => {
    useNavigate("");
  };

  return (
    <>
      
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-xs h-48 sm:h-56 md:h-64 lg:h-72 mb-6 relative">
        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          {/* Note {selectedNote + 1} */}
          {item.title}
          {/* note */}
        </span>

        <img
          src={item.image.url}
          alt={item.title}
          className="h-40 w-40 object-contain"
        />

        {/* <FaFilePdf className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500" /> */}
        {/* <StarRating
          totalStars={5}
          initialRating={3}
          //   onRatingChange={handleRatingChange}
        /> */}
        {/* {bookmarked ? (
          <FaBookmark
            className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
            onClick={toggleBookmark}
          />
        ) : (
          <FaRegBookmark
            className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
            onClick={toggleBookmark}
          />
        )} */}

        <FaBookmark
          className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
          // onClick={toggleBookmark}
          //   onClick={()=>handleAddToFavorite(note)}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 w-full max-w-sm">
        <button
          //   onClick={() => handlePreview(note.noteUrl.url)}
          className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto text-sm sm:text-base"
        >
          <FaEye className="mr-2" /> Preview
        </button>
        <a
          href={downloadUrl}
          //   download={`${note.title}.pdf`}
          className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto text-sm sm:text-base"
        >
          <FaDownload className="mr-2" /> Download
        </a>
      </div>
      <button
        // onClick={() => navigate("/dashboard")}
        className="mt-4 text-gray-500 hover:text-gray-700 font-semibold text-sm sm:text-base"
      >
        <FaArrowLeft className="inline-block mr-2" />
        Back to All Notes
      </button>

    
      
    </>
  );




  <div>
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-xs h-48 sm:h-56 md:h-64 lg:h-72 mb-6 relative">
        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          {/* Note {selectedNote + 1} */}
          {item.title}
          {/* note */}
        </span>

        <img
          src={item.image.url}
          alt={item.title}
          className="h-40 w-40 object-contain"
        />

        {/* <FaFilePdf className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500" /> */}
        {/* <StarRating
          totalStars={5}
          initialRating={3}
          //   onRatingChange={handleRatingChange}
        /> */}
        {/* {bookmarked ? (
          <FaBookmark
            className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
            onClick={toggleBookmark}
          />
        ) : (
          <FaRegBookmark
            className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
            onClick={toggleBookmark}
          />
        )} */}

        <FaBookmark
          className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
          // onClick={toggleBookmark}
          //   onClick={()=>handleAddToFavorite(note)}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 w-full max-w-sm">
        <button
          //   onClick={() => handlePreview(note.noteUrl.url)}
          className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto text-sm sm:text-base"
        >
          <FaEye className="mr-2" /> Preview
        </button>
        <a
          href={downloadUrl}
          //   download={`${note.title}.pdf`}
          className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto text-sm sm:text-base"
        >
          <FaDownload className="mr-2" /> Download
        </a>
      </div>
      <button
        // onClick={() => navigate("/dashboard")}
        className="mt-4 text-gray-500 hover:text-gray-700 font-semibold text-sm sm:text-base"
      >
        <FaArrowLeft className="inline-block mr-2" />
        Back to All Notes
      </button>
  </div>
};




export default SaveNotesItem;
