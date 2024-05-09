import React from "react";
import { useAuth } from "../../context/AuthContext";
import { FaHome } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdGroups2 } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
const RootLayout = () => {
  const { currentUser } = useAuth();
  const navLinks = [
    { id: "1", name: "Home", icon: <FaHome /> },
    { id: "2", name: "Notifications", icon: <IoMdNotifications /> },
    { id: "3", name: "Group", icon: <MdGroups2 /> },
    { id: "4", name: "Offers", icon: <BiSolidOffer /> },
    { id: "5", name: "Map", icon: <FaMapMarkedAlt /> },
    { id: "6", name: "Log out", icon: <IoIosLogOut /> },
  ];
  return (
    <div className="w-full flex h-screen">
      <div className="w-[300px] bg-secondary-btn">
        <div className="flex justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-[100px] h-[100px] rounded-full object-cover"
          />
        </div>
        <h1 className="text-[1.5rem] px-2 text-white pb-10 text-center">
          Connectify
        </h1>
        <div className="flex flex-col">
          {navLinks.map((nav) => (
            <div
              key={nav.id}
              className={`flex items-center gap-2 px-2 py-2 hover:bg-primary-btn duration-200 ease-in-out my-2 mx-2 rounded-lg text-[1.4rem] text-white hover:text-black ${
                nav.id === "6" ? "hover:bg-red" : ""
              }`}
            >
              {nav.icon}
              {nav.name}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1  h-screen overflow-y-scroll">{<Outlet />}</div>
    </div>
  );
};

export default RootLayout;
