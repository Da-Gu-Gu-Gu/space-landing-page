import React, { useEffect } from "react";

import gsap from "gsap";
import DestinationContent from "../components/DestinationContent";
import Navbar from "../components/Navbar";

const destinationAnimation = () => {
  gsap.fromTo(
    ".d-label",
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

const Destination = () => {
  useEffect(() => {
    destinationAnimation();
  }, []);

  return (
    <div className="destination w-screen h-max min-h-screen overflow-x-hidden">
      <Navbar />
      <DestinationContent />
    </div>
  );
};

export default Destination;
