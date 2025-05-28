import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Login from "./Login";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="px-2 py-[10px] flex justify-between items-center text-[1.1rem] z-[2]">
      <Link to={"/"}>
        <h1 className="text-[20px] md:text-[40px] font-bold hover:text-primary-btn duration-200 ease-in-out">
          CONNECTIFY
        </h1>
      </Link>
      <div className="flex gap-5 items-center">
        <Link
          to={"/about"}
          className="hover:text-primary-btn duration-200 ease-in-out"
        >
          About us
        </Link>
        <button
          className="px-3 py-2 md:px-8 md:py-2 bg-secondary-btn rounded-full md:shadow-md shadow-black md:hover:shadow-lg hover:shadow-secondary-btn duration-300 ease-in-out"
          onClick={() => {
            setShowLogin((prev) => !prev);
          }}
        >
          Login
        </button>
      </div>

      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
    </div>
  );
};

export default Navbar;
