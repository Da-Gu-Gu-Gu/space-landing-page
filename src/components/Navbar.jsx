import React, { useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="w-screen  xl:h-[136px] h-[100px]   pl-10 mx-auto flex justify-between items-center">
      <Link to="/">
        <img
          src={`${data.shared.logo}`}
          alt="logo"
          className="md:w-[48px] md:h-[48px]  w-[40px] h-[40px]"
        />
      </Link>
      <ul
        className={`md:flex ${
          !open && "close"
        } nav_links bg-[#24262F]/[0.8] xl:h-[96px] lg:h-[60px] md:h-[100px] flex-wrap gap-6 lg:gap-0 md:px-20 items-center text-[16px] tracking-widest w-[250px] md:w-auto`}
      >
        <li
          className="mb-28 mt-10 md:hidden pr-10 "
          onClick={() => setOpen(false)}
        >
          <img
            src={`${data.shared.close}`}
            alt="menu"
            className="w-[19x] h-[19px]   cursor-pointer block float-right  "
          />
        </li>
        <Link to="/">
          <li
            className={`${
              pathname === "/"
                ? "border-r-4  md:border-b-4 md:border-r-0"
                : "hover:text-lb hover:border-lb md:hover:border-b-2"
            } lg:ml-[100px] barlow text-[14px] lg:text-[16px] text-left md:text-center text-white  md:pl-0 md:pr-0  grow pl-10   xl:h-[96px] xl:leading-[96px] lg:h-[60px] lg:leading-[60px] md:h-[100px] md:leading-[100px] h-[50px] leading-[50px]`}
          >
            <span className="inline md:hidden lg:inline font-bold barlow">
              00
            </span>{" "}
            HOME
          </li>
        </Link>
        <Link to="/destination">
          <li
            className={`${
              pathname === "/destination"
                ? "border-r-4  md:border-b-4 md:border-r-0"
                : "hover:text-lb hover:border-lb md:hover:border-b-2"
            }   lg:ml-[50px] barlow cursor-pointer text-[14px] text-left md:text-center text-white md:pl-0 md:pr-0  grow pl-10  xl:h-[96px] xl:leading-[96px] lg:h-[60px] lg:leading-[60px]  md:h-[100px] md:leading-[100px] h-[50px] leading-[50px]`}
          >
            {" "}
            <span className="inline md:hidden lg:inline font-bold barlow">
              01
            </span>{" "}
            DESTINATION
          </li>
        </Link>
        <Link to="/crew">
          <li
            className={`${
              pathname === "/crew"
                ? "border-r-4  md:border-b-4 md:border-r-0"
                : "hover:text-lb hover:border-lb md:hover:border-b-2"
            } first:last:lg:ml-[50px] barlow text-[14px] text-left md:text-center text-white md:pl-0 md:pr-0  grow pl-10  xl:h-[96px] xl:leading-[96px] lg:h-[60px] lg:leading-[60px]  md:h-[100px] md:leading-[100px] h-[50px] leading-[50px]`}
          >
            {" "}
            <span className="inline md:hidden lg:inline font-bold barlow">
              02
            </span>{" "}
            CREW
          </li>
        </Link>
        <Link to="/technology">
          <li
            className={`${
              pathname === "/technology"
                ? "border-r-4  md:border-b-4 md:border-r-0"
                : "hover:text-lb hover:border-lb md:hover:border-b-2"
            } lg:ml-[50px] lg:mr-[150px] barlow text-[14px] text-left md:text-center text-white  md:pl-0 md:pr-0  grow pl-10  xl:h-[96px] xl:leading-[96px] lg:h-[60px] lg:leading-[60px]  md:h-[100px] md:leading-[100px] h-[50px] leading-[50px]`}
          >
            {" "}
            <span className="inline md:hidden lg:inline font-bold barlow">
              03
            </span>{" "}
            TECHNOLOGY
          </li>
        </Link>
      </ul>

      <img
        src={`${data.shared.hamburger}`}
        alt="menu"
        onClick={() => setOpen(true)}
        className="w-[24px] h-[21px] mr-10 cursor-pointer block md:hidden"
      />
    </div>
  );
};

export default Navbar;
