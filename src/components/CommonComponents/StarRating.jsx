import React from "react";
import { FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const StarRating = ({ rating = 3.5 }) => {
  const ratings = Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) {
      return <FaStar key={index} className="w-5 h-5 text text-[#FFAD33]" />;
    } else if (rating >= index + 0.5) {
      return (
        <FaStarHalfAlt key={index} className="w-5 h-5 text text-[#FFAD33]" />
      );
    } else {
      return <FaRegStar key={index} className="w-5 h-5 text text-[#FFAD33]" />;
    }
  });

  return <div className="flex items-center gap-1">{ratings}</div>;
};

export default StarRating;
