import React from "react";

const HomeContent = () => {
  return (
    <div className="flex w-4/5  mx-auto  p-[50px] mb-[50px] fixed bottom-0  left-1/2 -translate-x-1/2">
      <div className="first w-1/2 ">
        <p className="tracking-widest text-[28px] text-lb">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="text-white text-[150px]">SPACE</h1>
        <p className="text-lb max-w-[444px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="second relative  w-1/2 ">
        <div className="w-[250px] explore h-[250px] absolute bottom-0 right-0  rounded-full bg-white flex items-center justify-center">
          <p className="text-[32px] ">EXPLORE </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
