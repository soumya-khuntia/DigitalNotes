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

const SaveNotesItem = ({ item }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { note } = location.state || {};
  const {
    noteList,
    setNoteList,
    pending,
    setPending,
    handleAddToFavorite,
    handleRemoveFromCard,
  } = useContext(GlobalContext);
  const { favoritesList, setFavoritesList } = useContext(GlobalContext);
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
  return (
    <>
      <div
        key={item._id}
        className="bg-white p-4 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center w-full h-48 sm:h-56 md:h-64 lg:h-72 cursor-pointer hover:bg-gray-100 transition-colors relative"
        onClick={() => handleNoteClick(item)}
      >
        <img src={item.image.url} alt={item.title} className="h-40 w-40" />
        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2">
          {item.title}
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
