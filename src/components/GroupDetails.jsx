import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import UserCard from "./UserCard";
import qr from "../assets/qr.png";
const GroupDetails = ({ showDetails, setShowDetails, group }) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 right-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-input px-5 py-5 overflow-y-scroll rounded-lg ${
        showDetails ? "" : "hidden"
      }`}
    >
      <h1 className="text-[35px]">Group Details</h1>
      <p className="text-para">Know about your group</p>
      <div className="mt-10 flex flex-col gap-5 ">
        {group?.users?.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
      <div className="w-full h-[250px] flex justify-center items-center">
        <img src={qr} alt="" className="w-[150px] h-[150px]" />
      </div>
      <button
        onClick={() => {
          setShowDetails(false);
        }}
        className="absolute top-2 right-2"
      >
        <IoIosCloseCircle style={{ fontSize: "1.4rem" }} />
      </button>
    </div>
  );
};

export default GroupDetails;
