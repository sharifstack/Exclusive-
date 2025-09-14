import React, { useState } from "react";
import { category } from "../../../Database/category";
import "slick-carousel/slick/slick.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import Bannerimg from "../../assets/Banner/Banner1.jpg";

const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <ul style={{ margin: "0px", display: "flex" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "16px",
            height: "16px",
            color: "#ffffff",
            background: "#DB4444",
            border: "3px white solid",
            borderRadius: "50%",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "16px",
            height: "16px",
            background: "#FFFFFF",
            opacity: "0.5",
            borderRadius: "50%",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      setcurrentSlide(currentSlide);
    },
  };
  return (
    <div>
      <div className="container">
        <div className="flex">
          <div className="left w-[23%] border-r border-r-Text2_000000/80 cursor-pointer">
            <ul className="pt-10">
              {category.map((item) => (
                <div className="flex items-center  justify-between hover:bg-Text1_7D8184 hover:text-text_FAFAFA hover:scale-105 transition-all origin-right duration-200 ">
                  <li className="cursor-pointer   font-poppins text-base font-normal py-3">
                    {item.category}
                  </li>

                  {item.subCategory && (
                    <span className="pr-4 text-xl">
                      <MdOutlineKeyboardArrowRight />
                    </span>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="right w-[77%] pt-10 pl-[45px]">
            <div className="slider-container">
              <Slider {...settings}>
                {[...new Array(5)].map((_, index) => (
                  <div>
                    <img
                      className="w-full h-full object-cover"
                      src={Bannerimg}
                      alt={Bannerimg}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
