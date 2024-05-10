import React, { useState } from "react";
import loginpage from "../assets/loginpage.png";
import { IoIosCloseCircle } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, db, provider } from "../firebase.config.js";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import loader from "../assets/icons/loader.svg";
const Login = ({ showSignup, setShowSignup, setShowLogin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const photoURL =
    "https://firebasestorage.googleapis.com/v0/b/connectify2-cb944.appspot.com/o/profile%2Fdefault.jpg.avif?alt=media&token=40629d09-65a4-49b7-995b-0e6161a7e06b";
  const handleGoogleSignIn = async () => {
    console.log("hello");
    try {
      setError(null);
      const res = await signInWithPopup(auth, provider);
      const user = res?.user;
      console.log(user);
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        displayName: user.displayName,
        username:
          user.displayName.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        photoURL,
        age: "",
        gender: "male",
        state: "",
        college: "",
        degree: "",
        skills: [],
        interest: [],
        personalityType: "",
        socialHandles: {},
        formStatus: false,
        available: false,
        groupStatus: false,
        groupId: null,
      });
      navigate("/root/profile");
    } catch (error) {
      setError(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const displayName = e.target[0].value;
    const username = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res?.user;
      console.log(user);
      await updateProfile(user, {
        displayName,
        photoURL,
      });
      await setDoc(doc(db, "users", user.uid), {
        email,
        displayName,
        username,
        photoURL,
        age: "",
        gender: "",
        state: "",
        college: "",
        degree: "",
        skills: [],
        interest: [],
        personalityType: "",
        socialHandles: {},
        meetBits: 0,
        repo: 0,
        formStatus: false,
        available: false,
        groupStatus: false,
        groupId: null,
      });
      navigate("/root/profile");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center bg-secondary-btn  absolute top-0 bottom-0 right-0 left-0 bg-opacity-50 ">
      <div className="bg-white w-[500px] min-h-[550px] rounded-lg text-secondary-btn relative flez flex-col pt-4 pb-8 px-6 shadow-lg shadow-black">
        <button
          onClick={() => {
            setShowLogin((prev) => !prev);
            setShowSignup((prev) => !prev);
          }}
          className="absolute top-1 right-1"
        >
          <IoIosCloseCircle style={{ fontSize: "1.5rem" }} />
        </button>
        <div className="flex justify-center items-center">
          <img src={loginpage} alt="login_img" className="w-[150px]" />
        </div>
        <h1 className="text-center text-3xl my-2">SIGN UP</h1>
        <p className="font-sans  text-center">
          Please enter the details below to continue
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Display Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            className="w-full bg-input-box h-[40px] px-2 text-black font-sans rounded-md"
          />
          <label htmlFor="username">Username</label>
          <input
            required
            type="text"
            name="username"
            id="username"
            className="w-full bg-input-box h-[40px] px-2 text-black font-sans rounded-md"
          />
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="w-full bg-input-box h-[40px] px-2 text-black font-sans rounded-md"
          />
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            className="w-full bg-input-box h-[40px] px-2 text-black font-sans rounded-md"
          />
          <button
            disabled={loading}
            className="bg-primary-btn px-[10px] rounded-full w-full py-2 shadow-md mt-4 mb-2"
            type="submit"
          >
            {loading ? (
              <div className="w-full flex items-center justify-center">
                <img src={loader} />
              </div>
            ) : (
              "Sign up"
            )}
          </button>
          {error && <p className="text-red text-center">{error.message}</p>}
        </form>
        <button
          className="bg-white border-primary-btn border-2 px-[10px] rounded-full w-full py-2 my-2 duration-200 ease-in-out hover:bg-primary-btn shadow-md"
          onClick={handleGoogleSignIn}
        >
          Sign up with google{" "}
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
            Already have an account?{" "}
            <Link
              className="font-bold text-red"
              onClick={() => {
                setShowSignup(false);
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
