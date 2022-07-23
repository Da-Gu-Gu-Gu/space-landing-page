import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const CrewContent = () => {
  return (
    <div className="mx-auto w-full md:w-4/5 h-[80%] ">
      <p className="barlow md:mb-7 text-[16px] text-center md:text-left md:text-[20px] lg:text-[25px] xl:text-[28px] tracking-widest text-white">
        <span className="barlow tracking-widest mr-6 text-white/20 font-bold">
          02
        </span>
        <span className="barlow c-label">M</span>
        <span className="barlow c-label">E</span>
        <span className="barlow c-label">E</span>
        <span className="barlow c-label">T</span>
        <span> </span>
        <span className="barlow c-label">Y</span>
        <span className="barlow c-label">O</span>
        <span className="barlow c-label">U</span>
        <span className="barlow c-label">R</span>
        <span> </span>
        <span className="barlow c-label">C</span>
        <span className="barlow c-label">R</span>
        <span className="barlow c-label">E</span>
        <span className="barlow c-label">W</span>
      </p>

      <Swiper
        spaceBetween={30}
        pagination={{
          el: ".my-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class=" ' + className + '"></span>';
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        observer={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full mySwiper h-[100%] lg:h-[87%] md:h-[100%] relative "
      >
        {/* pagination */}
        <div className="my-pagination z-10 absolute  bottom-[45%] md:bottom-[60%] left-1/2 lg:translate-x-0 -translate-x-1/2 lg:left-0  lg:bottom-12 p-3   h-[10px] flex flex-wrap gap-5"></div>

        {/* slide */}
        <SwiperSlide className="w-full flex flex-col lg:flex-row text-white">
          <div className="order-2 md:order-1 w-full h-1/2 md:h-[30%] lg:w-1/2 text-center lg:text-left flex flex-col lg:h-[80%] justify-center ">
            <h3 className="lg:text-[32px] md:text-[24px] text-[16px] uppercase text-white/25">
              {data.crew[0].role}
            </h3>
            <h1 className="text-[24px] md:text-[40px] lg:text-[45px] xl:text-[56px] uppercase py-5">
              {data.crew[0].name}
            </h1>
            <p className="barlow  mx-auto lg:mx-0 w-full md:w-[444px] tracking-widest text-[14px] md:text-[15px] lg:text-[18px] text-lb">
              {data.crew[0].bio}
            </p>
          </div>
          <div className="order-1 md:order-2 border-b border-gray-700 md:border-0 lg:w-1/2 w-full flex justify-center items-end  lg:h-full md:h-[70%] h-1/2 ">
            <img
              src={data.crew[0].images.webp}
              alt="crew"
              className=" h-4/5  mx-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full flex flex-col lg:flex-row text-white">
          <div className="order-2 md:order-1 w-full h-1/2 md:h-[30%] lg:w-1/2 text-center lg:text-left flex flex-col lg:h-[80%] justify-center ">
            <h3 className="lg:text-[32px] md:text-[24px] text-[16px] uppercase text-white/25">
              {data.crew[1].role}
            </h3>
            <h1 className="text-[24px] md:text-[40px] lg:text-[45px] xl:text-[56px] uppercase py-5">
              {data.crew[1].name}
            </h1>
            <p className="barlow mx-auto lg:mx-0 w-full md:w-[444px] tracking-widest text-[14px] md:text-[15px] lg:text-[18px] text-lb">
              {data.crew[1].bio}
            </p>
          </div>
          <div className="order-1 md:order-2 border-b border-gray-700 md:border-0 lg:w-1/2 w-full flex justify-center items-end  lg:h-full md:h-[70%] h-1/2 ">
            <img
              src={data.crew[1].images.webp}
              alt="crew"
              className=" h-4/5  mx-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full flex flex-col lg:flex-row text-white">
          <div className="order-2 md:order-1 w-full h-1/2 md:h-[30%] lg:w-1/2 text-center lg:text-left flex flex-col lg:h-[80%] justify-center ">
            <h3 className="lg:text-[32px] md:text-[24px] text-[16px] uppercase text-white/25">
              {data.crew[2].role}
            </h3>
            <h1 className="text-[24px] md:text-[40px] lg:text-[45px] xl:text-[56px] uppercase py-5">
              {data.crew[2].name}
            </h1>
            <p className="barlow mx-auto lg:mx-0 w-full md:w-[444px] tracking-widest text-[14px] md:text-[15px] lg:text-[18px] text-lb">
              {data.crew[2].bio}
            </p>
          </div>
          <div className="order-1 md:order-2 border-b border-gray-700 md:border-0 lg:w-1/2 w-full flex justify-center items-end  lg:h-full md:h-[70%] h-1/2 ">
            <img
              src={data.crew[2].images.webp}
              alt="crew"
              className=" h-4/5  mx-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full flex flex-col lg:flex-row text-white">
          <div className="order-2 md:order-1 w-full h-1/2 md:h-[30%] lg:w-1/2 text-center lg:text-left flex flex-col lg:h-[80%] justify-center ">
            <h3 className="lg:text-[32px] md:text-[24px] text-[16px] uppercase text-white/25">
              {data.crew[3].role}
            </h3>
            <h1 className="text-[24px] md:text-[40px] lg:text-[45px] xl:text-[56px] uppercase py-5">
              {data.crew[3].name}
            </h1>
            <p className="barlow mx-auto lg:mx-0 w-full md:w-[444px] tracking-widest text-[14px] md:text-[15px] lg:text-[18px] text-lb">
              {data.crew[3].bio}
            </p>
          </div>
          <div className="order-1 md:order-2 border-b border-gray-700 md:border-0 lg:w-1/2 w-full flex justify-center items-end  lg:h-full md:h-[70%] h-1/2 ">
            <img
              src={data.crew[3].images.webp}
              alt="crew"
              className=" h-4/5  mx-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CrewContent;
