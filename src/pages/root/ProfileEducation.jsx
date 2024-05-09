import React from "react";

const ProfileEducation = () => {
  return (
    <div className="flex py-2 px-4 flex-wrap">
      <div className="flex-1 flex flex-col gap-5 px-2">
        <div>
          <h1 className="text-[1.1rem] font-semibold">University Name</h1>
          <p className="px-2 py-2 bg-input-box rounded-md">AKTU</p>
        </div>
        <div>
          <h1 className="text-[1.1rem] font-semibold">College Name</h1>
          <p className="px-2 py-2 bg-input-box rounded-md">
            ABES Engineering College
          </p>
        </div>
        <div>
          <h1 className="text-[1.1rem] font-semibold">Degree</h1>
          <p className="px-2 py-2 bg-input-box rounded-md">B.tech</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileEducation;
