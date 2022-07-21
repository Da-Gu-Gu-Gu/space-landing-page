import React from "react";
import DestinationContent from "../components/DestinationContent";
import Navbar from "../components/Navbar";

const Destination = () => {
  return (
    <div className="destination w-screen h-screen overflow-x-hidden">
      <Navbar />
      <DestinationContent />
    </div>
  );
};

export default Destination;
