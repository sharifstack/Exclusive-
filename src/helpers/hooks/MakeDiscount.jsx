import React from "react";

const MakeDiscount = (originalPrice, discountPercentage) => {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountPrice = originalPrice - discountAmount;
  return discountPrice;
};

export default MakeDiscount;
    