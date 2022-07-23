import React from "react";
import data from "../data.json";

const TechnologyContent = () => {
  return (
    <div className="mx-auto  w-screen h-[80%]  ">
      <p className="barlow mb-6 md:w-4/5 w-full  mx-auto md:mb-7 text-[16px] text-center md:text-left md:text-[20px] lg:text-[25px] xl:text-[28px] tracking-widest text-white">
        <span className="barlow tracking-widest mr-6 text-white/20 font-bold">
          03
        </span>
        SPACE LAUNCH 101
      </p>
      <div className="w-screen flex  md:justify-between flex-col lg:flex-row h-[95%] lg:h-[80%] text-white">
        <div className="order-2  lg:order-1 w-screen   lg:w-[45%] xl:w-[43%] mx-auto lg:py-0 py-5 flex flex-col lg:flex-row lg:justify-between items-center h-1/2 lg:h-full">
          <div className="num lg:w-[80px] flex flex-row lg:flex-col flex-wrap gap-4">
            <div className="lg:w-[80px]  lg:h-[80px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] xl:text-[32px] md:text-[24px] text-[16px]  text-black rounded-full bg-white flex items-center justify-center">
              1
            </div>
            <div className="lg:w-[80px]  lg:h-[80px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] xl:text-[32px] md:text-[24px] text-[16px] rounded-full border border-white/20  flex items-center justify-center">
              2
            </div>
            <div className="lg:w-[80px]  lg:h-[80px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] xl:text-[32px] md:text-[24px] text-[16px] rounded-full border border-white/20  flex items-center justify-center">
              3
            </div>
          </div>
          <div className="w-screen lg:py-0 py-4 lg:w-max    lg:h-max h-fit lg:mt-0 lg:gap-0 gap-5 md:mt-10 flex flex-col flex-wrap md:gap-5 text-center lg:text-left   ">
            <p className="barlow text-center  w-full lg:w-max text-[14px] md:text-[16px] tracking-widest text-lb uppercase">
              THE TERMINOLOGY…
            </p>
            <h1 className="lg:text-[45px] w-full lg:w-max  uppercase tracking-widest xl:text-[56px] md:[text-40px] text-[25px]">
              {data.technology[0].name}
            </h1>
            <p className="barlow   mx-auto w-screen lg:mx-0 md:w-[444px] block tracking-widest text-[14px] md:text-[15px] lg:text-[18px] text-lb ">
              {data.technology[0].description}
            </p>
          </div>
        </div>
        <div className="lg:w-[515px] w-full order-1 lg:order-2  h-[30%] md:h-1/2  lg:h-full">
          <div className="tech-image-1 "></div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyContent;
