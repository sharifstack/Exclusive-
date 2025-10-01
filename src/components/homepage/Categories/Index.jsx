import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import BrowseCategoryCard from "../../CommonComponents/BrowseCategoryCard";
import { BsEarbuds, BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiMobile3 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuGamepad } from "react-icons/lu";
import { PiHeadphonesThin } from "react-icons/pi";
import { GiClothes, GiRunningShoe } from "react-icons/gi";

export const browseCategory = [
  {
    item: 1,
    categoryName: "Phones",
    icon: <CiMobile3 />,
  },

  {
    item: 2,
    categoryName: "Computers",
    icon: <HiOutlineComputerDesktop />,
  },

  {
    item: 3,
    categoryName: "SmartWatch",
    icon: <BsSmartwatch />,
  },

  {
    item: 4,
    categoryName: "Camera",
    icon: <CiCamera />,
  },

  {
    item: 5,
    categoryName: "HeadPhones",
    icon: <PiHeadphonesThin />,
  },

  {
    item: 6,
    categoryName: "Gaming",
    icon: <LuGamepad />,
  },

  {
    item: 7,
    categoryName: "Earbuds",
    icon: <BsEarbuds />,
  },

  {
    item: 8,
    categoryName: "Clothes",
    icon: <GiClothes />,
  },

  {
    item: 9,
    categoryName: "Shoes",
    icon: <GiRunningShoe />,
  },
];

const Categories = () => {
  return (
    <div>
      <div className="container">
        <ProductCommonLayout
          ProductCard={BrowseCategoryCard}
          className="mt-[70px]"
          title="Categories"
          desc="Browse By Category"
          Arrows={true}
          itemsPerSlide={6}
          Data={browseCategory}
        />

        <div className="allProductsbtn  flex justify-center border-b border-HoverButton2_A0BCE0 pb-[70px]">
          <h2 className="bg-Button2_DB4444 font-poppins text-base font-medium py-4 px-12 text-text_FAFAFA cursor-pointer rounded">
            View All Products
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Categories;
