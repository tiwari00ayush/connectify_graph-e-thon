import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="flex flex-col justify-center items-center h-[600px] gap-10">
      <h1 className="text-[28px]">Are you a ?</h1>
      <div className="flex items-center justify-center gap-5 flex-wrap text-[20px]">
        {types.map((type) => (
          <span
            className={`cursor-pointer py-2 px-3 rounded-lg border-2 border-purple-light hover:bg-purple-light duration-200 ease-in-out hover:text-white ${
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
      <div className="flex flex-row-reverse">
        <button
          className="px-5 py-2 bg-purple-light rounded-md text-white my-2"
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
      {error && <p className="text-red">{error}</p>}
    </div>
  );
};

export default Personality;
