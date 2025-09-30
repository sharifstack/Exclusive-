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
  }),
});

export const { useGetAllProductQuery, useBestSellingProductsQuery } =
  ProductApi;
