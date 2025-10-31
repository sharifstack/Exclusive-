import React from "react";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className=" mb-20 sm:mb-[140px]">
      <BreadCrumb />
      <div className="container">
        <div className="flex flex-col-reverse sm:flex-row gap-[30px]">
          <div className="right sm:w-[30%] shadow-lg px-[35px] pt-10 pb-[51px]">
            <div className="CallToUs">
              <div className="Callicon flex items-center gap-4">
                <span className="">
                  <IoCallOutline className=" p-2 text-Primary_FFFFFF bg-Secondary2_DB4444 rounded-full w-10 h-10" />
                </span>
                <h4 className="font-poppins font-medium text-base text-Text2_000000">
                  Call To Us
                </h4>
              </div>
              <div className="mt-6 mb-4">
                <h4 className="font-poppins font-normal text-sm text-Text2_000000">
                  We are available 24/7, 7 days a week.
                </h4>
              </div>
              <div className="border-b border-Text2_000000 pb-8">
                <h4 className="font-poppins font-normal text-sm text-Text2_000000">
                  Phone: +8801611112222
                </h4>
              </div>
            </div>
            <div className="WriteToUS">
              <div className="emailIcon flex items-center gap-4 mt-10 mb-8">
                <span className="">
                  <MdOutlineEmail className=" p-2 text-Primary_FFFFFF bg-Secondary2_DB4444 rounded-full w-10 h-10" />
                </span>
                <h4 className="font-poppins font-medium text-base text-Text2_000000">
                  Write To US
                </h4>
              </div>

              <h4 className="font-poppins font-normal text-sm text-Text2_000000">
                Fill out our form and we will contact you within 24 hours.
              </h4>

              <div className="my-4">
                <h4 className="font-poppins font-normal text-sm text-Text2_000000">
                  Emails: customer@exclusive.com
                </h4>
              </div>

              <h4 className="font-poppins font-normal text-sm text-Text2_000000">
                Emails: support@exclusive.com
              </h4>
            </div>
          </div>
          <div className="left shadow-lg sm:w-[70%]">
            <form className="shadow-lg py-5 sm:py-10 px-8">
              <div className="Fields flex flex-wrap gap-8">
                <div className="firstname">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5  w-[305px]"
                  />
                </div>
                <div className="Email">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[305px]"
                  />
                </div>

                <div className="Email">
                  <input
                    type="text"
                    placeholder="Your Phone*"
                    className="py-3 pl-4 pr-10 rounded bg-Secondary_F5F5F5 w-[305px]"
                  />
                </div>
                <div className="commentBox">
                  <textarea
                    className=" pt-[13px] pl-4 pb-[100px]  sm:pb-[170px] pr-10 w-[305px] sm:w-[980px] bg-Secondary_F5F5F5"
                    placeholder="Your Massages"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-end gap-8 mt-6">
                <div>
                  <button className="font-poppins text-base font-medium py-4 px-12  cursor-pointer rounded bg-Button2_DB4444 text-text_FAFAFA ">
                    Send Massage
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
