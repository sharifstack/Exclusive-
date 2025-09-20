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
  title = "today's",
  desc = "flash sale",
  Arrows = false,
  Data = [],
}) => {
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: itemsPerSlide || 5,
    slidesToScroll: 2,
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
    <div className={`mt-[140px] mb-[60px] ${className}`}>
      <div className="container">
        <div className="flex items-end justify-between">
          <div className="flex gap-10 items-end">
            <Heading title={title} desc={desc} />
            {timeStamp && <Timer timeOffer={timeOffer} />}
          </div>

          {Arrows && (
            <div className="flex items-center gap-3 cursor-pointer">
              <div onClick={previous} className="">
                <span className="bg-Secondary_F5F5F5 block rounded-full p-4 ">
                  <GoArrowLeft className="w-[40px] h-[40px] text-button_000000" />
                </span>
              </div>

              <div onClick={next}>
                <span className="bg-Secondary_F5F5F5 block rounded-full p-4 ">
                  <GoArrowRight className="w-[40px] h-[40px] text-button_000000" />
                </span>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
              {Data?.map((item, index) => (
                <div>
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
