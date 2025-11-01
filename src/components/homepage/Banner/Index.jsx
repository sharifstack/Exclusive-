import React, { useEffect, useState } from "react";
import { category } from "../../../../Database/category";
import "slick-carousel/slick/slick.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import Bannerimg from "../../../assets/Banner/Banner1.jpg";
import "flowbite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  var settings = {
    dots: !isMobile,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
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
        <ul
          style={{ margin: "0px", display: "flex", justifyContent: "center" }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) =>
      !isMobile ? (
        i === currentSlide ? (
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
        )
      ) : (
        bull
      ),
    afterChange: function (currentSlide) {
      setcurrentSlide(currentSlide);
    },
  };
  return (
    <div>
      <div className="ForLargeDevice">
        <div className="container">
          <div className="flex">
            <div className="left ForLargeDevice w-[23%] border-r border-r-Text2_000000/80 cursor-pointer hidden sm:block">
              <ul className="pt-10">
                {category.map((item) => (
                  <div className="flex items-center justify-between hover:bg-Text1_7D8184 hover:text-text_FAFAFA hover:scale-105 transition-all origin-right duration-200 ">
                    <li className="cursor-pointer  font-poppins text-base font-normal py-3">
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
            <div className="right w-full sm:w-[77%] pt-5 sm:pt-10 sm:pl-[45px]">
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
    </div>
  );
};

export default Banner;
