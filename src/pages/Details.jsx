import React, { useState } from "react";
import detail from "../assets/detail.jpg";
const Details = () => {
  const [educationBg, setEducationBg] = useState(null);
  const [skills, setSkills] = useState([]);
  return (
    <div className="w-full h-screen flex">
      <div className="flex-1  overflow-scroll h-screen px-[2%] py-[20px]">
        <h1 className="font-bold text-[25px] font-lilita ">
          Enter Your details
        </h1>
        <form action="" className="flex flex-col py-4 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="age" className="font-livvic">
              1. Enter your age :
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className="rounded-md bg-input-box h-[40px] px-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sex">2. Enter your sex :</label>
            <select
              name="sex"
              id="sex"
              className="rounded-md bg-input-box h-[40px] px-2"
            >
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
              <option value="nottosay">prefer not to say</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sex">
              3. What is your current education background?{" "}
              <span className="text-red">Only one</span>
            </label>
            {educationBg && (
              <span className="px-2 py-2 bg-primary-btn text-black">
                {educationBg}
              </span>
            )}
            <input
              type="text"
              className="rounded-md bg-input-box h-[40px] px-2"
              placeholder="B.TECH, MBBS, BBA,MBA"
              onChange={(e) => {
                setEducationBg(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sex">
              4. Enter your skills in your background?{" "}
              <span className="text-red">(seprated by space)</span>
            </label>
            {skills.length !== 0 &&
              skills.map((skill, index) => (
                <span className="px-2 py-2 bg-primary-btn text-black block">
                  {skill}
                </span>
              ))}
            <input
              type="text"
              className="rounded-md bg-input-box h-[40px] px-2"
              placeholder="C C++ JS React.js"
              onChange={(e) => {
                setSkills((prev) => [...prev, e.target.value]);
              }}
            />
          </div>
        </form>
      </div>
      <div className="flex-1 bg-purple-light flex justify-center items-center rounded-l-lg shadow-md shadow-black">
        <div className="w-[90%] h-[60%] bg-white rounded-full shadow-xl shadow-black">
          <img
            src={detail}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
