import React from "react";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";

const MyAccount = () => {
  return (
    <div className="mb-[140px]">
      <div className="container flex items-center justify-between ">
        <BreadCrumb />
        <span className="font-poppins font-normal text-sm text-Text2_000000">
          Welcome! <span className="text-Secondary2_DB4444">Sharif Ahmed</span>
        </span>
      </div>
      <div className="container ">
        <div className="flex">
          <div className="MyAccountOptions w-[22%] ">
            <div className="manageMyAccount ">
              <h2 className="font-poppins text-base font-semibold text-Text2_000000 ">
                Manage My Account
              </h2>
              <div className=" ml-[35px] my-4 flex flex-col gap-2 ">
                <h4 className="font-poppins text-base font-normal text-[rgba(0,0,0,0.5)] hover:text-Secondary2_DB4444 transition-all duration-150 cursor-pointer">
                  My Profile
                </h4>
                <h4 className="font-poppins text-base font-normal text-[rgba(0,0,0,0.5)] hover:text-Secondary2_DB4444 transition-all duration-150 cursor-pointer">
                  Address Book
                </h4>
                <h4 className="font-poppins text-base font-normal text-[rgba(0,0,0,0.5)] hover:text-Secondary2_DB4444 transition-all duration-150 cursor-pointer">
                  My Payment Options
                </h4>
              </div>
            </div>

            <div className="manageMyAccount ">
              <h2 className="font-poppins text-base font-semibold text-Text2_000000 ">
                My Orders
              </h2>
              <div className="  ml-[35px] my-4 flex flex-col gap-2 ">
                <h4 className="font-poppins text-base font-normal text-[rgba(0,0,0,0.5)] hover:text-Secondary2_DB4444 transition-all duration-150 cursor-pointer">
                  My Orders
                </h4>
                <h4 className="font-poppins text-base font-normal text-[rgba(0,0,0,0.5)] hover:text-Secondary2_DB4444 transition-all duration-150 cursor-pointer">
                  My Returns
                </h4>
              </div>
            </div>

            <div className="My WishList ">
              <h2 className="font-poppins text-base font-semibold text-Text2_000000 ">
                My WishList
              </h2>
            </div>
          </div>
          <div className="MyAccountForm w-[78%]">
            <div>
              <form action="" className="shadow-lg py-10 px-20">
                <div className="mb-4">
                  <h4 className="font-poppins font-medium text-xl text-Secondary2_DB4444">
                    Edit Your Profile
                  </h4>
                </div>
                <div className="Fields flex justify-between flex-wrap gap-4">
                  <div className="firstname">
                    <label
                      htmlFor="firstname"
                      className="block mb-2 font-poppins font-normal text-base text-Text2_000000"
                    >
                      First Name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      placeholder="Sharif"
                      className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5  w-[330px]"
                    />
                  </div>

                  <div className="lastname">
                    <label
                      htmlFor="lastname"
                      className="block mb-2 font-poppins font-normal text-base text-Text2_000000"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Ahmed"
                      className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[330px]"
                    />
                  </div>

                  <div className="Email">
                    <label
                      htmlFor="email"
                      className="block mb-2 font-poppins font-normal text-base text-Text2_000000"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      placeholder="Address"
                      className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[330px]"
                    />
                  </div>

                  <div className="Address">
                    <label
                      htmlFor="address"
                      className="block mb-2 font-poppins font-normal text-base text-Text2_000000"
                    >
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder="Kingston, 5236, United State"
                      className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[330px]"
                    />
                  </div>

                  <div className="state">
                    <label
                      htmlFor="city"
                      className="block mb-2 font-poppins font-normal text-base text-Text2_000000"
                    >
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder="Dhaka.."
                      className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[330px]"
                    />
                  </div>

                  <div className="PostalCode">
                    <label
                      htmlFor="postalcode"
                      className="block mb-2 font-poppins font-normal text-base text-Text2_000000"
                    >
                      Postal Code
                    </label>
                    <input
                      id="postalcode"
                      type="text"
                      placeholder="Ex: 1235"
                      className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[330px]"
                    />
                  </div>

                  <div className="PasswordChanges">
                    <label
                      htmlFor="password"
                      className="block mb-2 font-poppins font-normal text-base text-Text2_000000"
                    >
                      Password Changes
                    </label>
                    <input
                      id="password"
                      type="text"
                      placeholder="Current Passwod"
                      className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[710px]"
                    />
                  </div>

                  <div className="New Passwod">
                    <input
                      type="text"
                      placeholder="New Passwod"
                      className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[710px]"
                    />
                  </div>

                  <div className="Confirm New Passwod">
                    <input
                      type="text"
                      placeholder="Confirm New Passwod"
                      className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[710px]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-8 mt-6">
                  <h4 className="font-poppins font-normal text-base text-Text2_000000">
                    Cancel
                  </h4>

                  <div>
                    <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded bg-Button2_DB4444 text-text_FAFAFA ">
                      Save Changes
                    </button>
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

export default MyAccount;
