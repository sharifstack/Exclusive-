import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import useAuth from "../../Features/Auth/hooks/useAuth";
import toast from "react-hot-toast";
import {
  updateUserEmail,
  updateUserPassword,
  updateUserProfile,
} from "../../Features/Auth/authService";

const MyAccount = () => {
  const { user } = useAuth();
  const fullName = user?.displayName || "";
  const [firstName, lastName] = fullName.split(" ");

  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    setDisplayName(user?.displayName || "");
    setPhotoURL(user?.photoURL || "");
    setNewEmail(user?.email || "");
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      await updateUserProfile({
        displayName,
        photoURL,
      });

      if (newEmail && newEmail !== user?.email) {
        await updateUserEmail({
          currentPassword,
          newEmail,
        });
      }

      if (newPassword) {
        await updateUserPassword({
          currentPassword,
          newPassword,
        });
      }

      toast.success("Profile updated successfully", {
        position: "top-center",
      });
    } catch (err) {
      toast.error(err?.message || "Update failed");
    }
  };

  if (!user) return null;

  return (
    <div className="mb-[140px]">
      <div className="container flex items-center justify-between ">
        <BreadCrumb />
        <span className="font-poppins font-normal text-sm text-Text2_000000">
          Welcome!{" "}
          <span className="text-Secondary2_DB4444">
            {user?.displayName || "User"}
          </span>
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
            <form onSubmit={handleSave} className="shadow-lg py-10 px-20">
              <div className="mb-4">
                <h4 className="font-poppins font-medium text-xl text-Secondary2_DB4444">
                  Edit Your Profile
                </h4>
              </div>

              <div className="Fields flex justify-between flex-wrap gap-4">
                <div className="firstname">
                  <label className="block mb-2 font-poppins">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[330px]"
                  />
                </div>

                <div className="lastname">
                  <label className="block mb-2 font-poppins">Photo URL</label>
                  <input
                    type="text"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[330px]"
                  />
                </div>

                <div className="Email">
                  <label className="block mb-2 font-poppins">Email</label>
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[330px]"
                  />
                </div>

                <div className="PasswordChanges">
                  <label className="block mb-2 font-poppins">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[710px]"
                  />
                </div>

                <div className="New Password">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[710px]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-8 mt-6">
                <button
                  type="submit"
                  className="font-poppins text-base font-medium py-4 px-12 rounded bg-Button2_DB4444 text-text_FAFAFA"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
