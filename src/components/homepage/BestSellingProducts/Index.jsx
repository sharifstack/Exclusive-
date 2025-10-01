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
    </div>
  );
};

export default BestSellingProducts;
