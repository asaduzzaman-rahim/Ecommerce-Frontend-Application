import React, { useState } from "react";
import { countDownDateAndTime } from "countdown-date-time";
import Flex from "./Flex"

const CountDownDateDay = ({className, SecendclassName}) => {

  const[count, setCount] = useState({})
  
  const conduct_date = "2026-04-25 01:54:00";
  
      setInterval(()=>{
        const countDown = countDownDateAndTime(conduct_date);
        setCount(countDown)
      },1000)


  return (
    <>
      <Flex className="gap-[15px] items-center ">
          <div className={`${SecendclassName}`}>
            <span className="!text-sm font-poppins font-medium leading-[18px] ">Days</span>
            <h3 className={`${className} text-[32px] font-bold font-inter mt-[8px] text-center leading-[30px]`}>{count.days}</h3>
          </div>
          <span className="!text-[30px] font-poppins font-bold">:</span>
          <div className={`${SecendclassName}`}>
            <span className="text-sm font-poppins font-medium leading-[18px] ">Hours</span>
            <h3 className={`${className} text-[32px] font-bold font-inter mt-[8px] text-center leading-[30px]`}>{count.hours}</h3>
          </div>
          <span className="!text-[30px] font-poppins font-bold">:</span>
          <div className={`${SecendclassName}`}>
            <span className="text-sm font-poppins font-medium leading-[18px] ">Minute</span>
            <h3 className={`${className} text-[32px] font-bold font-inter mt-[8px] text-center leading-[30px]`}>{count.minutes}</h3>
          </div>
          <span className="!text-[30px] font-poppins font-bold">:</span>
          <div className={`${SecendclassName}`}>
            <span className="text-sm font-poppins font-medium leading-[18px] ">Secend</span>
            <h3 className={`${className} text-[32px] font-bold font-inter mt-[8px] text-center leading-[30px]`}>{count.seconds}</h3>
          </div>
      </Flex>
    </>
  );
};

export default CountDownDateDay
