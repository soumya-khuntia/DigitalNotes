import React, { useState } from 'react';

const StarRating = ({ totalStars = 5, initialRating = 0, onRatingChange, readonly = false }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  const handleRatingChange = (newRating) => {
    if (readonly) return;
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
              starValue <= (readonly ? rating : (hover || rating)) ? 'text-yellow-400' : 'text-gray-300'
            } ${readonly ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={() => handleRatingChange(starValue)}
            onMouseEnter={() => !readonly && setHover(starValue)}
            onMouseLeave={() => !readonly && setHover(null)}
            disabled={readonly}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;