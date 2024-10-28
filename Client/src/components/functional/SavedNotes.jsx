import React, { useState } from 'react';
import { FaEye, FaDownload, FaArrowLeft, FaFilePdf, FaBookmark, FaRegBookmark, FaTimes, FaPaperPlane, FaEdit, FaTrash } from 'react-icons/fa';
import StarRating from '../functional/StarRating';

const ReviewSection = ({ reviews, setReviews, newReview, setNewReview, handleNewReviewSubmit }) => {
    const currentUserId = "user1"; 

    const handleEdit = (reviewId) => {
        const reviewToEdit = reviews.find(review => review.id === reviewId);
        setNewReview({
            rating: reviewToEdit.rating,
            content: reviewToEdit.content,
            isEditing: true,
            editId: reviewId
        });
    };

    const handleDelete = (reviewId) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            setReviews(reviews.filter(review => review.id !== reviewId));
        }
    };

    return (
        <div className="w-full max-w-2xl px-2 sm:px-4 md:px-0">
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center">
                <span className="mr-2">Reviews & Feedback</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded whitespace-nowrap">
                    {reviews.length} Reviews
                </span>
            </h2>

            <form onSubmit={handleNewReviewSubmit} className="bg-white p-3 sm:p-6 rounded-xl shadow-sm border border-gray-100 mb-4 sm:mb-8">
                <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <label className="text-sm font-medium text-gray-700">Rate this note</label>
                        <div className="flex items-center gap-1">
                            <StarRating
                                key={newReview.rating}
                                totalStars={5}
                                initialRating={newReview.rating}
                                readonly={false}
                                onRatingChange={(rating) => setNewReview(prev => ({ ...prev, rating }))}
                            />
                        </div>
                    </div>

                    <div>
                        <textarea
                            value={newReview.content}
                            onChange={(e) => setNewReview(prev => ({ ...prev, content: e.target.value }))}
                            className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                            rows="4"
                            placeholder="Share your thoughts about this note..."
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
                        >
                            <FaPaperPlane className="mr-2 text-sm" />
                            {newReview.isEditing ? 'Update Review' : 'Post Review'}
                        </button>
                    </div>
                </div>
            </form>

            <div className="space-y-4 sm:space-y-6">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-3 sm:p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md relative">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                            <div className="flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-0">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium text-sm sm:text-base">
                                    {review.author.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 text-sm sm:text-base">{review.author}</h3>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <StarRating totalStars={5} initialRating={review.rating} readonly={true} />
                                        <span className="hidden sm:inline text-sm text-gray-500">•</span>
                                        <time className="text-xs sm:text-sm text-gray-500">{review.date}</time>
                                    </div>
                                </div>
                            </div>
                            {review.userId === currentUserId && (
                                <div className="flex space-x-2 absolute sm:static top-2 right-2">
                                    <button
                                        onClick={() => handleEdit(review.id)}
                                        className="p-1.5 sm:p-2 text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        <FaEdit className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(review.id)}
                                        className="p-1.5 sm:p-2 text-red-600 hover:text-red-800 transition-colors"
                                    >
                                        <FaTrash className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </button>
                                </div>
                            )}
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{review.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SavedNotes = () => {
    const [selectedNote, setSelectedNote] = useState(null);
    const [bookmarked, setBookmarked] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [newReview, setNewReview] = useState({ rating: 0, content: '', isEditing: false, editId: null });
    const [reviews, setReviews] = useState([
        { id: 1, author: "John Doe", content: "Great notes! Very helpful.", rating: 5, date: "2023-07-01", userId: "user1" },
        { id: 2, author: "Jane Smith", content: "Could use more detail, but overall good.", rating: 4, date: "2023-06-30", userId: "user2" },
        { id: 3, author: "Mike Johnson", content: "Excellent resource for studying.", rating: 3, date: "2023-06-29", userId: "user3" },
    ]);

    const handleNoteClick = (index) => {
        setSelectedNote(index);
    };

    const handleCloseNote = () => {
        setSelectedNote(null);
    };

    const handleNewReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.rating === 0) {
            alert("Please select a rating");
            return;
        }
        if (!newReview.content.trim()) {
            alert("Please write a review");
            return;
        }

        if (newReview.isEditing) {
            setReviews(reviews.map(review => 
                review.id === newReview.editId 
                    ? { ...review, content: newReview.content, rating: newReview.rating }
                    : review
            ));
        } else {
            const review = {
                id: reviews.length + 1,
                author: "Current User",
                rating: newReview.rating,
                content: newReview.content,
                date: new Date().toLocaleDateString(),
                userId: "user1" // Replace with actual user ID
            };
            setReviews([review, ...reviews]);
        }
        setNewReview({ rating: 0, content: '', isEditing: false, editId: null });
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

    return (
        <>
            <h1 className="text-2xl font-bold mb-2 text-center">SavedNotes</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-6 text-center sm:text-left">
                {selectedNote === null ? (<p><span className="text-red-500">*</span> Click on a note to give a review & remove bookmarks</p>) : ''}
            </p>
            {selectedNote === null ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center w-full h-48 sm:h-56 md:h-64 lg:h-72 cursor-pointer hover:bg-gray-100 transition-colors relative"
                            onClick={() => handleNoteClick(index)}
                        >
                            <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2">
                                Note {index + 1}
                            </span>
                            <FaFilePdf className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500" />
                            <div className="mt-4 text-xs sm:text-sm">
                                <StarRating totalStars={5} initialRating={3} readonly={true} />
                                <p className="mt-1 text-gray-600">3 reviews</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-between w-full max-w-xs h-48 sm:h-56 md:h-64 lg:h-72 mb-6 relative">
                        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
                            Note {selectedNote + 1}
                        </span>
                        <FaFilePdf className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500" />
                        <StarRating totalStars={5} initialRating={3} readonly={true} />
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
                        <button onClick={handlePreview} className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto text-sm sm:text-base">
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
                        Back to Saved Notes
                    </button>

                    <hr className="w-full my-6 border-t border-gray-300" />

                    <ReviewSection
                        reviews={reviews}
                        setReviews={setReviews}
                        newReview={newReview}
                        setNewReview={setNewReview}
                        handleNewReviewSubmit={handleNewReviewSubmit}
                    />
                </div>
            )}

            {previewOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl mx-4 sm:mx-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Preview: Note {selectedNote + 1}</h2>
                            <button onClick={handleClosePreview} className="text-gray-500 hover:text-gray-700">
                                <FaTimes />
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-center h-64 sm:h-96 bg-gray-100 rounded">
                            <FaFilePdf className="text-6xl sm:text-8xl text-red-500 mb-4" />
                            <p className="text-gray-600 text-sm sm:text-base">PDF Preview Placeholder</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SavedNotes;