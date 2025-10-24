import React, { useRef } from "react";
import ProductCardSkeleton from "../../helpers/ProductCardSkeleton";
import Timer from "../../Features/Timer";
import Heading from "./Heading";
import Slider from "react-slick";
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
  Rows = 1,
}) => {
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: itemsPerSlide || 1,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    rows: Rows || 1,
    responsive: [
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600, // slightly larger mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640, // small tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024, // desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
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
            <div>
              <h2 className="px-12 py-4 bg-Button2_DB4444 text-text_FAFAFA font-poppins text-base font-medium rounded cursor-pointer">
                {ButtonText ? ButtonText : "View All"}
              </h2>
            </div>
          )}
        </div>

        <div>
          <div className="slider-container">
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
