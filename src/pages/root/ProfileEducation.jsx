import React from "react";
import { useAuth } from "../../context/AuthContext";

const ProfileEducation = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex py-2 px-4 flex-wrap">
      <div className="flex-1 flex flex-col gap-5 px-2">
        <div>
          <h1 className="text-[1.1rem] font-semibold text-para mb-2">
            College Name
          </h1>
          <p className="px-2 py-2 bg-input rounded-md  text-white">
            {currentUser?.college}
          </p>
        </div>
        <div>
          <h1 className="text-[1.1rem] font-semibold text-para mb-2">
            College State
          </h1>
          <p className="px-2 py-2 bg-input rounded-md text-white">
            {currentUser?.state}
          </p>
        </div>
        <div>
          <h1 className="text-[1.1rem] font-semibold text-para mb-2">Degree</h1>
          <p className="px-2 py-2 bg-input rounded-md text-white">
            {currentUser?.degree}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileEducation;
