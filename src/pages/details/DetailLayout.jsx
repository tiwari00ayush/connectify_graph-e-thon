import React from "react";
import detailLayoutImg from "../../assets/detailLayout.png";
import detail from "../../assets/detail.mp4";
import { Outlet } from "react-router-dom";
const DetailLayout = () => {
  return (
    <div className="w-full h-screen flex bg-black text-white">
      <div className="flex-1  h-screen overflow-scroll px-[5%] md:px-[2%] py-10 shadow-md shadow-white">
        <div className="flex h-full justify-center items-center">
          <Outlet />
        </div>
      </div>
      <div className="flex-1  flex-col justify-center items-center hidden md:flex ">
        <div className="mx-4 my-2 rounded-xl   bg-purple-light w-full h-full">
          <video
            src={detail}
            className="w-full h-full object-cover"
            loop={true}
            autoPlay={true}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default DetailLayout;
