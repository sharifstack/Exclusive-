import React from "react";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import qrcode from "../../../assets/Footer/Qrcode.png";
import playstore from "../../../assets/Footer/playstore.png";
import appstore from "../../../assets/Footer/appstore.png";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-button_000000">
      <div className="container">
        <div className="forLargerDevice hidden sm:flex">
          <div className="Exclusive w-1/5 pt-[80px]">
            <div className="">
              <div className="logo">
                <h2 className="font-inter font-bold text-2xl text-text_FAFAFA">
                  Exclusive
                </h2>
              </div>
              <h3 className="font-poppins font-medium text-xl text-text_FAFAFA my-6">
                Subscribe
              </h3>
              <p className="font-poppins font-normal text-base text-text_FAFAFA mb-4">
                Get 10% off your first order
              </p>
              <div className="search relative">
                <input
                  className="w-[217px] py-3 pl-4 pr-[71px]  font-poppins text-base border-2 border-text_FAFAFA bg-transparent rounded text-text_FAFAFA"
                  type="text"
                  placeholder="Enter your email"
                />
                <span className="absolute left-[62%] top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <PiPaperPlaneRightLight className="text-xl text-text_FAFAFA" />
                </span>
              </div>
            </div>
          </div>
          <div className="Support w-1/5 pt-[80px]">
            <div>
              <h3 className="font-poppins font-medium text-xl text-text_FAFAFA mb-6">
                Support
              </h3>
              <p className="font-poppins font-normal text-base text-text_FAFAFA mb-4 w-[175px]">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="font-poppins font-normal text-base text-text_FAFAFA mb-4">
                exclusive@gmail.com
              </p>
              <p className="font-poppins font-normal text-base text-text_FAFAFA ">
                +88015-88888-9999
              </p>
            </div>
          </div>
          <div className="Account w-1/5 pt-[80px] pb-10 ">
            <div>
              <h3 className="font-poppins font-medium text-xl text-text_FAFAFA mb-6">
                Account
              </h3>
              <p className="font-poppins font-normal text-base text-text_FAFAFA mb-4 w-[175px]">
                My Account
              </p>
              <p className="font-poppins font-normal text-base text-text_FAFAFA mb-4">
                <Link to={"/login"}> Login / Register</Link>
              </p>
              <p className="font-poppins font-normal text-base text-text_FAFAFA mb-4">
                Cart
              </p>
              <p className="font-poppins font-normal text-base text-text_FAFAFA mb-4">
                Wishlist
              </p>
              <p className="font-poppins font-normal text-base text-text_FAFAFA ">
                Shop
              </p>
            </div>
          </div>
          <div className="QuickLink  w-1/5 pt-[80px]">
            <div>
              <h3 className="font-poppins font-medium text-xl text-text_FAFAFA mb-6">
                Quick Link
              </h3>
              <p className="font-poppins font-normal text-base text-text_FAFAFA mb-4 w-[175px]">
                Privacy Policy
              </p>
              <p className="font-poppins font-normal text-base text-text_FAFAFA mb-4">
                Terms Of Use
              </p>
              <p className="font-poppins font-normal text-base text-text_FAFAFA mb-4">
                FAQ
              </p>
              <p className="font-poppins font-normal text-base text-text_FAFAFA mb-4">
                Contact
              </p>
            </div>
          </div>
          <div className="DownloadApp w-1/5 pt-[80px]">
            <div>
              <h3 className="font-poppins font-medium text-xl text-text_FAFAFA mb-6">
                Download App
              </h3>
              <p className="font-poppins font-medium  text-xs text-text_FAFAFA opacity-70 mb-2">
                Save $3 with App New User Only
              </p>
              <div className="links flex gap-2">
                <div className="left">
                  <img className="" src={qrcode} alt={qrcode} />
                </div>
                <div className="right w-1/2">
                  <div className="top  mb-2">
                    <img className="" src={playstore} alt={playstore} />
                  </div>
                  <div className="bottom">
                    <img className="" src={appstore} alt={appstore} />
                  </div>
                </div>
              </div>
            </div>
            <div className="sociallinks mt-6">
              <div className="flex gap-6">
                <span className="text-2xl text-Primary_FFFFFF cursor-pointer">
                  <RiFacebookLine />
                </span>
                <span className="text-2xl text-Primary_FFFFFF cursor-pointer">
                  <LuTwitter />
                </span>
                <span className="text-2xl text-Primary_FFFFFF cursor-pointer">
                  <FaInstagram />
                </span>
                <span className="text-2xl text-Primary_FFFFFF cursor-pointer">
                  <RiLinkedinLine />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="forSmallerdevice py-10 block sm:hidden">
          <div className="flex justify-between px-5">
            <div className="Exclusive">
              <div className="">
                <div className="logo">
                  <h2 className="font-inter font-bold text-xl text-text_FAFAFA">
                    Exclusive
                  </h2>
                </div>
                <h3 className="font-poppins font-medium text-sm text-text_FAFAFA my-5">
                  Subscribe
                </h3>
                <p className="font-poppins font-normal text-xs text-text_FAFAFA mb-6">
                  Get 10% off your first order
                </p>
                <div className="search relative">
                  <input
                    className="w-[110px] py-1 pl-2 pr-[25px]  font-poppins text-base border-2 border-text_FAFAFA bg-transparent rounded text-text_FAFAFA placeholder:text-[10px]"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <span className="absolute left-[65%] top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <PiPaperPlaneRightLight className="text-xs text-text_FAFAFA" />
                  </span>
                </div>
              </div>
            </div>

            <div className="Account">
              <div>
                <h3 className="font-poppins font-medium text-xl text-text_FAFAFA mb-6">
                  Account
                </h3>
                <p className="font-poppins font-normal text-sm text-text_FAFAFA mb-4 ">
                  My Account
                </p>
                <p className="font-poppins font-normal text-sm text-text_FAFAFA mb-4">
                  <Link to={"/login"}> Login / Register</Link>
                </p>
                <p className="font-poppins font-normal text-sm text-text_FAFAFA mb-4">
                  Cart
                </p>
                <p className="font-poppins font-normal text-sm text-text_FAFAFA mb-4">
                  Wishlist
                </p>
                <p className="font-poppins font-normal text-sm   text-text_FAFAFA ">
                  Shop
                </p>
              </div>
            </div>
          </div>
          <div className="DownloadApp flex flex-col items-center mt-4">
            <div>
              <h3 className="font-poppins font-medium text-2xl text-text_FAFAFA">
                Download App
              </h3>
              <p className="font-poppins font-medium  text-xs text-text_FAFAFA opacity-70 my-2">
                Save $3 with App New User Only
              </p>
              <div className="links flex gap-2">
                <div className="left">
                  <img className="" src={qrcode} alt={qrcode} />
                </div>
                <div className="right w-1/2">
                  <div className="top  mb-2">
                    <img className="" src={playstore} alt={playstore} />
                  </div>
                  <div className="bottom">
                    <img className="" src={appstore} alt={appstore} />
                  </div>
                </div>
              </div>
            </div>
            <div className="sociallinks mt-6">
              <div className="flex gap-6">
                <span className="text-2xl text-Primary_FFFFFF cursor-pointer">
                  <RiFacebookLine />
                </span>
                <span className="text-2xl text-Primary_FFFFFF cursor-pointer">
                  <LuTwitter />
                </span>
                <span className="text-2xl text-Primary_FFFFFF cursor-pointer">
                  <FaInstagram />
                </span>
                <span className="text-2xl text-Primary_FFFFFF cursor-pointer">
                  <RiLinkedinLine />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-white/10 text-xs sm:text-base  pt-2 sm:pt-4 pb-4 sm:pb-6">
        <p className="text-Primary_FFFFFF opacity-30">
          &copy; Copyright Sharif 2025. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
