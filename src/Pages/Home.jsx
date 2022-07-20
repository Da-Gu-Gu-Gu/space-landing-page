import React from "react";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home w-screen h-screen overflow-hidden">
      <Navbar />
      <HomeContent />
    </div>
  );
};

export default Home;
