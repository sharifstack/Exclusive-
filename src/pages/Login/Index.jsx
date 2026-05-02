import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import loginimg from "../../assets/login/login.gif";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { loginValidation } from "../../Validation/loginValidation";
import useAuth from "../../Features/Auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { getAuthErrorMessage } from "../../Features/Auth/authService";
import toast from "react-hot-toast";

const Login = () => {
  const [eye, setEye] = useState(false);
  const { login } = useAuth();
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginValidation,

    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await login({
          email: values.email,
          password: values.password,
        });

        navigate("/");
        toast.success("Login successful", {
          position: "top-center",
          style: {
            fontSize: "20px",
            padding: "15px 20px",
          },
        });
      } catch (err) {
        setErrors({
          email: getAuthErrorMessage(err.code),
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="sm:mt-10 sm:mb-[140px] my-20">
      <div className="flex ">
        <div className="w-full bg-[#CBE4E8] hidden sm:flex justify-center items-center ">
          <div className="">
            <img className="" src={loginimg} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="sm:w-[55%]  sm:h-[781px] flex flex-col justify-center items-center sm:items-end">
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
                    name="email"
                    type="email"
                    placeholder="Enter Your Email "
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />

                  {formik.touched.email && formik.errors.email ? (
                    <span className="block mt-2 text-Secondary2_DB4444 text-sm">
                      {formik.errors.email}
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

                <div className="allProductsbtn flex flex-col sm:flex-row items-center gap-4 sm:gap-[87px]">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="bg-Button2_DB4444 font-poppins text-base font-medium py-4 px-12 text-text_FAFAFA cursor-pointer rounded"
                  >
                    {formik.isSubmitting ? "Logging..." : "Log In"}
                  </button>

                  <div className="forgotPassword cursor-pointer">
                    <button
                      type="button"
                      className="font-poppins font-normal text-base  text-Secondary2_DB4444"
                    >
                      Forget Password?
                    </button>
                  </div>
                </div>
              </form>

              <button
                onClick={async () => {
                  try {
                    await googleLogin();

                    toast.success("Logged in with Google", {
                      position: "top-center",
                      style: {
                        fontSize: "20px",
                        padding: "15px 20px",
                      },
                    });

                    navigate("/");
                  } catch (err) {
                    toast.error("Google login failed");
                  }
                }}
                className="border py-3 px-6 w-full mt-4"
              >
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
