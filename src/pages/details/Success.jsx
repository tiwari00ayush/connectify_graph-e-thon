import React from "react";
import { useAuth } from "../../context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useNavigate } from "react-router-dom";
import done from "../../assets/done.mp4";
const Success = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const userRef = doc(db, "users", currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      formStatus: true,
    });
    navigate("/root/profile");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen font-bold text-[35px] -translate-y-10 gap-2">
      <video
        src={done}
        autoPlay={true}
        loop={true}
        className="w-[100px] h-[100px] rounded-full"
      ></video>
      Details Filled Successfully
      <button
        onClick={handleSubmit}
        className="px-5 py-3 bg-input text-white text-[0.9rem] rounded-md hover:bg-purple-light"
      >
        Continue
      </button>
    </div>
  );
};

export default Success;
