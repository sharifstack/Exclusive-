import React, { useState } from "react";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import { FaCheck } from "react-icons/fa";
import productimg from "../../assets/cart/cart.png";
import bkash from "../../assets/Checkout/bkash.png";
import visa from "../../assets/Checkout/visa.png";
import mastercard from "../../assets/Checkout/Mastercard.png";
import nagad from "../../assets/Checkout/nagad.png";
import useCart from "../../helpers/hooks/useCart";

export const CheckOut = () => {
  const [check, setCheck] = useState(false);
  const { cartItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 0;
  const total = subtotal + shipping;

  const ChackHandler = () => {
    setCheck(!check);
  };
  return (
    <div className="mb-[140px]">
      <BreadCrumb />

      <div className="container">
        <div className="Heading mb-12">
          <h2 className="font-inter font-medium text-4xl text-Text2_000000">
            Billing Details
          </h2>
        </div>
        <div className="flex">
          <div className="BillingDetailsw w-2/5">
            <div className="userForm">
              <form action="" className="flex flex-col gap-8">
                <div className="firstname">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 font-poppins font-normal text-base text-[rgba(0,0,0,0.4)]"
                  >
                    First Name<span className="text-Secondary2_DB4444">*</span>
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[470px]"
                  />
                </div>

                <div className="CompanyName">
                  <label
                    htmlFor="companyname"
                    className="block mb-2 font-poppins font-normal text-base text-[rgba(0,0,0,0.4)]"
                  >
                    Company Name
                  </label>
                  <input
                    id="companyname"
                    type="text"
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[470px]"
                  />
                </div>

                <div className="firstname">
                  <label
                    htmlFor="street"
                    className="block mb-2 font-poppins font-normal text-base text-[rgba(0,0,0,0.4)]"
                  >
                    Street Address
                    <span className="text-Secondary2_DB4444">*</span>
                  </label>
                  <input
                    id="street"
                    type="text"
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[470px]"
                  />
                </div>

                <div className="Apartment">
                  <label
                    htmlFor="Apartment"
                    className="block mb-2 font-poppins font-normal text-base text-[rgba(0,0,0,0.4)]"
                  >
                    Apartment, floor, etc. (optional)
                  </label>
                  <input
                    id="Apartment"
                    type="text"
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[470px]"
                  />
                </div>

                <div className="Town/City">
                  <label
                    htmlFor="Town/City"
                    className="block mb-2 font-poppins font-normal text-base text-[rgba(0,0,0,0.4)]"
                  >
                    Town/City
                    <span className="text-Secondary2_DB4444">*</span>
                  </label>
                  <input
                    id="Town/City"
                    type="text"
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[470px]"
                  />
                </div>

                <div className="PhoneNumber">
                  <label
                    htmlFor="PhoneNumber"
                    className="block mb-2 font-poppins font-normal text-base text-[rgba(0,0,0,0.4)]"
                  >
                    Phone Number
                    <span className="text-Secondary2_DB4444">*</span>
                  </label>
                  <input
                    id="PhoneNumber"
                    type="number"
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[470px] "
                  />
                </div>

                <div className="EmailAddress">
                  <label
                    htmlFor="EmailAddress"
                    className="block mb-2 font-poppins font-normal text-base text-[rgba(0,0,0,0.4)]"
                  >
                    Email Address
                    <span className="text-Secondary2_DB4444">*</span>
                  </label>
                  <input
                    id="EmailAddress"
                    type="email"
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[470px] "
                  />
                </div>
              </form>

              <div className="mt-6 customCheckBox">
                <div className="flex items-center gap-4 ">
                  <span className="checkboxMark " onClick={ChackHandler}>
                    {check ? (
                      <span className="bg-Secondary2_DB4444 w-6 h-6 flex items-center justify-center cursor-pointer rounded">
                        <FaCheck className="text-Primary_FFFFFF text-xs " />
                      </span>
                    ) : (
                      ""
                    )}
                  </span>

                  <h4 className="font-poppins font-normal text-base text-Text2_000000">
                    Save this information for faster check-out next time
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="UserPayment w-3/5 mt-8 flex flex-col items-end">
            <div className="w-1/2 mr-[53px]">
              <div className="Porducts">
                {cartItems.length === 0 ? (
                  <p className="font-poppins text-lg text-center mb-2 text-Secondary2_DB4444">
                    Your cart is empty.
                  </p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedSize || ""}-${item.selectedColor || ""}`}
                      className="flex justify-between my-6"
                    >
                      <div className="flex gap-6">
                        <img
                          className="w-10"
                          src={item.image}
                          alt={item.title}
                        />
                        <h4 className="font-poppins text-base">{item.title}</h4>
                      </div>

                      <p className="font-poppins text-base">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))
                )}
              </div>
              <div className="flex justify-between border-b pb-4    ">
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
              <div className="Bank">
                <div
                  onClick={() => setPaymentMethod("bank")}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-5 h-5 border border-black rounded-full flex items-center justify-center
      ${paymentMethod === "bank" ? "bg-black" : ""}`}
                    ></span>

                    <h5 className="font-poppins text-base">Bank</h5>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <img src={bkash} />
                    <img src={visa} />
                    <img src={mastercard} />
                    <img src={nagad} />
                  </div>
                </div>
              </div>

              <div className="Cod my-8">
                <div
                  onClick={() => setPaymentMethod("cod")}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-5 h-5 border border-black rounded-full flex items-center justify-center
      ${paymentMethod === "cod" ? "bg-black " : ""}`}
                    ></span>

                    <h5 className="font-poppins text-base">Cash on delivery</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
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
              <div className="mt-8">
                <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded bg-Button2_DB4444 text-text_FAFAFA ">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
