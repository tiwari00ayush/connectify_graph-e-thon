import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const Message = ({ message }) => {
  const [isOwner, setIsOwner] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const date = new Date(message.date.seconds * 1000);
  const { currentUser } = useAuth();
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behaviour: "smooth" });
  }, [message]);
  useEffect(() => {
    const getSenderInfo = async () => {
      const docRef = doc(db, "users", message.senderID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserInfo(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
      }
    };
    getSenderInfo();
  }, []);
  useEffect(() => {
    if (message?.senderID === currentUser?.uid) {
      setIsOwner(true);
    } else setIsOwner(false);
  }, []);
  return (
    <div
      ref={ref}
      className={`flex py-2 items-start gap-4 ${
        isOwner ? "flex-row-reverse items-end" : ""
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          className="h-[40px] w-[40px] rounded-full object-cover"
          src={`${userInfo?.photoURL}`}
          alt="user image"
        />
        <p className="text-sm text-gray-500 text-center">
          {date.getHours()}:{date.getMinutes()}
        </p>
      </div>
      <div
        className={`flex flex-col ${
          isOwner ? "items-end" : "items-start"
        } gap-2`}
      >
        <p
          className={`px-2 text-white bg-input rounded-r-md rounded-b-md ${
            message?.message === "" ? "hidden" : ""
          }`}
        >
          <p className="text-green text-[0.8rem]">{userInfo?.displayName}</p>
          {message?.message}
        </p>
        <img
          src={`${message?.img ? message?.img : ""}`}
          alt="photo message"
          className={`${message?.img ? "w-[50%]" : "hidden"}`}
        />
      </div>
    </div>
  );
};

export default Message;
