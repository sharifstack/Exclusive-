import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { BiSolidShoppingBags, BiStoreAlt } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";

const Engagements = () => {
  const engagements = [
    {
      id: 1,
      icon: <BiStoreAlt className="w-[40px] h-[40px]" />,
      title: "10.5k",
      desc: "Sallers active our site",
    },

    {
      id: 2,
      icon: <AiOutlineDollar className="w-[40px] h-[40px]" />,
      title: "33k",
      desc: "Mopnthly Produduct Sale",
    },

    {
      id: 3,
      icon: <BiSolidShoppingBags className="w-[40px] h-[40px]" />,
      title: "45.5k",
      desc: "Customer active in our site",
    },

    {
      id: 4,
      icon: <TbMoneybag className="w-[40px] h-[40px]" />,
      title: "25k",
      desc: "Anual gross sale in our site",
    },
  ];

  return (
    <div className="my-[140px]">
      <div className="container">
        <div className="flex items-center justify-center gap-[88px] ">
          {engagements?.map((item) => (
            <div className="flex flex-col items-center border border-[rgba(0,0,0,0.3)] rounded w-full py-[30px] hover:bg-Secondary2_DB4444 group cursor-pointer hover:shadow-xl">
              <span className="text-text_FAFAFA bg-Text2_000000 rounded-full p-2 border-[12px] border-[rgba(180,180,180,0.83)] group-hover:border-[#ffffffeb] mb-6 ">
                {item.icon}
              </span>
              <h2 className="font-inter font-bold text-[32px] text-Text2_000000 group-hover:text-Primary_FFFFFF mb-1">
                {item.title}
              </h2>
              <p className="font-poppins text-Text2_000000 font-normal text-base group-hover:text-Primary_FFFFFF">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Engagements;
