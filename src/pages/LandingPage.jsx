import React, { useEffect } from "react";
import { Navbar, HeroSection } from "../components";
import { useAuth } from "../context/AuthContext";
import { requestPermission } from "../firebase.config";

const LandingPage = () => {
  const { currentUser } = useAuth();
  useEffect(() => {
    console.log("hello");
    // requestPermission();
  }, []);
  return (
    <div className="bg-purple-light text-white font-lilita h-screen flex flex-col">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
