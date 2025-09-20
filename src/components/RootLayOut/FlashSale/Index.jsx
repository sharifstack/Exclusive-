import React from "react";
import ProductCard from "../../CommonComponents/ProductCard";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";

const FlashSale = () => {
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
          Data={[...new Array(10)]}
        />

        <div className="allProductsbtn  flex justify-center border-b border-HoverButton2_A0BCE0 pb-[60px]">
          <h2 className="bg-Button2_DB4444 font-poppins text-base font-medium py-4 px-12 text-text_FAFAFA cursor-pointer rounded">View All Products</h2>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
