import React from "react";
import detailLayoutImg from "../../assets/detailLayout.png";
import { Outlet } from "react-router-dom";
const DetailLayout = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="flex-1  h-screen overflow-scroll px-[5%] md:px-[2%] py-10">
        <div>
          <h1 className="font-livvic text-[30px]">Tell us about yourself</h1>
          <Outlet />
        </div>
      </div>
      <div className="flex-1  flex-col justify-center items-center hidden md:flex bg-purple-light">
        <h1 className="text-bold text-[1.7rem] font-sans px-4 py-2 bg-purple-light rounded-lg text-white">
          Let's Connect: Share Your Story with Us!
        </h1>
        <img
          src={detailLayoutImg}
          alt="detailLayoutImg"
          className=" shadow-md shadow-black w-[90%]"
        />
      </div>
    </div>
  );
};

export default DetailLayout;
