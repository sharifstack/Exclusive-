import React from "react";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import ProductImages from "../../components/ProductPageComponents/ProductDetailsComponents/ProductImages/Index";
import ProductInfo from "../../components/ProductPageComponents/ProductDetailsComponents/ProductInfo/Index";
import { useGetASingleProductQuery } from "../../Features/Api/ProductApi";

const ProductDetails = () => {
  const { data, isLoading, error } = useGetASingleProductQuery(1);

  return (
    <div className="mb-[140px]">
      <BreadCrumb />
      <div className="container">
        <div className="flex gap-[70px]">
          <ProductImages image={data?.images} />
          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
