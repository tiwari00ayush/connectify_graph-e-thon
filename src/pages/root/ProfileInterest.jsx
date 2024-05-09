import React from "react";
import { useAuth } from "../../context/AuthContext";

const ProfileInterest = () => {
  const { currentUser } = useAuth();
  const interest = currentUser?.interest;
  const skills = currentUser?.skills;
  return (
    <div className=" py-2 px-4 ">
      <h1 className="text-[1.2rem] text-para mb-2 ">Interest</h1>
      <div className="flex flex-wrap gap-3">
        {interest?.map((x) => (
          <span className="px-3 py-2 border-purple-light border-2 rounded-lg bg-purple-light text-white">
            {x}
          </span>
        ))}
      </div>
      <h1 className="text-[1.2rem] mt-3 text-para mb-2 ">Skills</h1>
      <div className="flex flex-wrap gap-3">
        {skills?.map((x) => (
          <span className="px-3 py-2 border-purple-light border-2 rounded-lg bg-purple-light text-white">
            {x}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileInterest;
