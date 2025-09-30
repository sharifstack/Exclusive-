import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import img1 from "../../../assets/Arrival/Arrival1.png";
import img2 from "../../../assets/Arrival/Arrival2.png";
import img3 from "../../../assets/Arrival/Arrival3.png";
import img4 from "../../../assets/Arrival/Arrival4.png";

const NewArrival = () => {
  return (
    <div>
      <div className="container">
        <ProductCommonLayout title="Featured" desc="New Arrival" />
        <div className="flex gap-8">
          <div className="left w-1/2">
            <img
              className="w-full h-full object-cover cursor-pointer"
              src={img1}
              alt={img1}
            />
          </div>
          <div className="right w-1/2 flex  flex-col gap-10 ">
            <div className="top">
              <img
                className="w-full h-full object-cover cursor-pointer"
                src={img2}
                alt={img2}
              />
            </div>
            <div className="bottom flex gap-10">
              <div className="left w-full">
                <img
                  className="w-full h-full object-cover cursor-pointer"
                  src={img3}
                  alt={img3}
                />
              </div>
              <div className="right w-full">
                <img
                  className="w-full h-full object-cover cursor-pointer"
                  src={img4}
                  alt={img4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
