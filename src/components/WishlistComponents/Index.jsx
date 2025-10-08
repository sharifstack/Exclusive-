import React from "react";
import Slider from "react-slick";
import { useGetAllProductQuery } from "../../Features/Api/ProductApi";
import ProductCard from "../CommonComponents/ProductCard";
import ProductCommonLayout from "../CommonComponents/ProductCommonLayout";
import Heading from "../CommonComponents/Heading";

const WishlistComponents = () => {
  const { data, isLoading, error } = useGetAllProductQuery();
  console.log(data);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="mt-20 mb-[140px]">
      <div className="container">
        <div className="list&Button flex items-center justify-between">
          <h2 className="font-poppins text-base font-normal text-Text2_000000">
            Wishlist (4)
          </h2>

          <div>
            <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded text-Text2_000000 bg-transparent border border-[rgba(0,0,0,0.5)] hover:bg-Button2_DB4444 hover:text-text_FAFAFA transition-all duration-100">
              Move All To Bag
            </button>
          </div>
        </div>
        <div className="Wishlistitems ">
          <Slider {...settings}>
            {data?.products.map((item) => (
              <div className="">
                <ProductCard className={"mt-[60px]"} CategoryData={item} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="JustForYou mt-20">
          <div className="flex items-center justify-between">
            <Heading title={"Just For You"} />
            <div>
              <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded text-Text2_000000 bg-transparent border border-[rgba(0,0,0,0.5)] hover:bg-Button2_DB4444 hover:text-text_FAFAFA transition-all duration-100">
                See All
              </button>
            </div>
          </div>

          <Slider {...settings}>
            {data?.products.map((item) => (
              <div className="">
                <ProductCard className={"mt-[60px]"} CategoryData={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WishlistComponents;
