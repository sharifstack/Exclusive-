import React, { useEffect, useState } from "react";
import img from "../../../assets/Enhance/Enhance.png";

const EnhanceExperience = ({timeleft = 1}) => {
  const [time, setTime] = useState(timeleft * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const worker = new Worker(
      new URL("../../../worker/CountDownWorker.js", import.meta.url)
    );
    worker.postMessage(time);
    worker.onmessage = (event) => {
      setTime(event.data);
    };
  }, []);

  //Formating CountDown
  const formatTime = (millisecond) => {
    let total_second = parseInt(Math.floor(millisecond / 1000));
    let total_minutes = parseInt(Math.floor(total_second / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));
    let seconds = parseInt(Math.floor(total_second % 60));
    let minutes = parseInt(Math.floor(total_minutes % 60));
    let hours = parseInt(Math.floor(total_hours % 24));
    return { days, hours, minutes, seconds };
  };
  //destructing from formatTime
  const { days, hours, minutes, seconds } = formatTime(time);
  return (
    <div className="mt-[140px]  mb-[71px]">
      <div className="container">
        <div className="flex">
          <div className="left w-[45%] bg-Text2_000000 pt-[37px] pl-[56px]">
            <div className="">
              <h2 className="text-Button1_00FF66 font-poppins font-semibold text-base">
                Categories
              </h2>
              <h1 className="text-text_FAFAFA font-inter text-6xl font-semibold w-[571px] tracking-[4px] my-[32px]">
                Enhance Your Music Experience
              </h1>
              <div className="timeleft flex  items-center gap-6 mb-10">
                <div className="bg-Primary_FFFFFF flex flex-col items-center justify-center w-[62px] h-[62px] rounded-full">
                  <h5 className="text-Text2_000000 font-poppins font-semibold text-base">
                    {days < 10 && `0${days}`}
                  </h5>
                  <h4 className="text-Text2_000000 font-poppins font-normal text-[11px]">
                    Days
                  </h4>
                </div>

                <div className="bg-Primary_FFFFFF flex flex-col items-center justify-center w-[62px] h-[62px] rounded-full">
                  <h5 className="text-Text2_000000 font-poppins font-semibold text-base">
                   {hours && hours}
                  </h5>
                  <h4 className="text-Text2_000000 font-poppins font-normal text-[11px]">
                    Hours
                  </h4>
                </div>

                <div className="bg-Primary_FFFFFF flex flex-col items-center justify-center w-[62px] h-[62px] rounded-full">
                  <h5 className="text-Text2_000000 font-poppins font-semibold text-base">
                    {minutes && minutes}
                  </h5>
                  <h4 className="text-Text2_000000 font-poppins font-normal text-[11px]">
                    Minutes
                  </h4>
                </div>

                <div className="bg-Primary_FFFFFF flex flex-col items-center justify-center w-[62px] h-[62px] rounded-full">
                  <h5 className="text-Text2_000000 font-poppins font-semibold text-base">
                    {seconds && seconds}
                  </h5>
                  <h4 className="text-Text2_000000 font-poppins font-normal text-[11px]">
                    Seconds
                  </h4>
                </div>
              </div>
              <div className="flex ">
                <h2 className="px-12 py-4 bg-Button1_00FF66 text-text_FAFAFA font-poppins text-base font-medium rounded cursor-pointer">
                  Buy Now!
                </h2>
              </div>
            </div>
          </div>
          <div className="right w-[55%] bg-Text2_000000 pt-[82px] pb-[88px] bgshadow">
            <div className="flex justify-center">
              <img src={img} alt={img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhanceExperience;
