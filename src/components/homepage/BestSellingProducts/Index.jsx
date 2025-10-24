import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useBestSellingProductsQuery } from "../../../Features/Api/ProductApi";

const BestSellingProducts = () => {
  const { data, error, isLoading } = useBestSellingProductsQuery();
  return (
    <div>
      <ProductCommonLayout
        className="mt-[70px]"
        ProductCard={ProductCard}
        title="This Month"
        desc="Best Selling Products"
        Data={data?.products}
        ViewMoreButton={true}
      />

      <div className="allProductsbtn flex sm:hidden justify-center border-b border-HoverButton2_A0BCE0  py-6 sm:py-0 sm:pb-[60px]">
        <h2 className="bg-Button2_DB4444 font-poppins text-sm sm:text-base font-medium py-4 px-6 sm:px-12 text-text_FAFAFA cursor-pointer rounded">
          View All Products
        </h2>
      </div>
    </div>
  );
};

export default BestSellingProducts;
