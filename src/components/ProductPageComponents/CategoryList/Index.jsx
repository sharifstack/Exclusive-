import React from "react";
import BreadCrumb from "../../CommonComponents/BreadCrumb";

const CategoryList = ({ categoryData }) => {
  return (
    <div>
      <BreadCrumb />
      <div className="container">
        <div className="left w-[23%] border-r border-r-Text2_000000/80 cursor-pointer capitalize">
          <div>
            <h2 className="text-xl font-inter font-bold mb-3">
              Shop By Category
            </h2>
          </div>
          <ul className="">
            {categoryData?.map((item) => (
              <div className="flex items-center  justify-between hover:bg-Text1_7D8184 hover:text-text_FAFAFA hover:scale-105 transition-all origin-right duration-200 ">
                <li className="cursor-pointer   font-poppins text-base font-normal py-3">
                  {item}
                </li>
              </div>
            ))}
          </ul>
        </div>

        <div className="colors">
          <div className="mt-3">
            <h2 className="text-xl font-inter font-bold ">Shop By Color</h2>
          </div>
          <div className="flex items-center gap-2 my-4 cursor-pointer">
            <span className="block w-4 h-4 rounded-full bg-Text2_000000 "></span>
            <h4 className="font-normal text-base font-poppins text-[#00000080]">
              Color 1
            </h4>
          </div>

          <div className="flex items-center gap-2 my-4 cursor-pointer">
            <span className="block w-4 h-4 rounded-full bg-Button2_DB4444 "></span>
            <h4 className="font-normal text-base font-poppins text-[#00000080]">
              Color 2
            </h4>
          </div>

          <div className="flex items-center gap-2 my-4 cursor-pointer">
            <span className="block w-4 h-4 rounded-full bg-Button1_00FF66 "></span>
            <h4 className="font-normal text-base font-poppins text-[#00000080]">
              Color 3
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
