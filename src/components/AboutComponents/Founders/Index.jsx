import React, { useEffect, useState } from "react";
import founder1 from "../../../assets/About/Founders/founder1.png";
import founder2 from "../../../assets/About/Founders/founder2.png";
import founder3 from "../../../assets/About/Founders/founder3.png";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Founders = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const founders = [
    {
      id: 1,
      name: "Tom Cruise",
      desc: "Founder & Chairman",
      img: founder1,
      twitter: <CiTwitter className="" />,
      insta: <CiInstagram />,
      linkedin: <CiLinkedin />,
    },
    {
      id: 2,
      name: "Emma Watson",
      desc: "Founder & Chairman",
      img: founder2,
      twitter: <CiTwitter />,
      insta: <CiInstagram />,
      linkedin: <CiLinkedin />,
    },
    {
      id: 3,
      name: "Will Smith",
      desc: "Founder & Chairman",
      img: founder3,
      twitter: <CiTwitter />,
      insta: <CiInstagram />,
      linkedin: <CiLinkedin />,
    },

    {
      id: 3,
      name: "Will Smith",
      desc: "Founder & Chairman",
      img: founder3,
      twitter: <CiTwitter />,
      insta: <CiInstagram />,
      linkedin: <CiLinkedin />,
    },

    {
      id: 3,
      name: "Will Smith",
      desc: "Founder & Chairman",
      img: founder3,
      twitter: <CiTwitter />,
      insta: <CiInstagram />,
      linkedin: <CiLinkedin />,
    },
  ];

  //responsive slider
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesToShow(1);
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else if (width < 1280) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //responsive slider

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <ul
          style={{ margin: "0px", display: "flex", justifyContent: "center" }}
        >
          {dots}
        </ul>
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
            border: "3px #ffffff80 solid",
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
            background: "#00000030",
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
    <div className="mb-20 sm:mb-[140px]">
      <div className="container">
        <div className="FounderCart">
          <div className="slider-container">
            <Slider {...settings}>
              {founders?.map((item) => (
                <div className="flex flex-col w-[370px] rounded sm:pr-[30px] cursor-pointer ">
                  <div className="Image bg-Secondary_F5F5F5 pt-10 h-[430px]">
                    <img
                      className="w-full h-full object-contain"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h2 className="font-inter font-medium text-[32px] text-Text2_000000 mt-8">
                      {item.name}
                    </h2>
                    <p className="font-poppins font-normal text-base text-Text2_000000 mt-2 mb-3">
                      {item.desc}
                    </p>
                    <div className="social flex gap-4 items-center text-3xl text-Text2_000000">
                      <span>{item.twitter}</span>
                      <span>{item.insta}</span>
                      <span>{item.linkedin}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
