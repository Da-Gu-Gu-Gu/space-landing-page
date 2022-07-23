import React, { useEffect, useState } from "react";

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

const Destination = () => {
  const [destinationIndex, setdestinationIndex] = useState(0);
  useEffect(() => {
    destinationAnimation();
  }, [destinationIndex]);

  return (
    <div className="destination w-screen h-screen overflow-x-hidden">
      <Navbar />
      <DestinationContent
        destinationIndex={destinationIndex}
        setdestinationIndex={setdestinationIndex}
      />
    </div>
  );
};

export default Destination;
