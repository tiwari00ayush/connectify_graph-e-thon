import React, { useState } from "react";
import hero from "../assets/hero5.png";
import Login from "./Login";

const HeroSection = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="flex-1 flex justify-center items-center px-[2%] relative">
        <div
          className={`flex flex-col items-center ${
            showLogin ? "" : "z-[1]"
          } transform -translate-y-[100px] md:-translate-y-[50px]`}
        >
          <span className="text-[40px] md:text-[50px] lg:text-[60px] text-secondary-btn text-center">
            Building Bonds
          </span>
          <span className="text-[60px] md:text-[75px] lg:text-[85px] text-secondary-btn -mt-5 md:-mt-8 lg:-mt-10 text-center">
            GROUP BY GROUP
          </span>
          <button
            onClick={() => {
              setShowLogin((prev) => !prev);
            }}
            className="cursor-pointer px-4 py-2 bg-primary-btn text-[18px] md:text-[20px] lg:text-[24px] text-secondary-btn rounded-full shadow-md shadow-black duration-[400ms] hover:shadow-lg hover:shadow-black mt-4"
          >
            FIND YOUR GROUP &gt;
          </button>
        </div>
        <img
          src={hero}
          alt=""
          className="absolute bottom-0 -left-2 right-2 w-full"
        />
      </div>
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
    </>
  );
};

export default HeroSection;