import React from "react";
import { Navbar, HeroSection } from "../components";
import { useAuth } from "../context/AuthContext";

const LandingPage = () => {
  const { currentUser } = useAuth();

  console.log(currentUser);
  return (
    <div className="bg-purple-light text-white font-lilita h-screen flex flex-col">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
