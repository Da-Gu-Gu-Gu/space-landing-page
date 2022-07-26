import React, { useState, useEffect } from "react";
import gsap from "gsap";
import data from "../data.json";

const techcontentAnimation = () => {
  gsap.fromTo(
    ".t-text",
    {
      y: 20,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.4,
    }
  );

  gsap.fromTo(
    ".t-img",
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
      ease: "power2.inOut",
      delay: 0.8,
      duration: 0.6,
    }
  );
};

const TechnologyContent = () => {
  const [techIndex, setTechIndex] = useState(0);

  useEffect(() => {
    techcontentAnimation();
  }, [techIndex]);

  return (
    <div className="mx-auto  w-screen h-[80%]  ">
      <p className="barlow mb-6 md:w-4/5 w-full  mx-auto md:mb-7 text-[16px] text-center md:text-left md:text-[20px] lg:text-[25px] xl:text-[28px] tracking-widest text-white">
        <span className="barlow tracking-widest mr-6 text-white/20 font-bold">
          03
        </span>
        <span className="barlow t-label">S</span>
        <span className="barlow t-label">P</span>
        <span className="barlow t-label">A</span>
        <span className="barlow t-label">C</span>
        <span className="barlow t-label">E</span>
        <span> </span>
        <span className="barlow t-label">L</span>
        <span className="barlow t-label">A</span>
        <span className="barlow t-label">U</span>
        <span className="barlow t-label">N</span>
        <span className="barlow t-label">C</span>
        <span className="barlow t-label">H</span>
        <span> </span>
        <span className="barlow t-label">1</span>
        <span className="barlow t-label">0</span>
        <span className="barlow t-label">1</span>
        {/* SPACE LAUNCH 101 */}
      </p>
      <div className="w-screen flex  md:justify-between flex-col lg:flex-row h-[95%] lg:h-[80%] text-white">
        <div className="order-2  lg:order-1 w-screen   lg:w-[45%] xl:w-[43%] mx-auto lg:py-0 py-5 flex flex-col lg:flex-row lg:justify-between items-center h-1/2 lg:h-full">
          <div className="num lg:w-[80px] flex flex-row lg:flex-col flex-wrap gap-4">
            <div
              onClick={() => setTechIndex(0)}
              className={`${
                techIndex === 0
                  ? "bg-white text-black"
                  : "border border-white/20 "
              } lg:w-[80px] cursor-pointer  lg:h-[80px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] xl:text-[32px] md:text-[24px] text-[16px]   rounded-full  flex items-center justify-center`}
            >
              1
            </div>
            <div
              onClick={() => setTechIndex(1)}
              className={`${
                techIndex === 1
                  ? "bg-white text-black"
                  : "border border-white/20 "
              } lg:w-[80px] cursor-pointer lg:h-[80px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] xl:text-[32px] md:text-[24px] text-[16px] rounded-full  flex items-center justify-center`}
            >
              2
            </div>
            <div
              onClick={() => setTechIndex(2)}
              className={`${
                techIndex === 2
                  ? "bg-white text-black"
                  : "border border-white/20 "
              } lg:w-[80px] cursor-pointer lg:h-[80px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] xl:text-[32px] md:text-[24px] text-[16px] rounded-full  flex items-center justify-center`}
            >
              3
            </div>
          </div>
          <div className="w-screen lg:py-0 py-4 lg:w-max    lg:h-max h-fit lg:mt-0 lg:gap-0 gap-5 md:mt-10 flex flex-col flex-wrap md:gap-5 text-center lg:text-left   ">
            <p className="t-text barlow text-center  w-full lg:w-max text-[14px] md:text-[16px] tracking-widest text-lb uppercase">
              THE TERMINOLOGY…
            </p>
            <h1 className=" t-text lg:text-[45px] w-full lg:w-max  uppercase tracking-widest xl:text-[56px] md:[text-40px] text-[25px]">
              {data.technology[techIndex].name}
            </h1>
            <p className="barlow t-text  mx-auto w-screen lg:mx-0 md:w-[444px] block tracking-widest text-[14px] md:text-[15px] lg:text-[18px] text-lb ">
              {data.technology[techIndex].description}
            </p>
          </div>
        </div>
        <div className="lg:w-[515px] overflow-hidden w-full order-1 lg:order-2  h-[30%] md:h-1/2  lg:h-full">
          {techIndex === 0 && <div className="tech-image-1 t-img"></div>}
          {techIndex === 1 && <div className="tech-image-2 t-img"></div>}
          {techIndex === 2 && <div className="tech-image-3 t-img"></div>}
        </div>
      </div>
    </div>
  );
};

export default TechnologyContent;
