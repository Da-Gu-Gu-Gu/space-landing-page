import React, { useEffect } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import TechnologyContent from "../components/TechnologyContent";

const techAnimation = () => {
  gsap.fromTo(
    ".t-label",
    {
      color: "rgba(255,255,255,0.2)",
    },
    {
      color: "white",
      duration: 0.1,
      stagger: 0.1,
    }
  );
};

const Technology = () => {
  useEffect(() => {
    techAnimation();
  }, []);

  return (
    <div className="technology w-screen h-screen">
      <Navbar />
      <TechnologyContent />
    </div>
  );
};

export default Technology;
