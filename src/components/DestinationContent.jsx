import React from "react";
import data from "../data.json";

const DestinationContent = () => {
  return (
    <div className="flex w-4/5  pb-[20px] h-[90%]   flex-col md:h-[80%]   lg:flex-row mx-auto md:p-[30px] lg:p-[50px] lg:mb-[50px] lg:fixed lg:bottom-0  lg:left-1/2 lg:-translate-x-1/2">
      <div className="first flex flex-col justify-evenly md:justify-between lg:w-1/2 w-full  h-1/2 lg:h-full ">
        <p className="barlow md:mb-7 text-[16px] text-center md:text-left md:text-[20px] lg:text-[25px] xl:text-[28px] tracking-widest text-white">
          <span className="barlow tracking-widest mr-6 text-white/20 font-bold">
            01
          </span>
          PICK YOUR DESTIANTION
        </p>
        <div className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] mx-auto lg:mx-0 lg:w-[350px] lg:h-[350px] xl:w[445px] xl:h-[445px]">
          <img src={data.destinations[0].images.webp} alt="moon" />
        </div>
      </div>

      <div className="second text-center pb-[20px] lg:text-left md:pt-[30px] lg:pt-[60px] relative w-full lg:w-1/2  h-1/2 lg:h-full ">
        <ul className="flex barlow  mx-auto w-max lg:mx-0 tracking-widest text-white flex-wrap gap-4 md:gap-7">
          <li className="border-b-2 h-[30px]">MOON</li>
          <li className="text-lb">MARS</li>
          <li className="text-lb">EUROPA</li>
          <li className="text-lb">TITAN</li>
        </ul>
        <h1 className="lg:text-[100px] md:text-[80px] text-[56px] text-white tracking-widest uppercase">
          {data.destinations[0].name}
        </h1>
        <p className="text-lb barlow lg:text-[18px] leading7 md:tracking-widest md:text[16px] text-[15px]">
          {data.destinations[0].description}
        </p>
        <div className="bg-[#383B4B] w-full h-px md:my-10 my-4"></div>
        <div className="flex w-full flex-col md:flex-row flex-wrap gap-7 md:gap-0">
          <div className="avg md:w-1/2 barlow md:text-[14px] tracking-widest text-lb">
            <p className="tracking-widest">AVG, DISTANCE</p>
            <h2 className="text-white uppercase md:text-[28px]">
              {data.destinations[0].distance}
            </h2>
          </div>
          <div className="travel md:w-1/2 barlow md:text-[14px] tracking-widest text-lb">
            <p className="tracking-widest">EST, TRAVEL TIME</p>
            <h2 className="text-white uppercase md:text-[28px]">
              {data.destinations[0].travel}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
