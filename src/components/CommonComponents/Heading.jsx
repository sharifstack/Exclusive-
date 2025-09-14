import React from "react";

const Heading = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="block bg-Secondary2_DB4444 h-10 rounded w-5 "></span>
        <h3 className="text-Secondary2_DB4444 font-poppins font-semibold">
          {title ? title : "Today's"}
        </h3>
      </div>
      <div className="">
        <h1 className="font-inter text-4xl font-semibold text-Text2_000000">
          {desc ? desc : "Flash Sales"}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
