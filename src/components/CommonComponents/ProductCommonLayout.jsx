import React, { useEffect, useRef, useState } from "react";
import ProductCardSkeleton from "../../helpers/ProductCardSkeleton";
import Timer from "../../Features/Timer";
import Heading from "./Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ProductCommonLayout = ({
  className,
  itemsPerSlide,
  ProductCard = () => <ProductCardSkeleton />,
  timeStamp = false,
  timeOffer = 0,
  title = "flash sale",
  desc = false,
  Arrows = false,
  Data = [],
  Loading = false,
  ViewMoreButton = false,
  ButtonText = "View All",
}) => {
  let sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(itemsPerSlide || 5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 480) {
        setSlidesToShow(1);
      } else if (width < 768) {
        setSlidesToShow(2);
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else if (width < 1280) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(itemsPerSlide || 5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerSlide]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className={`mt-10 sm:mt-[140px] mb-0 sm:mb-[60px] ${className}`}>
      <div className="container">
        <div className="sm:flex sm:items-end sm:justify-between">
          <div className="sm:flex sm:gap-10 sm:items-end">
            <Heading title={title} desc={desc} />
            <div className="my-2 sm:my-0 flex sm:block justify-center sm:justify-normal">
              {timeStamp && <Timer timeOffer={timeOffer} />}
            </div>
          </div>

          {Arrows && (
            <div className="flex items-center gap-3 cursor-pointer">
              <div onClick={previous} className="hidden sm:flex">
                <span className="bg-Secondary_F5F5F5 block rounded-full p-4 border sm:border-0">
                  <GoArrowLeft className="sm:w-[40px] sm:h-[40px] text-button_000000" />
                </span>
              </div>

              <div onClick={next} className="hidden sm:flex">
                <span className="bg-Secondary_F5F5F5 block rounded-full p-4 border sm:border-0">
                  <GoArrowRight className="sm:w-[40px] sm:h-[40px] text-button_000000" />
                </span>
              </div>
            </div>
          )}

          {ViewMoreButton && (
            <div className="hidden sm:flex">
              <h2 className="px-12 py-4 bg-Button2_DB4444 text-text_FAFAFA font-poppins text-base font-medium rounded cursor-pointer">
                {ButtonText ? ButtonText : "View All"}
              </h2>
            </div>
          )}
        </div>

        <div>
          <div style={{ width: "100%" }} className="slider-container ">
            <Slider ref={sliderRef} {...settings}>
              {Loading
                ? [...new Array(10)].map((_, index) => (
                    <div key={index}>
                      <ProductCardSkeleton />
                    </div>
                  ))
                : Data?.map((item, index) => (
                    <div key={item.key}>
                      <ProductCard CategoryData={item ? item : {}} />
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
