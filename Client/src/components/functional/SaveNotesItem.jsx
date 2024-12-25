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
import StarRating from "../functional/StarRating";
import { toast } from "sonner";

const SaveNotesItem = ({ noteItem }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    noteList,
    setNoteList,
    pending,
    setPending,
    favoritesList,
    setFavoritesList,
  } = useContext(GlobalContext);
  const fileId = import.meta.env.VITE_FIELDID;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handlePreview = (noteUrl) => {
    // Open pdf in a new tab
    window.open(noteUrl, "_blank");
  };

  const handleCloseNote = () => {
    useNavigate("");
  };

  async function handleNoteClick(noteItem) {
    navigate(`/dashboard/view`, { state: { note: noteItem } });
  }

  function handleAddToBookmarks() {
    setFavoritesList((prevList) => [noteItem, ...prevList]);
  }

  function handleRemoveFromBookmarks() {
    toast.warning("Remove From FavoriteList.");
    setFavoritesList((prevFavoritesList) =>
      prevFavoritesList.filter((item) => item._id !== noteItem._id)
    );
  }

  return (
    <>
      <div
        key={noteItem._id}
        className="bg-white p-4 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center w-full h-48 sm:h-56 md:h-64 lg:h-72 cursor-pointer hover:bg-gray-100 transition-colors relative"
      >
        {/* BookMarks */}
        <button
          onClick={
            favoritesList.some((bookM) => bookM._id === noteItem._id)
              ? handleRemoveFromBookmarks
              : handleAddToBookmarks
          }
        >
          {favoritesList.some((bookM) => bookM._id === noteItem._id) ? (
            <FaBookmark className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer" />
          ) : (
            <FaRegBookmark
              className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
              // onClick={toggleBookmark}
            />
          )}
        </button>
        {/* BookMarks Ends */}

        <img
          src={noteItem?.image.url}
          alt={noteItem.title}
          className="h-40 w-40"
          onClick={() => handleNoteClick(noteItem)}
        />
        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2">
          {noteItem?.title}
        </span>

        {/* <FaFilePdf className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500" /> */}
        <div className="mt-4 text-xs sm:text-sm">
          <StarRating totalStars={5} initialRating={3} readonly={true} />
          <p className="mt-1 text-gray-600">3 reviews</p>
        </div>
      </div>
    </>
  );
};

export default SaveNotesItem;
