import React from "react";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import ProductImages from "../../components/ProductPageComponents/ProductDetailsComponents/ProductImages/Index";
import ProductInfo from "../../components/ProductPageComponents/ProductDetailsComponents/ProductInfo/Index";
import {
  useGetASingleProductQuery,
  useGetSimilarProductsQuery,
} from "../../Features/Api/ProductApi";
import ProductCard from "../../components/CommonComponents/ProductCard";
import { useParams } from "react-router-dom";
import Heading from "../../components/CommonComponents/Heading";

const ProductDetails = () => {
  const params = useParams();
  const { data, isLoading, error } = useGetASingleProductQuery(
    parseInt(params?.id)
  );

  const similarProducts = useGetSimilarProductsQuery("beauty");
  console.log(similarProducts.data?.products);

  return (
    <div className="mb-[140px]">
      <BreadCrumb />
      <div className="container">
        <div className="flex gap-[70px]">
          <ProductImages image={data?.images} />
          <ProductInfo productAllDetails={data} />
        </div>
        <div className="mt-[140px]">
          <div>
            <Heading title={"Related Item"} desc={false} />
          </div>
          <div className="flex gap-[30px]">
            {similarProducts.data?.products.map((item) => (
              <div>
                <ProductCard CategoryData={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
