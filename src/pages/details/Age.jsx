import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { db, storage } from "../../firebase.config";
import { degrees } from "./constants";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    country: "India",
  }),
  redirect: "follow",
};

const Age = () => {
  const { currentUser } = useAuth();
  const [stateList, setStateList] = useState([]);
  const [showDegree, setShowDegree] = useState([]);
  const [degree, setDegree] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getStates = async () => {
      const res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        requestOptions
      );
      const data = await res.json();
      setStateList(data.data.states);
    };
    getStates();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const age = e.target[0].value;
    const gender = e.target[1].value;
    const state = e.target[2].value;
    const college = e.target[3].value;
    const bio = e.target[4].value;
    const userRef = doc(db, "users", currentUser.uid);

    const timestamp = new Date().getTime(); // Get current timestamp
    const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string
    const fileName = `${currentUser.uid}_profile_${timestamp}_${randomString}.jpg`; // Constructing the unique file name
    const storageRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        setError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          try {
            await updateDoc(userRef, {
              age,
              gender,
              state,
              college,
              degree,
              photoURL: downloadURL,
              bio,
            });
            navigate("/details/skills");
          } catch (e) {
            setError(e);
          }
        });
      }
    );
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
  return (
    <div className="w-full px-2">
      <h1 className="font-livvic text-[36px]">About Section</h1>
      <p className="text-para">Tell us about yourself</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col py-10 mt-2 gap-4 items-start "
      >
        <div className="flex  items-stretch gap-2 justify-start w-full">
          <label
            htmlFor="age"
            className="font-livvic w-[200px] text-center border-[1px] bg-input-box text-black flex justify-center items-center rounded-md"
          >
            Age
          </label>
          <input
            required
            type="number"
            name="age"
            id="age"
            className="rounded-lg bg-input h-[40px] px-2 w-full outline-none"
          />
        </div>
        <div className="flex  items-stretch gap-2 justify-start w-full">
          <label
            htmlFor="sex"
            className="font-livvic w-[200px] text-center border-[1px] bg-input-box text-black flex justify-center items-center rounded-md"
          >
            Gender{" "}
          </label>
          <select
            required
            name="sex"
            id="sex"
            className="rounded-lg bg-input h-[40px] px-2 w-full outline-none"
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
            <option value="nottosay">prefer not to say</option>
          </select>
        </div>
        <div className="flex  items-stretch gap-2 justify-start w-full">
          <label
            htmlFor="state"
            className="font-livvic w-[200px] text-center border-[1px] bg-input-box text-black flex justify-center items-center rounded-md"
          >
            College State
          </label>
          <select
            name="state"
            id="state"
            className="rounded-lg bg-input h-[40px] px-2 w-full outline-none"
          >
            {stateList?.map((state, index) => (
              <option value={state.name} key={index}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex  items-stretch gap-2 justify-start w-full">
          <label
            htmlFor="age"
            className="font-livvic w-[200px] text-center border-[1px] bg-input-box text-black flex justify-center items-center rounded-md"
          >
            College name
          </label>
          <input
            required
            type="text"
            name="age"
            id="age"
            className="rounded-lg bg-input h-[40px] px-2 w-full outline-none"
          />
        </div>
        <div className="flex flex-col  items-stretch gap-2 justify-start w-full">
          <label
            htmlFor="bio"
            className="font-livvic w-full text-center border-[1px] bg-input-box text-black flex justify-center items-center rounded-md h-[40px]"
          >
            Bio
          </label>
          <textarea
            placeholder="Tell us about yourself"
            required
            type="text"
            name="bio"
            id="bio"
            className="rounded-lg bg-input h-[100px] px-2 w-full outline-none"
          />
        </div>
        <div className="flex  items-start gap-2 justify-start w-full ">
          <label
            htmlFor="degree"
            className="font-livvic w-[200px] text-center border-[1px] bg-input-box text-black flex justify-center items-center rounded-md py-2"
          >
            Degree
          </label>
          <div className="w-full">
            <input
              value={degree}
              required
              type="text"
              name="degree"
              id="degree"
              placeholder="B.TECH, MBBS, BBA, MCA"
              className="rounded-lg bg-input h-[40px] px-2 w-full outline-none "
              onChange={(e) => {
                handleInput(e);
              }}
            />
            <div
              className={`w-full max-h-[300px] overflow-y-scroll bg-input rounded-md ${
                showDegree.length == 0 ? "hidden" : "block"
              }`}
            >
              {showDegree?.map((degree) => (
                <p
                  key={degree.id}
                  className="py-2 px-2  hover:border-2 hover:border-white rounded-md"
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
        </div>
        <div className="flex items-stretch gap-2 justify-start w-full">
          <label
            htmlFor="profilePicture"
            className="font-livvic w-[200px] text-center border-[1px] bg-input-box text-black flex justify-center items-center rounded-md"
          >
            Profile Picture
          </label>
          <div className="relative bg-input w-full min-h-[100px] flex justify-center items-center rounded-md border-gray-400 border-2">
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt="selected img"
                className="w-full max-h-[100px] object-contain"
              />
            ) : (
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                id="profilePicture"
                required
              />
            )}
            {file && (
              <button
                onClick={() => setFile(null)}
                className="py-2 px-5 mx-1 bg-red my-2 rounded-md text-white absolute bottom-2 right-2"
              >
                Remove
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-row-reverse w-full">
          <button
            className="px-5 py-2 bg-purple-light rounded-md text-white mt-5"
            type="submit"
          >
            Next
          </button>
        </div>
        {error && (
          <p className="text-red text-center">
            Something went wrong, please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Age;
