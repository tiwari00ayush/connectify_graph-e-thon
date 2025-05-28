import React, { useState } from "react";
import loginpage from "../assets/loginpage.png";
import { IoIosCloseCircle } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { Signup } from ".";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import loader from "../assets/icons/loader.svg";

const Login = ({ showLogin, setShowLogin }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleGoogleSignin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/root/profile");
    } catch (error) {
      setError(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/root/profile");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  if (showLogin == true)
    return (
      <>
        {showSignup == true ? (
          <Signup
            showSignup={showSignup}
            setShowSignup={setShowSignup}
            setShowLogin={setShowLogin}
          />
        ) : (
          <div className="flex justify-center items-center bg-secondary-btn  absolute top-0 bottom-0 right-0 left-0 bg-opacity-50">
            <div className="bg-white w-[500px] min-h-[550px] rounded-lg text-secondary-btn relative flez flex-col pt-4 pb-8 px-6 shadow-lg shadow-black">
              <button
                onClick={() => {
                  setShowLogin((prev) => !prev);
                }}
                className="absolute top-1 right-1"
              >
                <IoIosCloseCircle style={{ fontSize: "1.5rem" }} />
              </button>
              <div className="flex justify-center items-center">
                <img src={loginpage} alt="login_img" className="w-[150px]" />
              </div>
              <h1 className="text-center text-3xl my-2">SIGN IN</h1>
              <p className="font-sans  text-center">
                Please enter the details below to continue
              </p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-input-box h-[40px] px-2 text-black font-sans rounded-md"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="w-full bg-input-box h-[40px] px-2 text-black font-sans rounded-md"
                />
                <button
                  type="submit"
                  className="bg-primary-btn px-[10px] rounded-full w-full py-2 shadow-md mt-4 mb-2"
                >
                  {loading ? (
                    <div className="w-full flex items-center justify-center">
                      <img src={loader} />
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
                {error && (
                  <p className="text-red text-center">{error.message}</p>
                )}
              </form>
              <button
                className="bg-white border-primary-btn border-2 px-[10px] rounded-full w-full py-2 my-2 duration-200 ease-in-out hover:bg-primary-btn shadow-md"
                onClick={handleGoogleSignin}
              >
                Sign in with google{" "}
                <FaGoogle
                  style={{
                    display: "inline",
                    marginLeft: "10px",
                    fontSize: "1.4rem",
                  }}
                />
              </button>{" "}
              <div className="flex gap-2 justify-between">
                <p className="font-sans text-center text-[0.9rem]">
                  Having issues?{" "}
                  <a href="#" className="font-bold text-red">
                    Contact us
                  </a>
                </p>
                <p className="font-sans text-center text-[0.9rem] ">
                  New here?{" "}
                  <Link
                    className="font-bold text-red"
                    onClick={() => {
                      setShowSignup(true);
                    }}
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  else return;
};

export default Login;
