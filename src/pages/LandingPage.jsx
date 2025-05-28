import React, { useEffect } from "react";
import { Navbar, HeroSection } from "../components";

const LandingPage = () => {
  return (
    <div className="bg-purple-light text-white font-lilita h-screen flex flex-col">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
