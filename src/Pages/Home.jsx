import React, { useEffect } from "react";
import gsap from "gsap";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";

const homeAnimation = () => {
  gsap.fromTo(
    ".logo",
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 0.5,
      stagger: 0.3,
    }
  );
  gsap.fromTo(
    ".home-text",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.5,
      duration: 0.5,
      stagger: 0.3,
    }
  );
  gsap.fromTo(
    ".explore",
    {
      borderRadius: 0,
      opacity: 0,
    },
    {
      borderRadius: "100%",
      opacity: 1,
      delay: 1.5,
      duration: 1,
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
