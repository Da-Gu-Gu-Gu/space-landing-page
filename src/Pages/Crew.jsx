import React, { useEffect } from "react";
import gsap from "gsap";
import CrewContent from "../components/CrewContent";
import Navbar from "../components/Navbar";

const crewAnimation = () => {
  gsap.fromTo(
    ".c-label",
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

const Crew = () => {
  useEffect(() => {
    crewAnimation();
  }, []);

  return (
    <div className="crew w-screen h-screen overflow-x-hidden">
      <Navbar />
      <CrewContent />
    </div>
  );
};

export default Crew;
