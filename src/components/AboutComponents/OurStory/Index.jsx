import React from "react";
import aboutimg from "../../../assets/About/about.png";

const OurStory = () => {
  return (
    <div>
      <div className="container ">
        <div className="Heading&Image flex flex-col-reverse sm:flex-row sm:items-center">
          <div className="textPart">
            <h1 className="font-inter font-semibold text-3xl text-center sm:text-start sm:text-[54px] text-Text2_000000 my-4">
              Our Story
            </h1>
            <p className="font-poppins font-normal text-base text-Text2_000000 my-4 sm:mt-10 sm:mb-6  max-w-[525px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="font-poppins font-normal text-base text-Text2_000000  max-w-[525px]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>

          <div className="sm:relative sm:left-[51%] sm:-translate-x-[51%] sm:w-[837px]">
            <img
              className="w-full h-full object-cover"
              src={aboutimg}
              alt={aboutimg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
