import React from "react";
import CrewContent from "../components/CrewContent";
import Navbar from "../components/Navbar";

const Crew = () => {
  return (
    <div className="crew w-screen h-screen overflow-x-hidden">
      <Navbar />
      <CrewContent />
    </div>
  );
};

export default Crew;
