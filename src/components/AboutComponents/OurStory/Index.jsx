import React from "react";
import aboutimg from "../../../assets/About/about.png";

const OurStory = () => {
  return (
    <div>
      <div className="container ">
        <div className="Heading&Image flex items-center">
          <div className="">
            <h1 className="font-inter font-semibold text-[54px] text-Text2_000000">
              Our Story
            </h1>
            <p className="font-poppins font-normal text-base text-Text2_000000 mt-10 mb-6  max-w-[525px]">
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

          <div className="relative left-[51%] -translate-x-[51%] w-[837px]">
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
