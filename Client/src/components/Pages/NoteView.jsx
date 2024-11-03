import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaDownload, FaArrowLeft, FaFilePdf, FaBookmark, FaRegBookmark, FaTimes, FaPaperPlane, FaEdit, FaTrash } from 'react-icons/fa';

import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast } from "sonner";

const NoteView = ({ noteItem }) => {


  const { currUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { note } = location.state || {};
  const { noteList, setNoteList, pending, setPending, handleAddToFavorite } =
    useContext(GlobalContext);
    const [reviews, setReviews] = useState([
      { id: 1, author: "John Doe", content: "Great notes! Very helpful.", rating: 5, date: "2023-07-01", userId: "user1" },
      { id: 2, author: "Jane Smith", content: "Could use more detail, but overall good.", rating: 4, date: "2023-06-30", userId: "user2" },
      { id: 3, author: "Mike Johnson", content: "Excellent resource for studying.", rating: 3, date: "2023-06-29", userId: "user3" },
  ]);

  const fileId = import.meta.env.VITE_FIELDID;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const [inputValue, setInputValue] = useState("");

  if (!note) {
    return <p>Note not found</p>;
  }

  const handlePreview = (noteUrl) => {
    // Open pdf in a new tab
    window.open(noteUrl, "_blank");
  };

  const handleCloseNote = () => {
    useNavigate("");
  };

  const handleEdit = (reviewId) => {
    const reviewToEdit = reviews.find((review) => review.id === reviewId);
    setNewReview({
      rating: reviewToEdit.rating,
      content: reviewToEdit.content,
      isEditing: true,
      editId: reviewId,
    });
  };

  const handleDelete = (reviewId) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      setReviews(reviews.filter((review) => review.id !== reviewId));
    }
  };




  const handleNewReviewSubmit = async (e) => {
    console.log(currUser);
    
    e.preventDefault();
    const profileData = {
      _id: currUser.id,
      username: currUser.username,
      
    };

    try {
      const response = await fetch("http://localhost:8080/dashboard/note/view", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        // Update the currUser state with the new data
        setCurrUser((prevUser) => ({
          ...prevUser,
          username,
        }));
        
        toast.success("Profile updated successfully!");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to update profile");
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-xs h-48 sm:h-56 md:h-64 lg:h-72 mb-6 relative">
        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          {/* Note {selectedNote + 1} */}
          {note.title}
          {/* note */}
        </span>

        <img
          src={note.image.url}
          alt={note.title}
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
          onClick={() => handleAddToFavorite(note)}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 w-full max-w-sm">
        <button
          onClick={() => handlePreview(note.noteUrl.url)}
          className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto text-sm sm:text-base"
        >
          <FaEye className="mr-2" /> Preview
        </button>
        <a
          href={downloadUrl}
          download={`${note.title}.pdf`}
          className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto text-sm sm:text-base"
        >
          <FaDownload className="mr-2" /> Download
        </a>
      </div>
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-4 text-gray-500 hover:text-gray-700 font-semibold text-sm sm:text-base"
      >
        <FaArrowLeft className="inline-block mr-2" />
        Back to All Notes
      </button>

      <form
        onSubmit={handleNewReviewSubmit}
        className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 mb-6 md:mb-8"
      >
        <div className="space-y-3 md:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <label className="text-sm md:text-base font-medium text-gray-700">
              Rate this note
            </label>
            <div className="flex items-center gap-1">
              {/* <StarRating
                key={newReview.rating}
                totalStars={5}
                initialRating={newReview.rating}
                readonly={false}
                onRatingChange={(rating) =>
                  setNewReview((prev) => ({ ...prev, rating }))
                }
              /> */}
            </div>
          </div>

          <div>
            {/* <textarea
            name="textarea"
              // value={newReview.content}
              value=""
              // onChange={(e) =>
              //   setNewReview((prev) => ({ ...prev, content: e.target.value }))
              // }
              className="w-full p-3 md:p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows="4"
              placeholder="Share your thoughts about this note..."
              required
            /> */}
            <textarea name="comment" id=""
            onChange={(e)=> setInputValue(e.target.value)}
            rows={6} cols={15}></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white text-sm md:text-base font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
              <FaPaperPlane className="mr-2 text-xs md:text-sm" />
              {/* {newReview.isEditing ? "Update Review" : "Post Review"} */}
            </button>
          </div>
        </div>
      </form>

      <div className="space-y-4 md:space-y-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm md:text-base font-medium">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-medium text-gray-900">
                    {review.author}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {/* <StarRating
                      totalStars={5}
                      initialRating={review.rating}
                      readonly={true}
                    /> */}
                    <span className="hidden sm:inline text-sm text-gray-500">
                      •
                    </span>
                    <time className="text-xs md:text-sm text-gray-500">
                      {review.date}
                    </time>
                  </div>
                </div>
              </div>
              {/* {review.userId === currentUserId && ( */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(review.id)}
                    className="p-1.5 md:p-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaEdit className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(review.id)}
                    className="p-1.5 md:p-2 text-red-600 hover:text-red-800 transition-colors"
                  >
                    <FaTrash className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                </div>
              {/* )} */}
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {review.content}
            </p>
          </div>
         ))} 
      </div>
    </div>
  );
};

export default NoteView;
