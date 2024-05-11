import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase.config";
import { doc, updateDoc } from "firebase/firestore";

const Skills = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React.js" },
    { id: 5, name: "Angular" },
    { id: 6, name: "Vue.js" },
    { id: 7, name: "Node.js" },
    { id: 8, name: "Express.js" },
    { id: 9, name: "MongoDB" },
    { id: 10, name: "SQL" },
    { id: 11, name: "Python" },
    { id: 12, name: "Java" },
    { id: 13, name: "C++" },
    { id: 14, name: "C#" },
    { id: 15, name: "Ruby" },
    { id: 16, name: "PHP" },
    { id: 17, name: "DevOps" },
    { id: 18, name: "Docker" },
    { id: 19, name: "Kubernetes" },
    { id: 20, name: "Jenkins" },
    { id: 21, name: "Git" },
    { id: 22, name: "GitHub" },
    { id: 23, name: "Agile Methodologies" },
    { id: 24, name: "Scrum" },
    { id: 25, name: "Kanban" },
    { id: 26, name: "AWS" },
    { id: 27, name: "Azure" },
    { id: 28, name: "Google Cloud Platform (GCP)" },
    { id: 29, name: "Linux" },
    { id: 30, name: "Unix" },
    { id: 31, name: "Shell Scripting" },
    { id: 32, name: "Networking" },
    { id: 33, name: "Cybersecurity" },
    { id: 34, name: "Data Analysis" },
    { id: 35, name: "Machine Learning" },
    { id: 36, name: "Artificial Intelligence" },
    { id: 37, name: "Big Data" },
    { id: 38, name: "Data Visualization" },
    { id: 39, name: "UI/UX Design" },
    { id: 40, name: "Graphic Design" },
    { id: 41, name: "Video Editing" },
    { id: 42, name: "Content Writing" },
    { id: 43, name: "Copywriting" },
    { id: 44, name: "Digital Marketing" },
    { id: 45, name: "Search Engine Optimization (SEO)" },
    { id: 46, name: "Social Media Management" },
    { id: 47, name: "Project Management" },
    { id: 48, name: "Leadership" },
    { id: 49, name: "Communication Skills" },
    { id: 50, name: "Problem Solving" },

    // Add more skills as needed
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [newSkillArr, setNewSkillArr] = useState([]);

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedSkills);
    const userRef = doc(db, "users", currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      skills: selectedSkills,
    });
    navigate("/details/interest");
  };
  return (
    <div>
      <h1 className="font-livvic text-[36px]">Skill Section</h1>
      <p className="text-para my-3">
        Select your skills related to your background at least 5{" "}
      </p>
      <div className="flex w-full">
        <input
          type="text"
          value={newSkill}
          name="age"
          id="age"
          className="rounded-md bg-input-box h-[40px] px-2 w-full outline-none text-black"
          placeholder="Enter your skill and press add"
          onChange={(e) => {
            setNewSkill(e.target.value);
          }}
        />
        <button
          className="bg-purple-light px-6 text-white py-2 rounded-md"
          onClick={() => {
            setNewSkillArr((prev) => [
              {
                id: skills.length + 1 + 1 + newSkillArr.length + 1,
                name: newSkill,
              },
              ...prev,
            ]);
            setSelectedSkills((prev) => [...prev, newSkill]);
            setNewSkill("");
          }}
        >
          Add
        </button>
      </div>

      <form className="flex flex-col py-4 gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-x-1 gap-y-2">
          {[newSkillArr, skills].map((arr) =>
            arr.map((skill) => (
              <span
                className={`cursor-pointer py-2 px-3 rounded-lg   hover:bg-purple-light duration-200 ease-in-out hover:text-white ${
                  selectedSkills.includes(skill.name)
                    ? "bg-purple-light text-white"
                    : "bg-input"
                }`}
                key={skill.id}
                onClick={(e) => {
                  if (selectedSkills.includes(skill.name))
                    setSelectedSkills((prev) => {
                      return prev.filter((x) => {
                        if (x === skill.name) return false;
                        return true;
                      });
                    });
                  else setSelectedSkills((prev) => [...prev, skill.name]);
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

export default Skills;
