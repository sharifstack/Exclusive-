import React from "react";
import loginimg from "../../assets/login/login.gif";

const SignUp = () => {
  return (
    <div className="mt-10 mb-20 sm:mb-[140px] ">
      <div className="flex">
        <div className="w-full bg-[#CBE4E8] hidden justify-center items-center sm:flex">
          <div className="">
            <img className="" src={loginimg} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="sm:w-[55%]  sm:h-[781px] flex flex-col justify-center items-end">
            <div className="">
              <div className="mb-12">
                <h1 className="font-inter font-medium text-4xl text-Text2_000000 mb-6">
                  Create an account
                </h1>
                <p className="font-poppins font-normal text-base  text-Text2_000000">
                  Enter your details below
                </p>
              </div>

              <form action="">
                <div className="">
                  <input
                    className="w-[370px] pb-2 border-b border-Text2_000000 font-poppins text-base font-normal text-Text2_000000"
                    type="text"
                    placeholder="Email or Phone Number"
                  />
                </div>

                <div className="my-10">
                  <input
                    className="w-[370px] pb-2 border-b border-Text2_000000 font-poppins text-base font-normal text-Text2_000000"
                    type="text"
                    placeholder="Name"
                  />
                </div>

                <div className="mb-10">
                  <input
                    className="w-[370px] pb-2 border-b border-Text2_000000 font-poppins text-base font-normal text-Text2_000000"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </form>

              <div className="allProductsbtn flex flex-col sm:flex-row items-center gap-4 sm:gap-[40px]">
                <button className="bg-Button2_DB4444 font-poppins text-base font-medium py-4 px-12 text-text_FAFAFA cursor-pointer rounded">
                  Create Account
                </button>

                <div className="forgotPassword cursor-pointer">
                  <h4 className="font-poppins font-normal text-base  text-Secondary2_DB4444">
                    Forget Password?
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
