import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="mt-10">
        <div className=" w-[270px] animate-pulse">
      {/* Top */}
      <div className="bg-Secondary_F5F5F5 rounded overflow-hidden">
        <div className="relative">
          {/* Discount tag skeleton */}
          <span className="w-[55px] h-[26px] bg-gray-300 absolute left-3 top-3 rounded"></span>

          {/* Action icons skeleton */}
          <div className="absolute right-3 top-3 space-y-2">
            <span className="w-9 h-9 bg-gray-300 block rounded-full"></span>
            <span className="w-9 h-9 bg-gray-300 block rounded-full"></span>
          </div>
        </div>

        {/* Image skeleton */}
        <div className="flex items-center justify-center p-[49px]">
          <div className="w-full h-[150px] bg-gray-300 rounded"></div>
        </div>

        {/* Add to cart skeleton */}
        <div className="bg-gray-300 h-[40px]"></div>
      </div>

      {/* Bottom */}
      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="flex gap-3">
          <div className="h-4 bg-gray-300 rounded w-16"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </div>
        <div className="flex gap-2 items-center">
          {[...new Array(5)].map((_, i) => (
            <div key={i} className="w-5 h-5 bg-gray-300 rounded"></div>
          ))}
          <div className="h-4 bg-gray-300 rounded w-10 ml-2"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductCardSkeleton;
