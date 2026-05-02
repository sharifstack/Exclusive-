import React from "react";

const CategoryList = ({ categoryData, isLoading, filters, setFilters }) => {
  const handleCategoryClick = (category) => {
    setFilters((prev) => ({
      ...prev,
      category,
    }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSizeChange = (size) => {
    setFilters((prev) => {
      const exists = prev.sizes.includes(size);
      return {
        ...prev,
        sizes: exists
          ? prev.sizes.filter((item) => item !== size)
          : [...prev.sizes, size],
      };
    });
  };

  const handleSortChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: e.target.value,
    }));
  };

  return (
    <div className="sm:w-[23%] sm:sticky sm:top-4">
      <div className="max-h-[85vh] overflow-y-auto pr-2">
        <div className="container">
          <div className="capitalize">
            <div className="text-center sm:text-start">
              <h2 className="text-xl font-inter font-bold mb-4 sm:mb-11">
                Shop By Category
              </h2>
            </div>

            {isLoading ? (
              <ul>
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3"
                  >
                    <li className="h-5 w-32 bg-gray-300 rounded animate-pulse"></li>
                  </div>
                ))}
              </ul>
            ) : (
              <ul className="flex sm:block flex-wrap gap-x-5 justify-evenly">
                <li
                  onClick={() => handleCategoryClick("all")}
                  className={`cursor-pointer font-poppins text-base font-normal py-3 px-2 rounded ${
                    filters.category === "all" ? "bg-gray-200" : ""
                  }`}
                >
                  All
                </li>

                {categoryData?.map((item) => (
                  <li
                    key={item}
                    onClick={() => handleCategoryClick(item)}
                    className={`cursor-pointer font-poppins text-base font-normal py-3 px-2 rounded ${
                      filters.category === item ? "bg-gray-200" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="my-8">
              <h2 className="text-xl font-inter font-bold">Price Range</h2>
              <div className="mt-4 flex gap-2">
                <input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handlePriceChange}
                  placeholder="Min"
                  className="w-full border px-3 py-2 rounded"
                />
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handlePriceChange}
                  placeholder="Max"
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-inter font-bold">Size</h2>
              <div className="mt-4 flex flex-col gap-2">
                {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                  <label
                    key={size}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.sizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="my-8">
              <h2 className="text-xl font-inter font-bold">Sort By</h2>
              <select
                value={filters.sortBy}
                onChange={handleSortChange}
                className="mt-4 w-full border px-3 py-2 rounded"
              >
                <option value="">Default</option>
                <option value="date-new-old">Date, new to old</option>
                <option value="date-old-new">Date, old to new</option>
                <option value="a-z">Alphabetically, A-Z</option>
                <option value="z-a">Alphabetically, Z-A</option>
                <option value="price-low-high">Price, low to high</option>
                <option value="price-high-low">Price, high to low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
