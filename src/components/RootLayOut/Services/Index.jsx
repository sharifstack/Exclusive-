import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const Services = () => {
  return (
    <div className="my-[140px]">
      <div className="container">
        <div className="flex items-center justify-center gap-[88px]">
          <div className="flex flex-col items-center">
            <span className="text-text_FAFAFA bg-button_000000 rounded-full p-2 border-[12px] border-[rgba(180,180,180,0.83)] mb-6">
              <TbTruckDelivery className="w-[50px] h-[50px]" />
            </span>
            <h2 className="font-poppins font-semibold text-lg text-Text2_000000 mb-1">
              FREE AND FAST DELIVERY
            </h2>
            <p className="font-poppins text-Text2_000000 font-normal text-sm">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-text_FAFAFA bg-button_000000 rounded-full p-2 border-[12px] border-[rgba(180,180,180,0.83)] mb-6">
              <TbTruckDelivery className="w-[50px] h-[50px]" />
            </span>
            <h2 className="font-poppins font-semibold text-lg text-Text2_000000 mb-1">
              FREE AND FAST DELIVERY
            </h2>
            <p className="font-poppins text-Text2_000000 font-normal text-sm">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-text_FAFAFA bg-button_000000 rounded-full p-2 border-[12px] border-[rgba(180,180,180,0.83)] mb-6">
              <TbTruckDelivery className="w-[50px] h-[50px]" />
            </span>
            <h2 className="font-poppins font-semibold text-lg text-Text2_000000 mb-1">
              FREE AND FAST DELIVERY
            </h2>
            <p className="font-poppins text-Text2_000000 font-normal text-sm">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
