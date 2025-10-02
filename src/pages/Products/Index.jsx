import React from "react";
import CategoryList from "../../components/ProductPageComponents/CategoryList/Index";
import { useCategoryListQuery } from "../../Features/Api/ProductApi";

const Products = () => {
  const { data, error, isLoading } = useCategoryListQuery();
  return (
    <div>
      <CategoryList categoryData={data} />
    </div>
  );
};

export default Products;
