import React, { useState } from "react";
import hero from "../assets/hero5.png";
import Login from "./Login";
const HeroSection = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className=" flex-1 flex justify-center items-center px-[2%]">
        <div
          className={`flex flex-col items-center -translate-y-[100px] ${
            showLogin ? "" : "z-[1]"
          }`}
        >
          <span className="text-[50px] text-secondary-btn">Building Bonds</span>
          <span className="text-[85px] text-secondary-btn -mt-10">
            GROUP BY GROUP
          </span>
          <button
            onClick={() => {
              setShowLogin((prev) => !prev);
            }}
            className="cursor-pointer px-4 py-2 bg-primary-btn text-[24px] text-secondary-btn rounded-full shadow-md shadow-black duration-[400ms] hover:shadow-lg hover:shadow-black"
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
