import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Login from "./Login";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="px-[2%] py-[10px] flex justify-between items-center text-[1.1rem] z-[2]">
      <div className="flex gap-5">
        <Link
          to={"/about"}
          className="hover:text-primary-btn duration-200 ease-in-out"
        >
          About us
        </Link>
        <Link className="hover:text-primary-btn duration-200 ease-in-out">
          Blogs
        </Link>
      </div>

      <Link to={"/landing"}>
        <h1 className="text-[40px] font-bold -translate-x-4 hover:text-primary-btn duration-200 ease-in-out">
          CONNECTIFY
        </h1>
      </Link>

      <button
        className="px-8 py-2 bg-secondary-btn rounded-full shadow-md shadow-black hover:shadow-lg hover:shadow-secondary-btn duration-300 ease-in-out"
        onClick={() => {
          setShowLogin((prev) => !prev);
          console.log(showLogin);
        }}
      >
        LOGIN
      </button>
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
    </div>
  );
};

export default Navbar;
