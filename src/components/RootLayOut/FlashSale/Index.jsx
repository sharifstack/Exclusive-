import React from "react";
import Heading from "../../CommonComponents/Heading";
import Timer from "../../Features/Timer";
import ProductCard from "../../CommonComponents/ProductCard";

const FlashSale = () => {
  return (
    <div className="mt-[140px] mb-[60px]">
      <div className="container">
        <div className="flex gap-10 items-end">
          <Heading title={"Today’s"} desc={"Flash Sales"} />
          <Timer />
        </div>

        <div className="flex justify-between">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
