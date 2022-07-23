import React, { useEffect } from "react";
import gsap from "gsap";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";

const homeAnimation = () => {
  gsap.fromTo(
    ".home-text",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.3,
    }
  );

  gsap.fromTo(
    ".explore",
    {
      color: "#fff",
      borderRadius: 0,
    },
    {
      color: "#000",
      borderRadius: "100%",
      duration: 1.5,
    }
  );
};

const Home = () => {
  useEffect(() => {
    homeAnimation();
  }, []);

  return (
    <div className="home w-screen h-screen overflow-hidden">
      <Navbar />
      <HomeContent />
    </div>
  );
};

export default Home;
