import React, { useState } from "react";

const StarRating = ({ totalStars = 5, initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={index}
            className={`text-3xl focus:outline-none ${
              starValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
            onClick={() => handleRatingChange(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
            // key={index}
            // className={`text-3xl focus:outline-none ${
            //   starValue <= rating ? 'text-yellow-400' : 'text-gray-300'
            // }`} // Use rating to determine color
            // style={{ pointerEvents: 'none' }} // Block interactions
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
