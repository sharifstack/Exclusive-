import React from "react";

const Heading = ({ title, desc = true }) => {
  return (
    <div className="flex justify-between sm:justify-normal sm:flex-col gap-6">
      <div className="flex items-center gap-1 sm:gap-4">
        <span className="block bg-Secondary2_DB4444 h-7 w-2.5 sm:h-10  sm:w-5 rounded"></span>
        <h3 className="text-Secondary2_DB4444 font-poppins font-semibold text-3xl sm:text-base">
          {title ? title : "Today's"}
        </h3>
      </div>

      {desc && (
        <h1 className="font-inter text-3xl sm:text-4xl font-semibold text-Text2_000000">
          {desc ? desc : "Deals & Offers"}
        </h1>
      )}
    </div>
  );
};

export default Heading;
