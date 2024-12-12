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

  const handlePreview = (noteUrl) => {
    // Open pdf in a new tab
    window.open(noteUrl, "_blank");
  };

  const handleCloseNote = () => {
    useNavigate("");
  };

  return (
    <>
      {/* Save Notes section */}

      <div className="flex flex-col items-center">
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-2 text-center">Saved Notes</h1>
          {favoritesList && favoritesList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoritesList.map((item) => (
                <SaveNotesItem item={item} />
              ))}
            </div>
          ) : (
            <div className="flex  justify-center mt-20">
              <p className="lg:text-2xl text-xl text-center text-black font-semibold">
                Nothing is added in favorites.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SavedNotes;
