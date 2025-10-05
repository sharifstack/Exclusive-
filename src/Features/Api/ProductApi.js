import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    GetAllProduct: builder.query({
      query: () => "/products",
    }),
    BestSellingProducts: builder.query({
      query: () => "/products/category/smartphones",
    }),
    CategoryList: builder.query({
      query: () => "/products/category-list",
    }),
    GetASingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useBestSellingProductsQuery,
  useCategoryListQuery,
  useGetASingleProductQuery,
} = ProductApi;
