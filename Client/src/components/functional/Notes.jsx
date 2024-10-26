import React, { useState } from 'react';
import { FaEye, FaDownload, FaArrowLeft, FaFilePdf, FaBookmark, FaRegBookmark, FaTimes, FaPaperPlane } from 'react-icons/fa';
import StarRating from '../functional/StarRating';

const Notes = () => {
    const [selectedNote, setSelectedNote] = useState(null);
    const [bookmarked, setBookmarked] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [newReview, setNewReview] = useState({ rating: 0, content: '' });

    const handleNoteClick = (index) => {
        setSelectedNote(index);
    };

    const handleCloseNote = () => {
        setSelectedNote(null);
    };

    const handleNewReviewSubmit = (e) => {
        e.preventDefault();
        const review = {
            id: reviews.length + 1,
            author: "Current User",
            rating: newReview.rating,
            content: newReview.content,
            date: new Date().toLocaleDateString()
        };
        reviews.unshift(review);
        setNewReview({ rating: 0, content: '' });
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
        { id: 1, author: "John Doe", content: "Great notes! Very helpful.", rating: 5, date: "2023-07-01" },
        { id: 2, author: "Jane Smith", content: "Could use more detail, but overall good.", rating: 4, date: "2023-06-30" },
        { id: 3, author: "Mike Johnson", content: "Excellent resource for studying.", rating: 3, date: "2023-06-29" },
    ];

    return (
        <>
            <h1 className="text-2xl font-bold mb-2 text-center">Notes</h1>
            {selectedNote === null ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center w-full h-48 sm:h-56 md:h-64 lg:h-72 cursor-pointer hover:bg-gray-100 transition-colors relative"
                            onClick={() => handleNoteClick(index)}
                        >
                            <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2">
                                Note {index + 1}
                            </span>
                            <FaFilePdf className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500" />
                            <div className="mt-4 text-xs sm:text-sm">
                                <StarRating totalStars={5} initialRating={3} readonly={true} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-between w-full max-w-xs h-48 sm:h-56 md:h-64 lg:h-72 mb-6 relative">
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
                        <button onClick={handlePreview} className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto text-sm sm:text-base transition-colors duration-200">
                            <FaEye className="mr-2" /> Preview
                        </button>
                        <button className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto text-sm sm:text-base transition-colors duration-200">
                            <FaDownload className="mr-2" /> Download
                        </button>
                    </div>
                    <button
                        onClick={handleCloseNote}
                        className="mt-4 text-gray-500 hover:text-gray-700 font-semibold text-sm sm:text-base transition-colors duration-200"
                    >
                        <FaArrowLeft className="inline-block mr-2" />
                        Back to All Notes
                    </button>

                    <hr className="w-full my-6 border-t border-gray-300" />

                    <div className="w-full max-w-2xl px-4 sm:px-0">
                        <h2 className="text-lg sm:text-xl font-semibold mb-4">Reviews</h2>

                        <form onSubmit={handleNewReviewSubmit} className="bg-white p-4 rounded-lg shadow-md mb-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                                <label className="font-semibold text-sm sm:text-base mb-2 sm:mb-0">Your Rating:</label>
                                <StarRating
                                    totalStars={5}
                                    initialRating={newReview.rating}
                                    readonly={false}
                                    onRatingChange={(rating) => setNewReview(prev => ({ ...prev, rating }))}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold text-sm sm:text-base mb-2">Your Review:</label>
                                <textarea
                                    value={newReview.content}
                                    onChange={(e) => setNewReview(prev => ({ ...prev, content: e.target.value }))}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                                    rows="4"
                                    placeholder="Write your review here..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-6 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 flex items-center justify-center text-sm sm:text-base font-medium"
                            >
                                <FaPaperPlane className="mr-2" />
                                Submit Review
                            </button>
                        </form>

                        <div className="space-y-4">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-white p-5 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                                        <div className="flex flex-col mb-2 sm:mb-0">
                                            <span className="font-semibold text-sm sm:text-base text-gray-800">{review.author}</span>
                                            <span className="text-xs text-gray-500">{review.date}</span>
                                        </div>
                                        <StarRating totalStars={5} initialRating={review.rating} readonly={true} />
                                    </div>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{review.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {previewOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Preview: Note {selectedNote + 1}</h2>
                            <button onClick={handleClosePreview} className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                                <FaTimes className="text-xl" />
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

export default Notes;