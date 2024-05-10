import React from "react";
import { useAuth } from "../../context/AuthContext";
import { FaHome } from "react-icons/fa";
import { IoMdLogOut, IoMdNotifications } from "react-icons/io";
import { MdGroups2 } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoIosCreate } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
const RootLayout = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const navLinks = [
    { id: "1", name: "Home", icon: <FaHome />, link: "/root" },
    {
      id: "2",
      name: "Notifications",
      icon: <IoMdNotifications />,
      link: "/root/notification",
    },
    { id: "3", name: "Group", icon: <MdGroups2 />, link: "/root/group" },
    { id: "4", name: "Offers", icon: <BiSolidOffer />, link: "/root/offers" },
    { id: "5", name: "Map", icon: <FaMapMarkedAlt />, link: "/root/map" },
    {
      id: "6",
      name: "Profile",
      icon: <CgProfile />,
      link: "/root/profile",
    },
    {
      id: "7",
      name: "Create Post",
      icon: <IoIosCreate />,
      link: "/root/profile",
    },
    { id: "0", name: "Log out", icon: <IoIosLogOut />, link: "" },
  ];
  return (
    <div className="w-full flex h-screen bg-black">
      <div className={`w-[230px] bg-black shadow-md shadow-white`}>
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
            <Link
              to={nav.link}
              key={nav.id}
              className={`flex items-center gap-2 px-2 py-2 hover:bg-purple-light  duration-200 ease-in-out my-2 mx-2 rounded-lg text-[1.2rem] text-white ${
                nav.id === "0" ? "hover:bg-[#f44c71]" : ""
              }`}
              onClick={() => {
                if (nav.id === "0") {
                  signOut(auth);
                  navigate("/landing");
                }
              }}
            >
              {nav.icon}
              {nav.name}
              {nav.id === "3" && currentUser?.groupStatus && (
                <span className="bg-red w-[20px] h-[20px] rounded-full text-cente flex justify-center items-center text-[0.8rem]">
                  1
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1  h-screen overflow-y-scroll px-5">
        {<Outlet />}
      </div>
    </div>
  );
};

export default RootLayout;
