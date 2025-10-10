import React from "react";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";

const Error = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="text-center my-[140px]">
        <div className="">
          <h1 className="font-inter font-medium text-[110px] text-Text2_000000">
            404 Not Found
          </h1>
          <p className="font-poppins font-normal text-base text-Text2_000000 mt-10 mb-20">
            Your visited page not found. You may go home page.
          </p>
        </div>

        <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded bg-Button2_DB4444 text-text_FAFAFA ">
          Back to home page
        </button>
      </div>
    </div>
  );
};

export default Error;
