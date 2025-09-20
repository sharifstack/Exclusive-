import React, { useEffect, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";

const Timer = ({ timeOffer }) => {
  const [time, setTime] = useState(timeOffer * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const worker = new Worker(
      new URL("../../CountDownWorker.js", import.meta.url)
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
    <div className=" flex items-center  gap-2.5">
      <div className="days">
        <div className="flex flex-col">
          <span className="font-poppins font-medium text-xs text-Text2_000000 ">
            Days
          </span>
          <div className="flex items-center  gap-2.5">
            <span>
              <h1 className="font-inter font-bold text-[32px] text-Text2_000000 ">
                {days < 10 && `0${days}`}
              </h1>
            </span>
            <span className="text-HoverButton_E07575 text-xl">
              <FaEllipsisVertical />
            </span>
          </div>
        </div>
      </div>

      <div className="Hours">
        <div className="flex flex-col">
          <span className="font-poppins font-medium text-xs text-Text2_000000">
            Hours
          </span>
          <div className="flex items-center">
            <span>
              <h1 className="font-inter font-bold text-[32px] text-Text2_000000">
                {hours && hours}
              </h1>
            </span>
            <span className="text-HoverButton_E07575 text-xl">
              <FaEllipsisVertical />
            </span>
          </div>
        </div>
      </div>

      <div className="Minutes">
        <div className="flex flex-col">
          <span className="font-poppins font-medium text-xs text-Text2_000000">
            Minutes
          </span>
          <div className="flex items-center">
            <span>
              <h1 className="font-inter font-bold text-[32px] text-Text2_000000">
                {minutes && minutes}
              </h1>
            </span>
            <span className="text-HoverButton_E07575 text-xl">
              <FaEllipsisVertical />
            </span>
          </div>
        </div>
      </div>

      <div className="Seconds">
        <div className="flex flex-col">
          <span className="font-poppins font-medium text-xs text-Text2_000000">
            Seconds
          </span>
          <div className="flex items-center">
            <span>
              <h1 className="font-inter font-bold text-[32px] text-Text2_000000">
                {seconds && seconds}
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
