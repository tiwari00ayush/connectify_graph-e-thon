import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase.config";
var requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    country: "India", // Provide the country name
  }),
  redirect: "follow",
};

const Age = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const [stateList, setStateList] = useState([]);
  const [showDegree, setShowDegree] = useState([]);
  const [degree, setDegree] = useState("");
  const degrees = [
    { id: 1, name: "Bachelor of Technology (B.Tech)" },
    { id: 2, name: "Bachelor of Medicine and Bachelor of Surgery (MBBS)" },
    { id: 3, name: "Bachelor of Arts (B.A)" },
    { id: 4, name: "Bachelor of Science (B.Sc)" },
    { id: 5, name: "Bachelor of Commerce (B.Com)" },
    { id: 6, name: "Bachelor of Engineering (B.E)" },
    { id: 7, name: "Bachelor of Business Administration (BBA)" },
    { id: 8, name: "Bachelor of Computer Applications (BCA)" },
    { id: 9, name: "Bachelor of Pharmacy (B.Pharm)" },
    { id: 10, name: "Bachelor of Dental Surgery (BDS)" },
    { id: 11, name: "Master of Business Administration (MBA)" },
    { id: 12, name: "Master of Technology (M.Tech)" },
    { id: 13, name: "Master of Science (M.Sc)" },
    { id: 14, name: "Master of Arts (M.A)" },
    { id: 15, name: "Master of Commerce (M.Com)" },
    { id: 16, name: "Master of Computer Applications (MCA)" },
    { id: 17, name: "Master of Pharmacy (M.Pharm)" },
    { id: 18, name: "Doctor of Philosophy (Ph.D.)" },
    { id: 19, name: "Bachelor of Architecture (B.Arch)" },
    { id: 20, name: "Bachelor of Fine Arts (BFA)" },
    { id: 21, name: "Bachelor of Education (B.Ed)" },
    { id: 22, name: "Bachelor of Physical Education (B.P.Ed)" },
    { id: 23, name: "Bachelor of Hotel Management (BHM)" },
    { id: 24, name: "Bachelor of Journalism and Mass Communication (BJMC)" },
    { id: 25, name: "Bachelor of Design (B.Des)" },
    { id: 26, name: "Bachelor of Social Work (BSW)" },
    { id: 27, name: "Bachelor of Physiotherapy (BPT)" },
    { id: 28, name: "Bachelor of Occupational Therapy (BOT)" },
    { id: 29, name: "Bachelor of Ayurvedic Medicine and Surgery (BAMS)" },
    { id: 30, name: "Bachelor of Homeopathic Medicine and Surgery (BHMS)" },
    { id: 31, name: "Bachelor of Unani Medicine and Surgery (BUMS)" },
    { id: 32, name: "Bachelor of Science in Nursing (B.Sc Nursing)" },
    {
      id: 33,
      name: "Bachelor of Veterinary Science & Animal Husbandry (B.VSc AH)",
    },
    { id: 34, name: "Bachelor of Laws (LLB)" },
    { id: 35, name: "Bachelor of Arts + Bachelor of Laws (BA LLB)" },
    { id: 36, name: "Bachelor of Science + Bachelor of Laws (B.Sc LLB)" },
    {
      id: 37,
      name: "Bachelor of Business Administration + Bachelor of Laws (BBA LLB)",
    },
    { id: 38, name: "Bachelor of Commerce + Bachelor of Laws (B.Com LLB)" },
    {
      id: 39,
      name: "Bachelor of Technology + Master of Technology (B.Tech + M.Tech)",
    },
    { id: 40, name: "Bachelor of Science + Master of Science (B.Sc + M.Sc)" },
    { id: 41, name: "Bachelor of Arts + Master of Arts (B.A + M.A)" },
    {
      id: 42,
      name: "Bachelor of Commerce + Master of Commerce (B.Com + M.Com)",
    },
    {
      id: 43,
      name: "Bachelor of Engineering + Master of Business Administration (B.E + MBA)",
    },
    {
      id: 44,
      name: "Bachelor of Science + Master of Business Administration (B.Sc + MBA)",
    },
    { id: 45, name: "Bachelor of Science in Information Technology (B.Sc IT)" },
    { id: 46, name: "Bachelor of Science in Computer Science (B.Sc CS)" },
    {
      id: 47,
      name: "Bachelor of Science in Electronics and Communication Engineering (B.Sc ECE)",
    },
    {
      id: 48,
      name: "Bachelor of Science in Mechanical Engineering (B.Sc Mechanical)",
    },
    { id: 49, name: "Bachelor of Science in Civil Engineering (B.Sc Civil)" },
    {
      id: 50,
      name: "Bachelor of Science in Electrical Engineering (B.Sc Electrical)",
    },
    {
      id: 51,
      name: "Bachelor of Science in Aerospace Engineering (B.Sc Aerospace)",
    },
    {
      id: 52,
      name: "Bachelor of Science in Chemical Engineering (B.Sc Chemical)",
    },
    { id: 53, name: "Bachelor of Science in Biotechnology (B.Sc Biotech)" },
    { id: 54, name: "Bachelor of Science in Biochemistry (B.Sc Biochem)" },
    { id: 55, name: "Bachelor of Science in Microbiology (B.Sc Microbio)" },
    {
      id: 56,
      name: "Bachelor of Science in Environmental Science (B.Sc Environmental)",
    },
    { id: 57, name: "Bachelor of Science in Agriculture (B.Sc Agriculture)" },
    { id: 58, name: "Bachelor of Science in Horticulture (B.Sc Horticulture)" },
    { id: 59, name: "Bachelor of Science in Forestry (B.Sc Forestry)" },
    {
      id: 60,
      name: "Bachelor of Science in Fisheries Science (B.Sc Fisheries)",
    },
    { id: 61, name: "Bachelor of Science in Food Technology (B.Sc Food Tech)" },
    {
      id: 62,
      name: "Bachelor of Science in Dairy Technology (B.Sc Dairy Tech)",
    },
    { id: 63, name: "Bachelor of Science in Nursing (B.Sc Nursing)" },
    {
      id: 64,
      name: "Bachelor of Science in Physiotherapy (B.Sc Physiotherapy)",
    },
    {
      id: 65,
      name: "Bachelor of Science in Occupational Therapy (B.Sc Occupational Therapy)",
    },
    {
      id: 66,
      name: "Bachelor of Science in Medical Laboratory Technology (B.Sc MLT)",
    },
    {
      id: 67,
      name: "Bachelor of Science in Radiography and Imaging Technology (B.Sc Radiography)",
    },
    { id: 68, name: "Bachelor of Science in Optometry (B.Sc Optometry)" },
    {
      id: 69,
      name: "Bachelor of Science in Speech and Hearing (B.Sc Speech and Hearing)",
    },
    {
      id: 70,
      name: "Bachelor of Science in Nutrition and Dietetics (B.Sc Nutrition)",
    },
  ];
  const navigate = useNavigate();
  useEffect(() => {
    const getStates = async () => {
      const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        requestOptions
      );
      const data = await res.json();
      setStateList(data.data.states);
      console.log(data);
    };
    getStates();
  }, []);
  console.log(stateList);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const age = e.target[0].value;
    const gender = e.target[1].value;
    const state = e.target[2].value;
    const college = e.target[3].value;
    const userRef = doc(db, "users", currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
      age,
      gender,
      state,
      college,
      degree,
    });
    navigate("/details/skills");
  };

  const handleInput = (e) => {
    setDegree(e.target.value);
    const search = e.target.value;
    setShowDegree(
      degrees.filter((degree) => {
        if (degree.name.toLowerCase().includes(search.toLowerCase()))
          return true;
      })
    );
  };
  console.log(showDegree);
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col py-4 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="age" className="font-livvic">
            1. Enter your age :
          </label>
          <input
            required
            type="number"
            name="age"
            id="age"
            className="rounded-md bg-input-box h-[40px] px-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="sex">2. Enter your gender :</label>
          <select
            required
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
          <label htmlFor="state" className="font-livvic">
            3. Enter your College State :
          </label>
          <select
            name="state"
            id="state"
            className="rounded-md bg-input-box h-[40px] px-2"
          >
            {stateList?.map((state, index) => (
              <option value="state" key={index}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="age" className="font-livvic">
            4. Enter your College name :
          </label>
          <input
            required
            type="text"
            name="age"
            id="age"
            className="rounded-md bg-input-box h-[40px] px-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="degree" className="font-livvic">
            5. What is your current education background :
          </label>
          <input
            value={degree}
            required
            type="text"
            name="degree"
            id="degree"
            placeholder="B.TECH, MBBS, BBA, MCA"
            className="rounded-md bg-input-box h-[40px] px-2"
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <div
            className={`w-full border-2 border-black rounded-md ${
              showDegree.length == 0 ? "hidden" : ""
            }`}
          >
            {showDegree?.map((degree) => (
              <p
                key={degree.id}
                className="py-2 px-2 hover:bg-input-box"
                onClick={(e) => {
                  setDegree(degree.name);
                  setShowDegree([]);
                }}
              >
                {degree.name}{" "}
              </p>
            ))}
          </div>
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

export default Age;
