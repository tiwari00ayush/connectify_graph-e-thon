import React from "react";
import { useAuth } from "../../context/AuthContext";

const ProfileAbout = () => {
  const { currentUser } = useAuth();
  return (
    <div className="flex py-2 px-4 flex-wrap">
      <div className="flex-1 flex flex-col gap-5 px-2">
        <div>
          <h1 className="text-[1.1rem] font-semibold">Name</h1>
          <p className="px-2 py-2 bg-input-box rounded-md">
            {currentUser.displayName}
          </p>
        </div>
        <div>
          <h1 className="text-[1.1rem] font-semibold">E-mail</h1>
          <p className="px-2 py-2 bg-input-box rounded-md">
            {currentUser?.email}
          </p>
        </div>
        <div>
          <h1 className="text-[1.1rem] font-semibold">Age</h1>
          <p className="px-2 py-2 bg-input-box rounded-md">
            {currentUser?.age}
          </p>
        </div>
        <div>
          <h1>Bio</h1>
          <p className="px-2 py-2 bg-input-box rounded-md h-[200px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, perspiciatis. Quaerat consequuntur nisi excepturi
            dolorum hic, incidunt dignissimos et tempora nostrum repudiandae
            tenetur dolorem numquam quae, adipisci ea exercitationem
            praesentium!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
