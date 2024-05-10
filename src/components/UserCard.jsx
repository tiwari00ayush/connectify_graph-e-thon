import React, { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";

const UserCard = ({ user }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      key={user.id}
      className="flex flex-col bg-purple-light py-2 rounded-md cursor-pointer text-white"
      onClick={() => {
        setShow((prev) => !prev);
      }}
    >
      <div className="flex justify-between items-center pr-10">
        <div className="w-full px-3 flex gap-2 items-center">
          <img
            src={user.photoURL}
            alt="dp"
            className="w-[50px] h-[50px] rounded-full"
          />
          <h1>{user.displayName}</h1>
        </div>
        <CiCircleChevDown style={{ fontSize: "1.5rem" }} />
      </div>
      <div className={`py-2 flex flex-col gap-4 ${show ? "" : "hidden"}`}>
        <div className="flex gap-2 items-center px-2 ">
          <h1 className="bg-green px-2 py-2 rounded-lg">Interest</h1>
          <div className="flex items-center gap-2 flex-wrap">
            {user?.interest?.map((interest) => (
              <span className="bg-input px-2 rounded-md">{interest}</span>
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center px-2 ">
          <h1 className="bg-green px-4 py-2 rounded-lg">Skills</h1>
          <div className="flex items-center gap-2 flex-wrap">
            {user?.skills?.map((skill) => (
              <span className="bg-input px-2 rounded-md">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
