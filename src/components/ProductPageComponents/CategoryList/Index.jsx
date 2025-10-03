import React from "react";

const CategoryList = ({ categoryData, isLoading }) => {
  return (
    <div className="w-[23%]">
      <div className="container">
        <div className="cursor-pointer capitalize">
          <div>
            <h2 className="text-xl font-inter font-bold mb-11">
              Shop By Category
            </h2>
          </div>
          {isLoading ? (
            <ul className="">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3"
                >
                  <li className="h-5 w-32 bg-gray-300 rounded animate-pulse"></li>
                </div>
              ))}
            </ul>
          ) : (
            <ul className="">
              {categoryData?.map((item) => (
                <div className="flex items-center  justify-between hover:bg-Text1_7D8184 hover:text-text_FAFAFA hover:scale-105 transition-all origin-right duration-200 ">
                  <li className="cursor-pointer   font-poppins text-base font-normal py-3">
                    {item}
                  </li>
                </div>
              ))}
            </ul>
          )}

          <div className="colors">
            <div className="my-8">
              <h2 className="text-xl font-inter font-bold ">Shop By Color</h2>
            </div>
            <div className="flex items-center gap-2 mb-4 cursor-pointer">
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

            <div className="flex items-center gap-2 mt-4 cursor-pointer">
              <span className="block w-4 h-4 rounded-full bg-Button1_00FF66 "></span>
              <h4 className="font-normal text-base font-poppins text-[#00000080]">
                Color 3
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
