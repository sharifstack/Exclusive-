import React from "react";
import BreadCrumb from "../CommonComponents/BreadCrumb";
import cart from "../../assets/cart/cart.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const CartComponents = () => {
  return (
    <div className="mb-[140px]">
      <div className="container">
        <BreadCrumb />

        <div className="flex flex-col gap-10">
          <div className="flex border shadow-lg">
            <div className=" w-3/12 py-6 px-10">
              <h2 className="font-poppins font-normal text-base text-Text2_000000">
                Product
              </h2>
            </div>
            <div className=" w-3/12 py-6 px-10">
              <h2 className="font-poppins font-normal text-base text-Text2_000000 text-center">
                Price
              </h2>
            </div>
            <div className="w-3/12 py-6 px-10">
              <h2 className="font-poppins font-normal text-base text-Text2_000000 text-center">
                Quantity
              </h2>
            </div>
            <div className=" w-3/12  py-6 px-10">
              <h2 className="font-poppins font-normal text-base text-Text2_000000 text-end">
                Subtotal
              </h2>
            </div>
          </div>
          {[...new Array(4)].map((_, index) => (
            <div className="flex border shadow-lg">
              <div className="flex items-center gap-5 w-3/12 py-6 px-10">
                <div>
                  <img src={cart} alt={cart} />
                </div>
                <h2 className="font-poppins font-normal text-base text-Text2_000000">
                  LCD Monitor
                </h2>
              </div>
              <div className="flex items-center justify-center w-3/12 py-6 px-10">
                <h2 className="font-poppins font-normal text-base text-Text2_000000">
                  $650
                </h2>
              </div>
              <div className=" w-3/12 py-6 px-10">
                <div className="relative flex items-center justify-center">
                  <input
                    type="text"
                    className="border border-[rgba(0,0,0,0.4)] rounded  w-[72px] py-1.5 pl-3 pr-11"
                  />

                  <span className="absolute left-[55%] top-0 -translate-x-[55%]">
                    <MdKeyboardArrowUp className="text-xl" />
                  </span>
                  <span className="absolute left-[55%]  bottom-0 -translate-x-[55%] ">
                    <MdKeyboardArrowDown className="text-xl" />
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end w-3/12  py-6 px-[60px]">
                <h2 className="font-poppins font-normal text-base text-Text2_000000 ">
                  $650
                </h2>
              </div>
            </div>
          ))}

          <div className="Buttons flex justify-between">
            <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded text-Text2_000000 bg-transparent border border-[rgba(0,0,0,0.5)] hover:bg-Button2_DB4444 hover:text-text_FAFAFA transition-all duration-100">
              Return To Shop
            </button>

            <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded text-Text2_000000 bg-transparent border border-[rgba(0,0,0,0.5)] hover:bg-Button2_DB4444 hover:text-text_FAFAFA transition-all duration-100">
              Update Cart
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-20 ">
          <div className="flex gap-4">
            <div>
              <input
                className="w-[300px] border border-Text2_000000 text-base font-poppins rounded text-Text2_000000 py-4 pl-6 pr-40"
                type="text"
                placeholder="Coupon Code"
              />
            </div>

            <div className="">
              <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded bg-Button2_DB4444 text-text_FAFAFA ">
                Apply Coupon
              </button>
            </div>
          </div>

          <div className="border-2 border-Text2_000000 rounded w-2/5 py-8 px-6">
            <div>
              <h4 className="font-poppins font-medium text-xl text-Text2_000000  pb-6">
                Cart Total
              </h4>
              <div className="flex justify-between border-b pb-4">
                <h5 className="font-poppins font-normal text-base text-Text2_000000">
                  Subtotal:
                </h5>
                <h5 className="font-poppins font-normal text-base text-Text2_000000">
                  $1750
                </h5>
              </div>

              <div className="flex justify-between border-b py-4">
                <h5 className="font-poppins font-normal text-base text-Text2_000000">
                  Shipping:
                </h5>
                <h5 className="font-poppins font-normal text-base text-Text2_000000">
                  Free
                </h5>
              </div>

              <div className="flex justify-between border-b py-4 mb-4">
                <h5 className="font-poppins font-normal text-base text-Text2_000000">
                  Total:
                </h5>
                <h5 className="font-poppins font-normal text-base text-Text2_000000">
                  $1750
                </h5>
              </div>
              <div className="text-center">
                <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded bg-Button2_DB4444 text-text_FAFAFA ">
                  Procees to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponents;
