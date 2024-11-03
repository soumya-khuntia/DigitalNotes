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
import SaveNotesItem from "./SaveNotesItem";

const SavedNotes = ({ item }) => {
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

  // if (!note) {
  //   return <p>Note not found</p>;
  // }

  const handlePreview = (noteUrl) => {
    // Open pdf in a new tab
    window.open(noteUrl, "_blank");
  };

  const handleCloseNote = () => {
    useNavigate("");
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

  return (
    <>
      {/* Save Notes section */}

      <div className="flex flex-col items-center mt-20">
        {favoritesList && favoritesList.length > 0 ? (
          favoritesList.map((item) => <SaveNotesItem item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-center text-xl text-black font-extrabold">
              Nothing is added in favorites.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SavedNotes;
