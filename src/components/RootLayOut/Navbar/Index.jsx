import React, { useEffect, useRef, useState } from "react";
import { CiHeart, CiStar } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";
import { IoCartOutline, IoPerson, IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RiAccountCircle2Line, RiShoppingBag3Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      item: "Home",
    },

    {
      id: 2,
      item: "Contact",
    },

    {
      id: 3,
      item: "About",
    },

    {
      id: 4,
      item: "SignUp",
    },
  ];
  const [account, setAccount] = useState(false);

  const manageAccount = () => {
    setAccount(!account);
  };

  return (
    <div>
      <div className="pt-10 pb-4 border-b border-b-Text2_000000/80">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="Logo">
              <h2 className="font-inter font-bold text-2xl">Exclusive</h2>
            </div>
            <div className="">
              <ul className="flex items-center gap-[48px]">
                {navItems?.map((nav) => (
                  <li key={nav.id} className="menuHover">
                    <NavLink
                      to={`/${nav.item}`}
                      className={({ isPending, isActive }) =>
                        isPending
                          ? "text-Text2_000000 font-poppins text-[16px] font-normal"
                          : isActive
                          ? "text-red-500 font-poppins text-[16px] font-normal"
                          : "text-Text2_000000 font-poppins text-[16px] font-normal"
                      }
                    >
                      {nav.item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="basis-1/3 relative flex items-center justify-between">
              <div className="search_Box">
                <input
                  type="text"
                  className="bg-Secondary_F5F5F5 py-2.5 pl-5 pr-[70px]"
                  placeholder="What are you looking for?"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-1/2">
                  <IoSearchOutline className=" w-5 h-5" />
                </span>
              </div>

              <div className="icons flex items-center gap-5 ">
                <span className="cursor-pointer text-button_000000 text-[30px]">
                  <CiHeart />
                </span>

                <span className="cursor-pointer cartoffer text-button_000000 text-[30px]">
                  <IoCartOutline />
                </span>

                <span
                  className="cursor-pointer  text-Primary_FFFFFF  text-xl p-2 bg-Secondary2_DB4444 rounded-full relative"
                  onClick={manageAccount}
                >
                  <LuUser />
                </span>

                {account && (
                  <div className="bg-[#00000083] rounded absolute left-full top-full -translate-x-full p-6 flex flex-col  gap-y-[13px] w-[60%] cursor-pointer z-40  backdrop-blur-md ">
                    <div className="flex items-center text-text_FAFAFA  hover:scale-110 hover:font-bold transition-all duration-300 ">
                      <span className="text-3xl p-2 mr-4 ">
                        <LuUser />
                      </span>
                      <h2 className="text-xl font-poppins font-normal ">
                        Manage My Account
                      </h2>
                    </div>

                    <div className="flex items-center  text-text_FAFAFA hover:scale-110  hover:font-bold transition-all duration-300">
                      <span className="text-3xl p-2 mr-4">
                        <RiShoppingBag3Line />
                      </span>
                      <h2 className="text-xl font-poppins font-normal">
                        My Order
                      </h2>
                    </div>

                    <div className="flex items-center text-text_FAFAFA hover:scale-110  hover:font-bold transition-all duration-300">
                      <span className="text-3xl p-2  mr-4">
                        <ImCancelCircle />
                      </span>
                      <h2 className="text-xl font-poppins font-normal">
                        My Cancellations
                      </h2>
                    </div>

                    <div className="flex items-center text-text_FAFAFA hover:scale-110   hover:font-bold transition-all duration-300">
                      <span className="text-3xl p-2  mr-4">
                        <CiStar />
                      </span>
                      <h2 className="text-xl font-poppins font-normal">
                        My Reviews
                      </h2>
                    </div>

                    <div className="flex items-center text-text_FAFAFA hover:scale-110  hover:font-bold transition-all duration-300">
                      <span className="text-3xl p-2  mr-4">
                        <TbLogout2 />
                      </span>
                      <h2 className="text-xl font-poppins font-normal ">
                        Logout
                      </h2>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
