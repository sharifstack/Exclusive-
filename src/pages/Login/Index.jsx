import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import loginimg from "../../assets/login/login.gif";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { loginValidation } from "../../Validation/loginValidation";

const Login = () => {
  const [eye, setEye] = useState(false);

  const initialValue = {
    emailorphone: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: loginValidation,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div className="mt-10 mb-[140px] ">
      <div className="flex ">
        <div className="w-full bg-[#CBE4E8] flex justify-center items-center ">
          <div className="">
            <img className="" src={loginimg} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="w-[55%]  h-[781px] flex flex-col justify-center items-end">
            <div className="">
              <div className="mb-12">
                <h1 className="font-inter font-medium text-4xl text-Text2_000000 mb-6">
                  Log in to Exclusive
                </h1>
                <p className="font-poppins font-normal text-base  text-Text2_000000">
                  Enter your details below
                </p>
              </div>

              <form action="" onSubmit={formik.handleSubmit}>
                <div className="Email">
                  <input
                    className="w-[370px] pb-2 border-b border-Text2_000000 font-poppins text-base font-normal text-Text2_000000"
                    name="emailorphone"
                    type="text"
                    placeholder="Email or Phone Number"
                    onChange={formik.handleChange}
                    value={formik.values.emailorphone}
                  />

                  {formik.touched.emailorphone && formik.errors.emailorphone ? (
                    <span className="block mt-2 text-Secondary2_DB4444 text-sm">
                      {formik.errors.emailorphone}
                    </span>
                  ) : null}
                </div>

                <div className="Password my-10 relative">
                  <input
                    className=" w-[370px] pb-2 border-b border-Text2_000000 font-poppins text-base font-normal text-Text2_000000"
                    name="password"
                    id="password"
                    type={eye ? "text" : "password"}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />

                  <span
                    onClick={() => setEye(!eye)}
                    className="absolute right-0 top-0"
                  >
                    {eye ? (
                      <FaRegEye className="text-xl cursor-pointer" />
                    ) : (
                      <FaRegEyeSlash className="text-xl cursor-pointer" />
                    )}
                  </span>

                  {formik.touched.password && formik.errors.password ? (
                    <span className="block mt-2 text-Secondary2_DB4444 text-sm w-[370px]">
                      {formik.errors.password}
                    </span>
                  ) : null}
                </div>

                <div className="allProductsbtn flex items-center gap-[87px]">
                  <button className="bg-Button2_DB4444 font-poppins text-base font-medium py-4 px-12 text-text_FAFAFA cursor-pointer rounded">
                    Log In
                  </button>

                  <div className="forgotPassword cursor-pointer">
                    <h4 className="font-poppins font-normal text-base  text-Secondary2_DB4444">
                      Forget Password?
                    </h4>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
