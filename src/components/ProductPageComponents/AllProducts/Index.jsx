import React, { useState } from "react";
import ProductCard from "../../CommonComponents/ProductCard";
import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";

const AllProducts = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  let totalPage = data?.limit / 9;
  //  Pagination   //
  const handlePerItem = (index) => {
    if (index > 0 && index <= Math.ceil(totalPage)) {
      setPage(index);
    }
  };

  let showItems = (element) => {
    let numberOfShowingItems = Number(element.target.value);
    setItemsPerPage(numberOfShowingItems);
  };
  //  Pagination   //
  return (
    <div className=" container sm:w-[77%]">
      <div className="ShowProductsButton hidden sm:flex items-center gap-2 justify-end">
        <h2>Show :</h2>
        <select
          name=""
          id=""
          className="bg-slate-100 px-4  py-1"
          onChange={showItems}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="48">48</option>
        </select>
      </div>

      {/* All Products */}
      <div className="flex flex-wrap gap-8">
        {data?.products
          ?.slice(page * 9 - 9, page * itemsPerPage)
          .map((item) => (
            <ProductCard
              className={"w-[186px] sm:w-auto"}
              CategoryData={item}
            />
          ))}
      </div>
      {/* All Products */}

      {/* Pagination */}
      <div
        aria-label="Page navigation example"
        className="mt-20 flex justify-center "
      >
        <ul class="inline-flex -space-x-px text-base h-10 ">
          <li>
            <span
              href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-Secondary1_FEFAF1 cursor-pointer rounded"
              onClick={() => handlePerItem(page - 1)}
            >
              Previous
            </span>
          </li>
          {[...new Array(Math.ceil(totalPage || 8))].map((_, index) => (
            <li>
              <span
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-Text1_7D8184 bg-white border border-gray-300 hover:bg-Secondary1_FEFAF1 cursor-pointer"
                onClick={() => handlePerItem(index + 1)}
              >
                {index + 1}
              </span>
            </li>
          ))}

          <li>
            <span
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-Secondary1_FEFAF1 cursor-pointer rounded"
              onClick={() => handlePerItem(page + 1)}
            >
              Next
            </span>
          </li>
        </ul>
      </div>
      {/* Pagination */}
    </div>
  );
};

export default AllProducts;
