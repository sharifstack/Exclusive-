import React from "react";
import CategoryList from "../../components/ProductPageComponents/CategoryList/Index";
import { useCategoryListQuery } from "../../Features/Api/ProductApi";
import AllProducts from "../../components/ProductPageComponents/AllProducts/Index";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";

const Products = () => {
  const { data, error, isLoading } = useCategoryListQuery();
  return (
    <div className="container mb-20">
      <BreadCrumb />
      <div className="sm:flex gap-2">
        <CategoryList categoryData={data} error={error} isLoading={isLoading} />
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
