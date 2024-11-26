import React, { useContext, useEffect, useState } from "react";
import {
  FaEye,
  FaDownload,
  FaArrowLeft,
  FaFilePdf,
  FaBookmark,
  FaRegBookmark,
  FaTimes,
  FaPaperPlane,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { GlobalContext } from "../../context/GlobalState";

import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast } from "sonner";
import StarRating from "../functional/StarRating";
// import { Rating } from 'react-simple-star-rating'
import axios from "axios";

const NoteView = ({ noteItem }) => {
  const { currUser, setCurrUser,handleAddToFavorite,handleRemoveFromCard } = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { note } = location.state || {};
  const noteId = note._id;
  const [inputValue, setInputValue] = useState("");
  // const [rating, setRating] = useState(0);

  const [reviewComment, setReviewComment] = useState("");
  const [newReview, setNewReview] = useState({
    rating: 0, // Default rating
    comment: "", // Default comment
  });
  const {
    noteList,
    setNoteList,
    pending,
    setPending,
    reviewList,
    setReviewList,
    addReview,
  } = useContext(GlobalContext);

  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({ reviews: [] });
  const [starKey, setStarKey] = useState(0);
  const [reviewRating, setReviewRating] = useState(5);
  const [selectedNoteId, setSelectedNoteId] = useState(null); // This could come from props or other logic
  const [bookmarked, setBookmarked] = useState(false);

  const fileId = import.meta.env.VITE_FIELDID;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  // async function fetchListOfReviews(noteId) {
  //   // setPending(true);

  //   const response = await axios.get(`http://localhost:8080/note/${noteId}/reviews`);
  //   console.log(response.data);

  //   const result = await response.data;

  //   console.log(result);
  //   if (result && result.noteList.reviews && result.noteList.reviews.length) {
  //     setReviewList(result.noteList.reviews);
  //     setPending(false);
  //   } else {
  //     setPending(false);
  //     setReviewList([]);
  //   }
  // }
  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:8080/note/:id/review"); // Replace with your API endpoint
      // setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
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

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
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

  const handleDelete = async (reviewId) => {
    try {
      // Send DELETE request to your backend
      const response = await axios.delete(
        `http://localhost:8080/notes/${noteId}/reviews/${reviewId}`
      );
      // Optionally refresh the reviews list after deleting
      if (response) {
        toast.success("Review deleted successfully!");
        navigate("/dashboard/notes");
      }
      // toast.success("Review submitted successfully!");
      // fetchReviews();
      // navigate("/view")
    } catch (error) {
      toast.error("Error deleting review:", error);
    }
  };

  //   if (window.confirm("Are you sure you want to delete this review?")) {
  //     setReviews(reviews.filter((review) => review.id !== reviewId));
  //   }
  // };

  const handleNewReviewSubmit = async (e) => {
    e.preventDefault();

    if (!currUser || !currUser._id) {
      toast.error("User not logged in. Please sign in first.");
      return;
    }

    const reviewData = {
      comment: reviewComment,
      rating: newReview.rating,
      author: currUser._id, // Ensure `_id` is accessible
    };

    try {
      const response = await fetch(
        `http://localhost:8080/note/${noteId}/reviews`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(reviewData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        toast.success("Review submitted successfully!");
        setReviewComment(""); // Reset textarea
        setNewReview({ comment: "", rating: 0 }); // Reset form
        // console.log(result);
        // fetchReviews();
        // setReviewList(result)
        // fetchListOfReviews();  // Reload reviews after submission
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to submit review");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the review.");
    }
  };

  // useEffect(() => {

  //   fetchReviews();
  // }, []);

  // const fetchListOfReviews = async (noteId) => {
  //   console.log("it works");

  //   try {
  //     const response = await axios.get(`http://localhost:8080/note/${noteId}/reviews`);
  //     const reviews = response.data;
  //     console.log("update happens");

  //     // Update reviews in the state
  //     setReview((prevNote) => ({
  //       ...prevNote,
  //       reviews: reviews, // Replace the current reviews with the fetched ones
  //     }));
  //   } catch (error) {
  //     console.error("Error fetching reviews:", error);
  //   }
  // };

  // const fetchListOfReviews = async (noteId) => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/note/${noteId}/reviews`);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch reviews");
  //     }
  //     const reviews = await response.json();
  //     setReview((prevNote) => ({
  //       ...prevNote,
  //       reviews: reviews,  // Update the reviews in state
  //     }));
  //   } catch (error) {
  //     console.error("Error fetching reviews:", error);
  //   }
  // };

  // Fetch reviews when the component is mounted
  // useEffect(() => {
  //   if (noteId) {
  //     fetchListOfReviews(noteId);
  //   }
  // }, [noteId]);
  // useEffect(() => {

  //   fetchListOfReviews(noteId); // Fetch reviews on mount
  // }, [noteId]);

  // useEffect(()=> {
  //   fetchListOfReviews();
  // },[]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-full max-w-xs h-48 sm:h-56 md:h-64 lg:h-72 mb-6 relative">
        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          {note.title}
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

        {/* <FaBookmark
          className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
          // onClick={toggleBookmark}
          onClick={() => handleAddToFavorite(note)}
        /> */}

        {bookmarked ? (
          <FaBookmark
            className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
            onClick={() => {
              toggleBookmark();
              handleRemoveFromCard(note);
            }}
            // onClick={() => handleRemoveFromCard(note)}
            
          />
        ) : (
          <FaRegBookmark
            className="absolute top-2 right-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-500 cursor-pointer"
            onClick={() => {
              toggleBookmark();
              handleAddToFavorite(note);
            }}
            // onClick={() => handleAddToFavorite(note)}
          />
        )}
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
        onClick={() => navigate("/dashboard/notes")}
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
            <div
              className="flex items-center gap-1"
              onClick={(e) => e.preventDefault()}
            >
              <StarRating
                key={newReview.rating}
                totalStars={5}
                initialRating={newReview.rating}
                readonly={false}
                onRatingChange={(rating) =>
                  setNewReview((prev) => ({ ...prev, rating }))
                }
              />
            </div>
          </div>

          <div>
            <textarea
              className="w-full p-3 md:p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              rows={4}
              cols={55}
              placeholder="Write your comment here..."
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white text-sm md:text-base font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              // onClick={()=> fetchListOfReviews(noteId)}
            >
              <FaPaperPlane className="mr-2 text-xs md:text-sm" />
              {/* {newReview.isEditing ? "Update Review" : "Post Review"} */}
            </button>
          </div>
        </div>
      </form>

      {/* All Reviews list*/}
      {/* <div>
        <div>
          {note.reviews.length ? (
            note.reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h2><b>@{review.author.username}</b></h2>
                <div className=" text-xs sm:text-sm">
                  <StarRating

                    totalStars={5}
                    initialRating={review.rating}
                    readonly={true}
                    style={{ pointerEvents: "none", userSelect: "none" }}
                    
                  />
                </div>
                <span>{review.comment}</span>
                
                
                <button onClick={() => handleDelete(review._id)}>Delete</button>
               
              </div>
            ))
          ) : (
            <h3>No Reviews Yet</h3>
          )}
        </div>
      </div> */}

      <div className="space-y-4 md:space-y-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
        {note.reviews.length ? (
          note.reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm md:text-base font-medium">
                    {/* {review.author.charAt(0)} */}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-medium text-gray-900">
                      @{review.author.username}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <StarRating
                        totalStars={5}
                        initialRating={review.rating}
                        readonly={true}
                      />
                      {/* <span className="hidden sm:inline text-sm text-gray-500">{review.comment}</span> */}
                    </div>
                    <div>
                      <span className="hidden sm:inline text-base ">
                        {review.comment}
                      </span>
                    </div>
                    {/* <time className="text-xs md:text-sm text-gray-500">{review.createdAt}</time> */}
                    <span className="hidden sm:inline text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}{" "}
                      {new Date(review.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
                {review.author._id?.toString() === currUser._id && (
                  <div className="flex space-x-2">
                    <button
                      // onClick={() => handleEdit(review.id)}
                      className="p-1.5 md:p-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FaEdit className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="p-1.5 md:p-2 text-red-600 hover:text-red-800 transition-colors"
                    >
                      <FaTrash className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                  </div>
                )}
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {review.content}
              </p>
            </div>
          ))
        ) : (
          <h3>No Reviews Yet</h3>
        )}
      </div>
    </div>
  );
};

export default NoteView;
