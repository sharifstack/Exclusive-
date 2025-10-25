import React from "react";
import ProductCard from "../../CommonComponents/ProductCard";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";

const FlashSale = () => {
  const { data, error, isLoading } = useGetAllProductQuery();

  return (
    <div>
      <div className="container">
        <ProductCommonLayout
          ProductCard={ProductCard}
          timeStamp={true}
          timeOffer={2}
          Arrows={true}
          title="Today’s"
          desc="Flash Sales"
          Data={data?.products}
          Loading={isLoading}
          
        />

        <div className="allProductsbtn  flex justify-center border-b border-HoverButton2_A0BCE0 pb-6 sm:pb-[60px]">
          <h2 className="bg-Button2_DB4444 font-poppins text-sm sm:text-base font-medium py-4 px-6 sm:px-12 text-text_FAFAFA cursor-pointer rounded">
            View All Products
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
