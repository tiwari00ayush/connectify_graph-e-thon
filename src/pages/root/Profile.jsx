import React, { useState } from "react";
import meetbit from "../../assets/meetbit.png";
import repo from "../../assets/repo.png";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const Profile = () => {
  const { currentUser } = useAuth();
  const { editable, setEditable } = useState(false);
  const profileNavLinks = [
    { id: "1", name: "About", link: "" },
    { id: "2", name: "Education", link: "education" },
    { id: "3", name: "Interest / Skills", link: "interest" },
    { id: "4", name: "Links", link: "links" },
  ];
  return (
    <div className="h-screen overflow-y-scroll">
      <div className="flex justify-between items-center w-full py-4 px-2">
        <div className="flex justify-center items-center gap-5 flex-1 ">
          <img
            src={currentUser?.photoURL}
            alt=""
            className="w-[150px] h-[150px] rounded-full border-2 border-black object-contain "
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-[1.4rem] font-bold font-livvic text-center">
              {currentUser?.displayName}
            </h1>
            <p className="text-center">{currentUser?.username}</p>
            <p></p>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center gap-10">
          <div className="flex items-start gap-5">
            <div className="flex flex-col gap-2">
              <img
                src={repo}
                alt=""
                className="w-[60px] h-[60px] rounded-full  object-cover"
              />
              <p className="text-center">Repo</p>
            </div>
            <h1 className="text-[3rem] -translate-y-2">0</h1>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex flex-col gap-2">
              <img
                src={meetbit}
                alt=""
                className="w-[60px] h-[60px] rounded-full  object-cover"
              />
              <p className="text-center">Meet Bits</p>
            </div>
            <h1 className="text-[3rem] -translate-y-2">0</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] bg-secondary-btn flex justify-between pr-3">
        <div className="flex items-center">
          {profileNavLinks.map((nav) => (
            <Link
              to={`/root/profile/${nav.link}`}
              className="px-2 my-1 py-5 hover:bg-primary-btn hover:text-black rounded-md mx-2 flex items-center justify-center text-[1.3rem] text-white"
              key={nav.id}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <button
          className="bg-primary-btn my-2 px-6 rounded-full text-[1.2rem]"
          onClick={(prev) => {
            setEditable(!prev);
          }}
        >
          Edit Profile
        </button>
      </div>
      <Outlet editable={editable} />
    </div>
  );
};

export default Profile;
