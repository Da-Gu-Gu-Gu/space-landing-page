import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

console.log("aa", data);

const Navbar = () => {
  return (
    <div className="w-screen h-[136px]   pl-10 mx-auto flex justify-between items-center">
      <img
        src={`${data.shared.logo}`}
        alt="logo"
        className="w-[48px] h-[48px]"
      />
      <ul className="flex bg-white/[0.4] h-[96px] items-center text-[16px] tracking-widest ">
        <li className="ml-[100px] text-center text-white hover:text-lb hover:border-lb  border-b-2 h-[96px] leading-[96px]">
          <Link to="/">00 HOME</Link>
        </li>
        <li className="ml-[50px] text-center text-white hover:text-lb hover:border-lb  hover:border-b-2 h-[96px] leading-[96px]">
          <Link to="/">01 DESTINATION</Link>
        </li>
        <li className="ml-[50px] text-center text-white hover:text-lb hover:border-lb  border-b-2 h-[96px] leading-[96px]">
          <Link to="/">02 CREW</Link>
        </li>
        <li className="ml-[50px] mr-[150px] text-center text-white hover:text-lb hover:border-lb  border-b-2 h-[96px] leading-[96px]">
          <Link to="/">03 TECHNOLOGY</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
