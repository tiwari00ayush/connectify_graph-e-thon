import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import UserCard from "./UserCard";
const GroupDetails = ({ showDetails, setShowDetails, group }) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 right-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-input px-2 overflow-y-scroll ${
        showDetails ? "" : "hidden"
      }`}
    >
      <h1 className="text-[35px]">Group Details</h1>
      <p className="text-para">Know about your group</p>
      <div className="mt-10 flex flex-col gap-5 ">
        {group?.users?.map((user) => (
          <UserCard user={user} />
        ))}
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
