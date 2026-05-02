import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../../CommonComponents/ProductCard";
import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";

const AllProducts = ({ filters }) => {
  const { data, error, isLoading } = useGetAllProductQuery();
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const filteredProducts = useMemo(() => {
    let products = data?.products || [];

    // Category filter
    if (filters.category && filters.category !== "all") {
      products = products.filter(
        (item) =>
          item.category?.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Price filter
    if (filters.minPrice !== "") {
      products = products.filter(
        (item) => Number(item.price) >= Number(filters.minPrice)
      );
    }

    if (filters.maxPrice !== "") {
      products = products.filter(
        (item) => Number(item.price) <= Number(filters.maxPrice)
      );
    }

    // Size filter
    if (filters.sizes?.length > 0) {
      products = products.filter((item) => {
        const productSizes = item.size || item.sizes || [];
        if (Array.isArray(productSizes)) {
          return filters.sizes.some((size) => productSizes.includes(size));
        }
        return filters.sizes.includes(productSizes);
      });
    }

    // Sort
    if (filters.sortBy === "price-low-high") {
      products = [...products].sort((a, b) => a.price - b.price);
    }

    if (filters.sortBy === "price-high-low") {
      products = [...products].sort((a, b) => b.price - a.price);
    }

    if (filters.sortBy === "a-z") {
      products = [...products].sort((a, b) =>
        (a.title || "").localeCompare(b.title || "")
      );
    }

    if (filters.sortBy === "z-a") {
      products = [...products].sort((a, b) =>
        (b.title || "").localeCompare(a.title || "")
      );
    }

    return products;
  }, [data?.products, filters]);

  useEffect(() => {
    setPage(1);
  }, [filters, itemsPerPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (index) => {
    if (index > 0 && index <= totalPages) {
      setPage(index);
    }
  };

  const showItems = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="container sm:w-[77%]">
      <div className="hidden sm:flex items-center gap-2 justify-end">
        <h2>Show :</h2>
        <select
          className="bg-slate-100 px-4 py-1"
          onChange={showItems}
          value={itemsPerPage}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="48">48</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-8">
        {currentProducts?.map((item) => (
          <ProductCard
            key={item._id}
            className={"w-[175px] sm:w-auto"}
            CategoryData={item}
          />
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <button
              type="button"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l hover:bg-Secondary1_FEFAF1"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
          </li>

          {[...new Array(totalPages || 1)].map((_, index) => (
            <li key={index}>
              <button
                type="button"
                className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 ${
                  page === index + 1
                    ? "bg-gray-200"
                    : "bg-white hover:bg-Secondary1_FEFAF1"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}

          <li>
            <button
              type="button"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r hover:bg-Secondary1_FEFAF1"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllProducts;