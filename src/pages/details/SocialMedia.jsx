import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

const SocialMedia = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userRef = doc(db, "users", currentUser.uid);
    const instagram = e.target[0].value;
    const linkedin = e.target[1].value;
    const twitter = e.target[2].value;
    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      socialHandles: { instagram, linkedin, twitter },
    });
    navigate("/details/success");
  };
  return (
    <form
      className="flex flex-col justify-center  gap-y-2"
      onSubmit={handleSubmit}
    >
      <h1 className="text-[25px] my-2">Social Media handles</h1>
      <div className="flex items-center gap-2 w-full">
        <img
          className="h-[40px] w-[40px]"
          src="https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147823814.jpg"
          alt=""
        />
        <input
          type="text"
          placeholder="Enter your profile url"
          className="rounded-md bg-input-box h-[40px] px-2 w-full"
        />
      </div>
      <div className="flex items-center gap-2 w-full">
        <img
          className="h-[40px] w-[40px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
          alt=""
        />
        <input
          type="text"
          placeholder="Enter your profile url"
          className="rounded-md bg-input-box h-[40px] px-2 w-full"
        />
      </div>
      <div className="flex items-center gap-2 w-full">
        <img
          className="h-[40px] w-[40px]"
          src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230724104554.jpg"
          alt=""
        />
        <input
          type="text"
          placeholder="Enter your profile url"
          className="rounded-md bg-input-box h-[40px] px-2 w-full"
        />
      </div>
      <div className="flex flex-row-reverse">
        <button
          className="px-5 py-2 bg-purple-light rounded-md text-white my-2"
          type="submit"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default SocialMedia;
