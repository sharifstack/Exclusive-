import React from "react";
import BreadCrumb from "../CommonComponents/BreadCrumb";
import cart from "../../assets/cart/cart.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import useCart from "../../helpers/hooks/useCart";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const CartComponents = () => {
  const { cartItems, incrementCartItem, decrementCartItem, removeCartItem } =
    useCart();

  const handleRemove = (item) => {
    removeCartItem(item.id, item.selectedSize, item.selectedColor);

    toast.success(`${item.title} removed from cart`);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <div className="mb-[140px]">
      <div className="container ">
        <BreadCrumb />

        <div className="flex justify-between">
          <div className="flex flex-col gap-5 w-8/12">
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
              <div className=" w-3/12  py-6 px-20">
                <h2 className="font-poppins font-normal text-base text-Text2_000000 text-end">
                  Subtotal
                </h2>
              </div>
            </div>
            {cartItems.map((item) => (
              <div className="flex border shadow-lg">
                <div className="flex items-center gap-6 w-3/12 py-6 px-10">
                  <div>
                    <img className="w-25" src={item.image} alt={item.name} />
                  </div>
                  <h2 className="font-poppins font-normal text-base text-Text2_000000 ">
                    {item.title}
                  </h2>
                </div>
                <div className="flex items-center justify-center w-3/12 py-6 px-10">
                  <h2 className="font-poppins font-normal text-base text-Text2_000000">
                    ${item.price}
                  </h2>
                </div>
                <div className="w-3/12 py-6 px-10 flex items-center justify-center">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() =>
                        decrementCartItem(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                        )
                      }
                      className="px-2 py-2"
                    >
                      -
                    </button>

                    <span className="px-3 select-none">{item.quantity}</span>

                    <button
                      onClick={() =>
                        incrementCartItem(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                        )
                      }
                      className="px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-end w-3/12  py-6 px-8">
                  <h2 className="font-poppins font-normal text-base text-Text2_000000 ">
                    ${(item.price * item.quantity).toFixed(2)}
                  </h2>
                </div>

                <button
                  onClick={() => handleRemove(item)}
                  className="text-red-500 text-lg font-bold cursor-pointer pr-10"
                >
                  ✕
                </button>
              </div>
            ))}

            <div className="Buttons flex justify-between">
              <Link to={"/"}>
                <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded text-Text2_000000 bg-transparent border border-[rgba(0,0,0,0.5)] hover:bg-Button2_DB4444 hover:text-text_FAFAFA transition-all duration-100">
                  Return To Shop
                </button>
              </Link>

              <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded text-Text2_000000 bg-transparent border border-[rgba(0,0,0,0.5)] hover:bg-Button2_DB4444 hover:text-text_FAFAFA transition-all duration-100">
                Remove all
              </button>
            </div>
          </div>

          <div className="cartTotal">
            {/* <div className="flex gap-4">
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
          </div> */}

            <div className="TotalCalculate  border-2 border-Text2_000000 rounded w-[500px]  py-8 px-6">
              <div>
                <h4 className="font-poppins font-medium text-xl text-Text2_000000  pb-6">
                  Cart Total
                </h4>
                <div className="flex justify-between border-b pb-4">
                  <h5 className="font-poppins font-normal text-base text-Text2_000000">
                    Subtotal:
                  </h5>
                  <h5 className="font-poppins font-normal text-base text-Text2_000000">
                    ${total.toFixed(2)}
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
                    ${total.toFixed(2)}
                  </h5>
                </div>
                <div className="text-center">
                  <Link to={"/checkout"}>
                    <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded bg-Button2_DB4444 text-text_FAFAFA ">
                      Proceed To Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponents;
