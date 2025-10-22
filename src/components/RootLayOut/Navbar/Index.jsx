import React, { useEffect, useRef, useState } from "react";
import { CiHeart, CiStar } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";
import {
  IoCartOutline,
  IoMenuSharp,
  IoPerson,
  IoSearchOutline,
} from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RiAccountCircle2Line, RiShoppingBag3Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { category } from "../../../../Database/category";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      item: "Home",
      path: "/",
    },

    {
      id: 2,
      item: "Contact",
      path: "/contact",
    },

    {
      id: 3,
      item: "About",
      path: "/about",
    },

    {
      id: 4,
      item: "SignUp",
      path: "/signup",
    },
    {
      id: 5,
      item: "Products",
      path: "/products",
    },
  ];
  const [account, setAccount] = useState(false);

  const manageAccount = () => {
    setAccount(!account);
  };

  return (
    <div>
      <div className="ForLargeDevice pt-10 pb-4 border-b border-b-Text2_000000/80 hidden sm:flex">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="Logo">
              <h2 className="font-inter font-bold text-2xl">
                <Link to={"/"}>Exclusive</Link>
              </h2>
            </div>
            <div className="">
              <ul className="flex items-center gap-[48px]">
                {navItems?.map((nav) => (
                  <li key={nav.id} className="menuHover">
                    <NavLink
                      to={`${nav.path}`}
                      className={({ isPending, isActive }) =>
                        isPending
                          ? "text-Text2_000000 font-poppins text-[16px] font-normal"
                          : isActive
                          ? "border-b border-HoverButton2_A0BCE0 font-poppins text-[16px] font-normal"
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
                <Link to={"/wishlist"}>
                  <span className="cursor-pointer text-button_000000 text-[30px]">
                    <CiHeart />
                  </span>
                </Link>

                <Link to={"/cart"}>
                  <span className="cursor-pointer cartoffer text-button_000000 text-[30px]">
                    <IoCartOutline />
                  </span>
                </Link>

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
                        <Link to={"/account"}>Manage My Account</Link>
                      </h2>
                    </div>

                    <div className="flex items-center  text-text_FAFAFA hover:scale-110  hover:font-bold transition-all duration-300">
                      <span className="text-3xl p-2 mr-4">
                        <RiShoppingBag3Line />
                      </span>
                      <h2 className="text-xl font-poppins font-normal">
                        <Link to={"/checkout"}> My Order</Link>
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

      <div className="ForPhone flex sm:hidden py-1 border">
        <div className="container">
          <div className="flex LogoAndDrawer items-center justify-between">
            <div className="flex items-end gap-2">
              <div className="ResponsiveSideDrawer flex sm:hidden">
                <div class="">
                  <button
                    className="text-2xl"
                    type="button"
                    data-drawer-target="drawer-navigation"
                    data-drawer-show="drawer-navigation"
                    aria-controls="drawer-navigation"
                  >
                    <IoMenuSharp />
                  </button>
                </div>

                <div
                  id="drawer-navigation"
                  class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800"
                  tabindex="-1"
                  aria-labelledby="drawer-navigation-label"
                >
                  <h5
                    id="drawer-navigation-label"
                    class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
                  >
                    Menu
                  </h5>
                  <button
                    type="button"
                    data-drawer-hide="drawer-navigation"
                    aria-controls="drawer-navigation"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close menu</span>
                  </button>
                  <div class="py-4 overflow-y-auto">
                    <ul class="space-y-2 font-medium">
                      <li>
                        <a
                          href="#"
                          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <svg
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 21"
                          >
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                          </svg>
                          <span class="ms-3 font-poppins text-base font-semibold">
                            Dashboard
                          </span>
                        </a>
                      </li>

                      <li>
                        <ul className="">
                          {category.map((item) => (
                            <div className="flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  duration-200">
                              <li className="cursor-pointer  font-poppins text-base font-semibold py-3 ">
                                {item.category}
                              </li>

                              {item.subCategory && (
                                <span className="pl-10 text-xl">
                                  <MdOutlineKeyboardArrowRight />
                                </span>
                              )}
                            </div>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="Logo">
                <h2 className="font-inter font-bold py-1 text-xl">
                  <Link to={"/"}>Exclusive</Link>
                </h2>
              </div>
            </div>
            <div className="icons flex items-center gap-3 ">
              <Link to={"/wishlist"}>
                <span className="cursor-pointer text-button_000000 text-[25px]">
                  <CiHeart />
                </span>
              </Link>

              <Link to={"/cart"}>
                <span className="cursor-pointer cartoffer text-button_000000 text-[25px]">
                  <IoCartOutline />
                </span>
              </Link>

              <span
                className="cursor-pointer  text-Primary_FFFFFF  text-[12px] p-2 bg-Secondary2_DB4444 rounded-full relative"
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
                    <h2 className="text-xl font-poppins font-normal">
                      <Link to={"/account"}>Manage My Account</Link>
                    </h2>
                  </div>

                  <div className="flex items-center  text-text_FAFAFA hover:scale-110  hover:font-bold transition-all duration-300">
                    <span className="text-3xl p-2 mr-4">
                      <RiShoppingBag3Line />
                    </span>
                    <h2 className="text-xl font-poppins font-normal">
                      <Link to={"/checkout"}> My Order</Link>
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
      </div>

      <div className="searchBoxResponsive flex my-1 sm:hidden ">
        <div className="container">
          <div className="search_Box border rounded">
            <input
              type="text"
              className="bg-Secondary_F5F5F5 py-2.5 pl-5 pr-[70px] w-full placeholder:text-sm"
              placeholder="What are you looking for?"
            />
            <span className="absolute top-[120px] -translate-y-1/2 right-[30px] ">
              <IoSearchOutline className=" w-6 h-6 " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
