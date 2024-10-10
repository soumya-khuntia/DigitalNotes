import React, { useState } from 'react';
import { FaEye, FaDownload, FaArrowLeft, FaFilePdf, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import StarRating from '../functional/StarRating';

const SavedNotes = () => {
    const [selectedNote, setSelectedNote] = useState(null);
    const [bookmarked, setBookmarked] = useState(false);

    const handleNoteClick = (index) => {
        setSelectedNote(index);
    };

    const handleCloseNote = () => {
        setSelectedNote(null);
    };

    const handleRatingChange = (newRating) => {
        console.log('New rating:', newRating);
    };

    const toggleBookmark = () => {
        setBookmarked(!bookmarked);
    };

    const reviews = [
        { id: 1, author: "John Doe", content: "Great notes! Very helpful.", rating: 5 },
        { id: 2, author: "Jane Smith", content: "Could use more detail, but overall good.", rating: 4 },
        { id: 3, author: "Mike Johnson", content: "Excellent resource for studying.", rating: 3 },
    ];

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
                            className="bg-white p-4 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center w-full h-48 sm:h-56 md:h-64 lg:h-72 cursor-pointer hover:bg-gray-100 transition-colors relative"
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
                    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-between w-full max-w-xs h-48 sm:h-56 md:h-64 lg:h-72 mb-6 relative">
                        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
                            Note {selectedNote + 1}
                        </span>
                        <FaFilePdf className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500" />
                        <StarRating totalStars={5} initialRating={3} onRatingChange={handleRatingChange} />
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
                        <button className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto text-sm sm:text-base">
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

                    <div className="w-full max-w-2xl">
                        <h2 className="text-lg sm:text-xl font-semibold mb-4">Reviews</h2>
                        <div className="space-y-4">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold text-sm sm:text-base">{review.author}</span>
                                        <StarRating totalStars={5} initialRating={review.rating} readonly={true} />
                                    </div>
                                    <p className="text-gray-700 text-xs sm:text-sm">{review.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SavedNotes;