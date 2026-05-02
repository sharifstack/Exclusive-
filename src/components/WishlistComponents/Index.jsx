import React from "react";
import Slider from "react-slick";
import { useGetAllProductQuery } from "../../Features/Api/ProductApi";
import ProductCard from "../CommonComponents/ProductCard";
import Heading from "../CommonComponents/Heading";
import { Link } from "react-router-dom";
import useWishlist from "../../helpers/hooks/useWishlist";

const WishlistComponents = () => {
  const { data } = useGetAllProductQuery();
  const { wishlistItems } = useWishlist();

  const settings = {
    dots: false,
    infinite: false,
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
            Wishlist ({wishlistItems.length})
          </h2>

          <div>
            <button className="font-poppins text-base font-medium py-4 px-12 cursor-pointer rounded text-Text2_000000 bg-transparent border border-[rgba(0,0,0,0.5)] hover:bg-Button2_DB4444 hover:text-text_FAFAFA transition-all duration-100">
              Move All To Bag
            </button>
          </div>
        </div>

        <div className="Wishlistitems">
          {wishlistItems.length === 0 ? (
            <div className="mt-10 text-center font-poppins text-base text-Text2_000000">
              Your wishlist is empty
            </div>
          ) : (
            <Slider {...settings}>
              {wishlistItems.map((item) => (
                <div key={item.id} className="">
                  <ProductCard className={"mt-[60px]"} CategoryData={item} />
                </div>
              ))}
            </Slider>
          )}
        </div>

        <div className="JustForYou mt-20">
          <div className="flex items-center justify-between">
            <Heading title={"Just For You"} />
            <div>
              <Link to="/products">
                <button className="font-poppins text-base font-medium py-4 px-12 cursor-pointer rounded text-Text2_000000 bg-transparent border border-[rgba(0,0,0,0.5)] hover:bg-Button2_DB4444 hover:text-text_FAFAFA transition-all duration-100">
                  See All
                </button>
              </Link>
            </div>
          </div>

          <Slider {...settings}>
            {data?.products?.map((item) => (
              <div key={item.id} className="">
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
