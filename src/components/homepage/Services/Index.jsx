import React from "react";
import { GoShieldCheck } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Services = () => {
  const ourinfo = [
    {
      id: 1,
      icon: <TbTruckDelivery className="w-[40px] h-[40px]" />,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },

    {
      id: 2,
      icon: <TfiHeadphoneAlt className="w-[40px] h-[40px]" />,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },

    {
      id: 3,
      icon: <GoShieldCheck className="w-[40px] h-[40px]" />,
      title: "MONEY BACK GUARANTEE",
      desc: "We reurn money within 30 days",
    },
  ];

  return (
    <div className="my-10 sm:my-[140px]">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-11 sm:gap-[88px]">
          {ourinfo?.map((item) => (
            <div className="flex flex-col items-center">
              <span className="text-text_FAFAFA bg-button_000000 rounded-full p-2 border-[12px] border-[rgba(180,180,180,0.83)] mb-6">
                {item.icon}
              </span>
              <h2 className="font-poppins font-semibold text-lg text-Text2_000000 mb-1">
                {item.title}
              </h2>
              <p className="font-poppins text-Text2_000000 font-normal text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>  
      </div>
    </div>
  );
};

export default Services;
