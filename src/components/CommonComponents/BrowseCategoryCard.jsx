import React from "react";

const BrowseCategoryCard = ({ CategoryData }) => {
  return (
    <div className="my-4 sm:my-0 sm:mt-10 pr-0 sm:pr-[30px] ">
      <div className="w-full h-[145px] border border-black/30 rounded text-button_000000 flex items-center justify-center cursor-pointer   hover:bg-Secondary2_DB4444 hover:text-Primary_FFFFFF">
        <div className="flex flex-col items-center gap-4">
          <span className="text-5xl ">{CategoryData.icon}</span>
          <h1 className="font-poppins text-balance font-normal ">
            {CategoryData.categoryName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategoryCard;
