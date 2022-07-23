import React from "react";

const HomeContent = () => {
  return (
    <div className="flex w-4/5    flex-col h-[80%]  lg:flex-row mx-auto md:p-[30px] lg:p-[50px] lg:mb-[50px] lg:fixed lg:bottom-0  lg:left-1/2 lg:-translate-x-1/2">
      <div className="first lg:w-1/2 w-full  h-1/2 lg:h-full flex flex-col  justify-end   text-center lg:text-left">
        <p className="home-text tracking-widest barlow lg:text-[28px] md:text-[20px] text-[16px] text-lb">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="home-text text-white text-[80px] md:text-[150px]">
          SPACE
        </h1>
        <p className="home-text text-lb md:max-w-[444px] w-full  barlow mx-auto lg:mx-0 text-[15px] md:text-[16px] tracking-widest lg:text-[18px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="second  relative w-full lg:w-1/2  h-1/2 lg:h-full lg:mt-5">
        <div className="lg:w-[250px] cursor-pointer w-[150px] h-[150px] md:w-[242px] md:h-[242px] explore lg:h-[250px] absolute bottom-1/2 right-1/2 lg:bottom-0 lg:right-0 translate-y-1/2 lg:translate-y-0  translate-x-1/2 lg:translate-x-0 rounded-full bg-white flex items-center justify-center">
          <p className="md:text-[32px]  text-[20px] tracking-wider text-db">
            EXPLORE{" "}
          </p>
        </div>
        <div className="lg:w-[250px] hoverbg scale-1 cursor-pointer w-[150px] h-[150px] md:w-[242px] md:h-[242px] explore lg:h-[250px] absolute bottom-1/2 right-1/2 lg:bottom-0 lg:right-0 translate-y-1/2 lg:translate-y-0  translate-x-1/2 lg:translate-x-0 rounded-full bg-white flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default HomeContent;
