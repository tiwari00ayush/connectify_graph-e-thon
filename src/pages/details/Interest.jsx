import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase.config";
import { useAuth } from "../../context/AuthContext";

const Interest = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [interest, setInterest] = useState([
    { id: 1, name: "Reading" },
    { id: 2, name: "Writing" },
    { id: 3, name: "Drawing" },
    { id: 4, name: "Painting" },
    { id: 5, name: "Playing Musical Instruments" },
    { id: 6, name: "Singing" },
    { id: 7, name: "Dancing" },
    { id: 8, name: "Cooking" },
    { id: 9, name: "Baking" },
    { id: 10, name: "Photography" },
    { id: 11, name: "Videography" },
    { id: 12, name: "Gardening" },
    { id: 13, name: "Hiking" },
    { id: 14, name: "Camping" },
    { id: 15, name: "Fishing" },
    { id: 16, name: "Hunting" },
    { id: 17, name: "Traveling" },
    { id: 18, name: "Exploring New Cultures" },
    { id: 19, name: "Learning Languages" },
    { id: 20, name: "Playing Sports" },
    { id: 21, name: "Watching Sports" },
    { id: 22, name: "Swimming" },
    { id: 23, name: "Cycling" },
    { id: 24, name: "Running" },
    { id: 25, name: "Yoga" },
    { id: 26, name: "Meditation" },
    { id: 27, name: "Pilates" },
    { id: 28, name: "Fitness Training" },
    { id: 29, name: "Weightlifting" },
    { id: 30, name: "Boxing" },
    { id: 31, name: "Martial Arts" },
    { id: 32, name: "Gaming" },
    { id: 33, name: "Video Games" },
    { id: 34, name: "Board Games" },
    { id: 35, name: "Card Games" },
    { id: 36, name: "Puzzles" },
    { id: 37, name: "Solving Rubik's Cubes" },
    { id: 38, name: "Collecting Stamps" },
    { id: 39, name: "Collecting Coins" },
    { id: 40, name: "Collecting Antiques" },
    { id: 41, name: "Collecting Action Figures" },
    { id: 42, name: "Collecting Comics" },
    { id: 43, name: "Model Building" },
    { id: 44, name: "DIY Projects" },
    { id: 45, name: "Woodworking" },
    { id: 46, name: "Metalworking" },
    { id: 47, name: "Electronics Projects" },
    { id: 48, name: "Robotics" },
    { id: 49, name: "Programming" },
    { id: 50, name: "Coding" },
  ]);
  const [newInterest, setNewInterest] = useState("");
  const [newInterestArr, setNewInterestArr] = useState([]);

  const [selectedInterest, setSelectedInterest] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedInterest);
    const userRef = doc(db, "users", currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      interest: selectedInterest,
    });
    navigate("/details/personality");
  };
  return (
    <div>
      <h1 className="font-livvic text-[36px]">Interest Section</h1>
      <p className="text-para my-3">Select at least 5 interest </p>
      <div className="flex w-full">
        <input
          type="text"
          value={newInterest}
          name="age"
          id="age"
          className="rounded-md bg-input-box h-[40px] px-2 w-full outline-none text-black"
          onChange={(e) => {
            setNewInterest(e.target.value);
          }}
        />
        <button
          className="bg-purple-light px-6 text-white py-2 rounded-md"
          onClick={() => {
            console.log(newInterest);
            setNewInterestArr((prev) => [
              {
                id: interest.length + 1 + 1 + newInterestArr.length + 1,
                name: newInterest,
              },
              ...prev,
            ]);
            setSelectedInterest((prev) => [...prev, newInterest]);
            setNewInterest("");
          }}
        >
          Add
        </button>
      </div>

      <form className="flex flex-col py-4 gap-4" onSubmit={handleSubmit}>
        <h1 className="text-[20px] ">Select your interest or hobbies </h1>

        <div className="flex flex-wrap gap-x-1 gap-y-2">
          {[newInterestArr, interest].map((arr) =>
            arr.map((skill) => (
              <span
                className={`cursor-pointer py-2 px-3 rounded-lg hover:bg-purple-light duration-200 ease-in-out hover:text-white ${
                  selectedInterest.includes(skill.name)
                    ? "bg-purple-light text-white"
                    : "bg-input"
                }`}
                key={skill.id}
                onClick={(e) => {
                  if (selectedInterest.includes(skill.name))
                    setSelectedInterest((prev) => {
                      return prev.filter((x) => {
                        if (x === skill.name) return false;
                        return true;
                      });
                    });
                  else setSelectedInterest((prev) => [...prev, skill.name]);
                }}
              >
                {skill.name}
              </span>
            ))
          )}
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
    </div>
  );
};

export default Interest;
