import React, { useState } from "react";
import loginimg from "../../assets/login/login.gif";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Features/Auth/hooks/useAuth";
import { getAuthErrorMessage } from "../../Features/Auth/authService";

const SignUp = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup({ name, email, password });
      navigate("/");
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 mb-20 sm:mb-[140px] ">
      <div className="flex">
        <div className="w-full bg-[#CBE4E8] hidden justify-center items-center sm:flex">
          <div className="">
            <img className="" src={loginimg} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="sm:w-[55%]  sm:h-[781px] flex flex-col justify-center items-center sm:items-end">
            <div className="">
              <div className="mb-12">
                <h1 className="font-inter font-medium text-4xl text-Text2_000000 mb-6">
                  Create an account
                </h1>
                <p className="font-poppins font-normal text-base  text-Text2_000000">
                  Enter your details below
                </p>
              </div>

              <form onSubmit={handleSubmit} action="">
                <div className="">
                  <input
                    className="w-[370px] pb-2 border-b border-Text2_000000 font-poppins text-base font-normal text-Text2_000000"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email or Phone Number"
                  />
                </div>

                <div className="my-10">
                  <input
                    className="w-[370px] pb-2 border-b border-Text2_000000 font-poppins text-base font-normal text-Text2_000000"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                  />
                </div>

                <div className="mb-10">
                  <input
                    className="w-[370px] pb-2 border-b border-Text2_000000 font-poppins text-base font-normal text-Text2_000000"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </div>

                {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

                <div className="allProductsbtn flex flex-col sm:flex-row items-center gap-4 sm:gap-[40px]">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-Button2_DB4444 font-poppins text-base font-medium py-4 px-12 text-text_FAFAFA cursor-pointer rounded"
                  >
                    {loading ? "Creating..." : "Create Account"}
                  </button>

                  <Link to={"/login"}>
                    <div className="forgotPassword cursor-pointer">
                      <button className="font-poppins font-normal text-base  text-Secondary2_DB4444">
                        Already a customer?
                      </button>
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
