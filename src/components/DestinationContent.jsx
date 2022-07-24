import React, { useEffect, useState } from "react";
import gsap from "gsap";
import data from "../data.json";

const destinationcontentAnimation = () => {
  gsap.fromTo(
    ".d-img",
    {
      rotate: -360,
      // repeat: -1,
      // yoyo: true,
    },
    {
      rotate: 360,
      repeat: -1,
      duration: 10,
      ease: "sine.inOut",
      yoyo: true,
    }
  );

  gsap.fromTo(
    ".d-text",
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.3,
    }
  );
};

const DestinationContent = () => {
  const [destinationIndex, setdestinationIndex] = useState(0);

  useEffect(() => {
    destinationcontentAnimation();
  }, [destinationIndex]);

  return (
    <div className="flex w-4/5  pb-[20px] h-[90%]   flex-col md:h-[80%]   lg:flex-row mx-auto md:p-[30px] lg:p-[50px] lg:mb-[50px] lg:fixed lg:bottom-0  lg:left-1/2 lg:-translate-x-1/2">
      <div className="first flex flex-col justify-evenly md:justify-between lg:w-1/2 w-full  h-1/2 lg:h-full ">
        <p className="barlow md:mb-7 text-[16px] text-center md:text-left md:text-[20px] lg:text-[25px] xl:text-[28px] tracking-widest text-white">
          <span className="barlow tracking-widest mr-6 text-white/20 font-bold">
            01
          </span>
          <span className="barlow d-label">P</span>
          <span className="barlow d-label">I</span>
          <span className="barlow d-label">C</span>
          <span className="barlow d-label">K</span>
          <span> </span>
          <span className="barlow d-label">Y</span>
          <span className="barlow d-label">O</span>
          <span className="barlow d-label">U</span>
          <span className="barlow d-label">R</span>
          <span> </span>
          <span className="barlow d-label">D</span>
          <span className="barlow d-label">E</span>
          <span className="barlow d-label">S</span>
          <span className="barlow d-label">T</span>
          <span className="barlow d-label">I</span>
          <span className="barlow d-label">N</span>
          <span className="barlow d-label">A</span>
          <span className="barlow d-label">T</span>
          <span className="barlow d-label">I</span>
          <span className="barlow d-label">O</span>
          <span className="barlow d-label">N</span>
        </p>
        <div className="w-[170px] mt-5 lg:mt-0 h-[170px] md:w-[300px] md:h-[300px] mx-auto lg:mx-0 lg:w-[350px] lg:h-[350px] xl:w[445px] xl:h-[445px]">
          <img
            src={data.destinations[destinationIndex].images.webp}
            alt="moon"
            className="d-img"
          />
        </div>
      </div>

      <div className="second mt-10 mb-5 lg:my-0 text-center pb-[20px] lg:text-left md:pt-[30px] lg:pt-[60px] relative w-full lg:w-1/2  h-1/2 lg:h-full ">
        <ul className="flex barlow  mx-auto w-max lg:mx-0 tracking-widest text-white flex-wrap gap-4 md:gap-7">
          <li
            onClick={() => setdestinationIndex(0)}
            className={`${
              destinationIndex === 0 ? "border-b-2" : "text-lb"
            } h-[30px] cursor-pointer`}
          >
            MOON
          </li>
          <li
            onClick={() => setdestinationIndex(1)}
            className={`${
              destinationIndex === 1 ? "border-b-2" : "text-lb"
            } h-[30px] cursor-pointer`}
          >
            MARS
          </li>
          <li
            onClick={() => setdestinationIndex(2)}
            className={`${
              destinationIndex === 2 ? "border-b-2" : "text-lb"
            } h-[30px] cursor-pointer`}
          >
            EUROPA
          </li>
          <li
            onClick={() => setdestinationIndex(3)}
            className={`${
              destinationIndex === 3 ? "border-b-2" : "text-lb"
            } h-[30px] cursor-pointer`}
          >
            TITAN
          </li>
        </ul>
        <h1 className="d-text lg:text-[100px] md:text-[80px] text-[56px] text-white tracking-widest uppercase">
          {data.destinations[destinationIndex].name}
        </h1>
        <p className="d-text text-lb barlow lg:text-[18px] leading7 md:tracking-widest md:text[16px] text-[15px]">
          {data.destinations[destinationIndex].description}
        </p>
        <div className="bg-[#383B4B] w-full h-px md:my-10 my-4"></div>
        <div className="flex w-full flex-col md:flex-row flex-wrap gap-7 md:gap-0">
          <div className="avg md:w-1/2 barlow md:text-[14px] tracking-widest text-lb">
            <p className="tracking-widest d-text">AVG, DISTANCE</p>
            <h2 className="d-text text-white uppercase md:text-[28px]">
              {data.destinations[destinationIndex].distance}
            </h2>
          </div>
          <div className="travel md:w-1/2 barlow md:text-[14px] tracking-widest text-lb">
            <p className="tracking-widest d-text">EST, TRAVEL TIME</p>
            <h2 className="d-text text-white uppercase md:text-[28px]">
              {data.destinations[destinationIndex].travel}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
