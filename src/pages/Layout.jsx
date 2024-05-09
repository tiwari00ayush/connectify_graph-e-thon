// Layout.jsx
import React from "react";
import { Footer, Navbar } from "../components";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser ? (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Navigate to={"/landing"} />
      )}
    </>
  );
};

export default Layout;
