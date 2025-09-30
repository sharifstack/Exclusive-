import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";
import ProductCard from "../../CommonComponents/ProductCard";

const OurProducts = () => {
  const { data, error, isLoading } = useGetAllProductQuery();

  return (
    <div className="container">
      <ProductCommonLayout
        className="mt-[71px]"
        ProductCard={ProductCard}
        title="Our Products"
        desc="Explore Our Products"
        Arrows={true}
        Data={data?.products}
        Loading={isLoading}
        Rows={2}
      />

      <div className="allProductsbtn  flex justify-center">
        <h2 className="bg-Button2_DB4444 font-poppins text-base font-medium py-4 px-12 text-text_FAFAFA cursor-pointer rounded">
          View All Products
        </h2>
      </div>
    </div>
  );
};

export default OurProducts;
