import React from "react";
import StarRating from "../../../CommonComponents/StarRating";
import { LuMinus, LuPlus, LuRefreshCcw } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";

const ProductInfo = ({ productAllDetails }) => {
  const {
    title,
    description,
    price,
    rating,
    stock,
    reviews,
    shippingInformation,
  } = productAllDetails || {};

  const sizes = [
    {
      id: 1,
      size: "XS",
    },
    {
      id: 1,
      size: "S",
    },
    {
      id: 1,
      size: "M",
    },
    {
      id: 1,
      size: "L",
    },
    {
      id: 1,
      size: "XL",
    },
  ];

  return (
    <div className="sm:w-2/5">
      <div>
        <div className="title font-inter font-semibold text-2xl text-Text2_000000">
          {productAllDetails?.title}
        </div>

        <div className="flex  items-center gap-4 py-2 sm:py-4">
          <div className="rating">
            <StarRating rating={4} />
          </div>
          <div className="reviews">
            <h4 className="font-poppins font-normal text-base text-Text2_000000">
              ({productAllDetails?.rating} Reviews)
            </h4>
          </div>
          <div>
            <h5>|</h5>
          </div>
          <div className="inStock">
            <h4 className="font-poppins font-normal text-base text-Button1_00FF66">
              {productAllDetails?.stock} In Stock
            </h4>
          </div>
        </div>
        <div className="price">
          <h2 className="font-inter font-normal text-2xl text-Text2_000000">
            ${productAllDetails?.price}
          </h2>
        </div>
        <div className="desc max-w-[385px] border-b border-Text2_000000 py-3 sm:py-6">
          <p className="font-poppins font-normal text-xs text-Text2_000000  ">
            {productAllDetails?.description}
          </p>
        </div>

        <div className="colors py-6 flex items-center gap-6">
          <h2 className="font-inter font-normal text-xl text-Text2_000000">
            Colours:
          </h2>
          <div className="flex gap-2">
            <span className="block bg-HoverButton2_A0BCE0 w-5 h-5 rounded-full hover:border-2 hover:border-black cursor-pointer"></span>
            <span className="block bg-HoverButton_E07575 w-5 h-5 rounded-full hover:border-2 hover:border-black  cursor-pointer"></span>
          </div>
        </div>

        <div className="size flex items-center gap-6">
          <div>
            <h2 className="font-inter font-normal text-xl text-Text2_000000">
              Size:
            </h2>
          </div>
          <div className="flex gap-4">
            {sizes?.map((item) => (
              <div className="border-2 border-[rgba(0,0,0,0.5)] rounded w-8 h-8 flex items-center justify-center hover:border-0 hover:bg-Secondary2_DB4444 text-Text2_000000 hover:text-text_FAFAFA cursor-pointer">
                <h2 className="text-sm font-poppins font-medium">
                  {item.size}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="quantity&buyNow py-4 sm:py-0 sm:pt-6 sm:pb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center">
            <div className="Quantity flex border border-Text2_000000 rounded">
              <span className="w-10 h-11 p-3 cursor-pointer hover:bg-Button2_DB4444 hover:text-text_FAFAFA">
                <LuMinus />
              </span>
              <div className="border-l border-r  border-l-Text2_000000  border-r-Text2_000000 w-72 sm:w-20 h-11 py-2 px-[34px]">
                <h2 className="text-center">2</h2>
              </div>
              <span className=" w-10 h-11 p-3 cursor-pointer hover:bg-Button2_DB4444 hover:text-text_FAFAFA">
                <LuPlus />
              </span>
            </div>
          </div>
          <div className="buttons flex gap-4">
            <div className="allProductsbtn flex justify-center">
              <button className="bg-Button2_DB4444 font-poppins text-base font-medium py-3 sm:py-2.5 px-[125px] sm:px-12 text-text_FAFAFA cursor-pointer rounded">
                Buy Now
              </button>
            </div>

            <div className="heart border p-2 rounded border-[rgba(0,0,0,0.5)] hover:bg-Secondary2_DB4444 hover:text-text_FAFAFA cursor-pointer ">
              <span className="bg-Secondary2_DB4444">
                <CiHeart className="text-2xl" />
              </span>
            </div>
          </div>
        </div>

        <div className="policies">
          <div className="Delivery">
            <div className="border max-w-[400px] pl-4 pt-6 pb-4 rounded">
              <div className="flex gap-4 items-center">
                <span>
                  <TbTruckDelivery className="w-10 h-10" />
                </span>
                <div>
                  <h4 className="font-poppins font-medium text-base text-Text2_000000 mb-2">
                    Free Delivery
                  </h4>
                  <p className="font-poppins font-medium text-xs text-Text2_000000 underline">
                    {productAllDetails?.shippingInformation}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ReturnDelivery">
            <div className="border max-w-[400px] pl-4 pt-6 pb-4 rounded">
              <div className="flex gap-4 items-center">
                <span>
                  <LuRefreshCcw className="w-10 h-10" />
                </span>
                <div>
                  <h4 className="font-poppins font-medium text-base text-Text2_000000 mb-2">
                    Return Delivery
                  </h4>
                  <p className="font-poppins font-medium text-xs text-Text2_000000 flex items-center">
                    Free 30 Days Delivery Returns.
                    <p className="underline">Details</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
