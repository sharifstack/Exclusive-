import React from "react";
import p1 from "../../assets/Products/p1.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className="mt-10">
      <div className="w-[270px] ">
        <div className="top bg-Secondary_F5F5F5">
          <div className="relative">
            <span className="w-[55px] h-[26px] bg-Secondary2_DB4444 absolute left-3 top-3 rounded flex justify-center items-center">
              <h4 className="text-white font-poppins font-normal text-xs inline-block">
                -40%
              </h4>
            </span>

            <div className="absolute right-3 top-3">
              <span className="text-Text2_000000 p-2 bg-Primary_FFFFFF block rounded-full mb-2">
                <IoIosHeartEmpty className="text-2xl " />
              </span>

              <span className="text-Text2_000000 p-2 bg-Primary_FFFFFF block rounded-full">
                <IoEyeOutline className="text-2xl " />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center p-[49px]">
            <img className="w-full h-full object-cover" src={p1} alt={p1} />
          </div>
        </div>

        <div className="bottom">
          <h4 className="font-poppins text-base font-semibold text-Text2_000000 pt-4">
            HAVIT HV-G92 Gamepad
          </h4>
          <div className="flex gap-3 py-2">
            <div className="price font-poppins font-medium text-base text-Secondary2_DB4444 ">
              $120
            </div>
            <div className="offerprice font-poppins font-medium text-base text-button_000000 opacity-50 line-through">
              $160
            </div>
          </div>

          <div className="rating flex items-center gap-1">
            {[...new Array(5)].map((_, index) => (
              <span>
                <FaStar className="w-5 h-5 text text-[#FFAD33]" />
              </span>
            ))}

            <h4 className="font-poppins font-medium text-base text-button_000000 opacity-50 pl-2">
              {" "}
              {`(${[...new Array(5)]?.length})`}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
