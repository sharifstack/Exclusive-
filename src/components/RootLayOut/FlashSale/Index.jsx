import React from "react";
import Heading from "../../CommonComponents/Heading";
import Timer from "../../Features/Timer";

const FlashSale = () => {
  return (
    <div className="mt-[140px] mb-[60px]">
      <div className="container">
        <div className="flex gap-10 items-end">
          <Heading title={"Today’s"} desc={"Flash Sales"} />
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
