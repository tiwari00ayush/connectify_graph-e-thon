import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase.config";
import { useAuth } from "../../context/AuthContext";

const Personality = () => {
  const { currentUser } = useAuth();

  const navigate = useNavigate();
  const [personality, setPersonality] = useState(null);
  const [error, setError] = useState(null);
  const types = [
    { id: "1", name: "Introvert" },
    { id: "2", name: "Extrovert" },
    { id: "3", name: "Ambivert" },
  ];
  const handleSubmit = async () => {
    if (personality === null) {
      setError("Select one");
      return;
    }
    const userRef = doc(db, "users", currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      personalityType: personality,
    });
    navigate("/details/social");
  };
  return (
    <div className="flex flex-col justify-center items-center h-[600px] w-full">
      <h1 className="font-livvic text-[36px]">Personality Section</h1>
      <p className="text-para mt-3 mb-5">Select which describes you most</p>

      <div className="flex  items-center justify-center gap-5 flex-wrap text-[20px]">
        {types.map((type) => (
          <span
            className={`cursor-pointer py-2 px-3 rounded-lg bg-input  hover:bg-purple-light duration-200 ease-in-out hover:text-white ${
              personality === type.name ? "bg-purple-light text-white" : ""
            }  `}
            key={type.id}
            onClick={() => {
              setPersonality(type.name);
            }}
          >
            {type.name}
          </span>
        ))}
      </div>
      <div className="flex my-4  w-full justify-center items-center">
        <button
          className="px-5 py-2 bg-purple-light rounded-md text-white my-2"
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
      {error && <p className="text-red">{error}</p>}
      {/* <div className="translate-y-10 flex">
        <p className="text-para mt-3 mb-5">Don't know your personality?</p>
        <Link
          className="font-livvic text-[20px] p-3  text-[#3692d8] w-[500px] flex justify-center items-center"
          to={"https://www.16personalities.com/free-personality-test"}
        >
          Personality Test
        </Link>
      </div> */}
    </div>
  );
};

export default Personality;
