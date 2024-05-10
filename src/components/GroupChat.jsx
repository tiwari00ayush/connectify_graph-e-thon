import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../components";
import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase.config";
import { IoIosCloseCircle } from "react-icons/io";
import GroupDetails from "./GroupDetails";
const GroupChat = ({ group }) => {
  const { currentUser } = useAuth();
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const sendMessage = async () => {
    setText("");
    setLoading(true);
    const pack = {
      message: text,
      date: Timestamp.now(),
      senderID: currentUser.uid,
      id: uuid(),
    };
    try {
      await updateDoc(doc(db, "groups", group.id), {
        messages: arrayUnion(pack),
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="relative flex-1 grid grid-rows-[80px_1fr_60px] overflow-scroll">
      <GroupDetails
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        group={group}
      />
      <div className="px-2 py-2 flex justify-between items-center bg-purple-light">
        <div className="flex gap-2 items-center">
          <img
            src={group?.groupPhoto}
            alt="photo"
            className="w-[60px] h-[60px] rounded-full"
          />
          <h1>{group?.name}</h1>
        </div>
        <button
          className="px-2 py-2 bg-input text-white rounded-md"
          onClick={() => {
            setShowDetails(true);
          }}
        >
          Details
        </button>
      </div>
      <div className=" overflow-y-scroll text-white px-2">
        {group?.messages.length !== 0 &&
          group?.messages?.map((message) => <Message message={message} />)}
      </div>
      <div className="h-[50px] w-full flex px-2">
        <input
          type="text"
          className="flex-1 h-ful rounded-md text-white px-2 outline-none bg-input"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          disabled={loading}
          className={`text-white px-5 rounded-md ${
            loading ? "bg-red" : "bg-purple-light"
          }`}
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default GroupChat;
