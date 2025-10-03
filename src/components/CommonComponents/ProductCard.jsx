import React from "react";
import p1 from "../../assets/Products/p1.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import MakeDiscount from "../../helpers/hooks/MakeDiscount";
import StarRating from "./starRating";

const ProductCard = ({ CategoryData }) => {
  return (
    <div className="mt-10">
      <div className="w-[270px]">
        <div className="top bg-Secondary_F5F5F5 rounded overflow-hidden group cursor-pointer">
          <div className="relative">
            {CategoryData.discountPercentage && (
              <span className="w-[55px] h-[26px] bg-Secondary2_DB4444 absolute left-3 top-3 rounded flex justify-center items-center">
                <h4 className="text-white font-poppins font-normal text-xs inline-block">
                  -{CategoryData ? CategoryData.discountPercentage : 0}%
                </h4>
              </span>
            )}

            <div className="absolute right-3 top-3">
              <span className="text-Text2_000000 p-2 bg-Primary_FFFFFF block rounded-full mb-2 hover:bg-Secondary2_DB4444 hover:text-text_FAFAFA transition-all cursor-pointer">
                <IoIosHeartEmpty className="text-2xl " />
              </span>

              <span className="text-Text2_000000 p-2 bg-Primary_FFFFFF block rounded-full hover:bg-Primary1_363738 hover:text-text_FAFAFA transition-all cursor-pointer">
                <IoEyeOutline className="text-2xl " />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center p-[49px]">
            <img
              className="w-full h-full object-cover"
              src={CategoryData ? CategoryData.thumbnail : p1}
              alt={p1}
            />
          </div>

          <div className="addtocart opacity-0 group-hover:opacity-100 bg-button_000000 py-2 transition-all cursor-pointer">
            <h1 className="font-poppins text-base font-medium text-Primary_FFFFFF text-center">
              Add To Cart
            </h1>
          </div>
        </div>

        <div className="bottom">
          <h4 className="font-poppins text-base font-semibold text-Text2_000000 pt-4 truncate">
            {CategoryData ? CategoryData.title : "HAVIT HV-G92 Gamepad"}
          </h4>
          <div className="flex gap-3 py-2">
            <div className="price font-poppins font-medium text-base text-Secondary2_DB4444 ">
              $
              {MakeDiscount(
                CategoryData.price,
                CategoryData.discountPercentage
              ).toFixed(2)}
            </div>
            <div className="offerprice font-poppins font-medium text-base text-button_000000 opacity-50 line-through">
              ${CategoryData ? CategoryData.price : 0}
            </div>
          </div>

          <div className="rating flex items-center gap-1">
            <StarRating rating={CategoryData ? CategoryData.rating : "1"} />

            <h4 className="font-poppins font-medium text-base text-button_000000 opacity-50 pl-2">
              {`(${CategoryData?.reviews?.length})`}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
