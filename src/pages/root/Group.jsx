import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase.config";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import GroupCard from "../../components/GroupCard";
import GroupChat from "../../components/GroupChat";

const Group = () => {
  const { currentUser } = useAuth();
  const [lastMessage, setLastMessage] = useState("");
  const [available, setAvailable] = useState();
  const [group, setGroup] = useState(null);
  useEffect(() => {
    setAvailable(currentUser?.available);
  }, [currentUser]);
  useEffect(() => {
    const getGroup = async () => {
      const docRef = doc(db, "groups", currentUser?.groupId);
      const unsub = onSnapshot(docRef, (doc) => {
        setGroup({ id: doc.id, ...doc.data() });
      });
      return () => {
        unsub();
      };
      // const docSnap = await getDoc(docRef);
      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      // } else {
      //   // docSnap.data() will be undefined in this case
      //   console.log("No such document!");
      // }
    };

    if (currentUser?.groupStatus) {
      getGroup();
    }
  }, [currentUser?.groupStatus]);
  const updateAvailablity = async () => {
    const userRef = doc(db, "users", currentUser.uid);

    await updateDoc(userRef, {
      available: !currentUser?.available,
    });
  };
  return (
    <div className="text-white flex h-screen overflow-y-scroll">
      <div className="w-[300px]  border-r-2 border-input px-2">
        {currentUser?.groupStatus ? (
          <h1 className="text-center text-[1.6rem] py-3 bg-purple-light h-[80px] flex justify-center items-center mb-4">
            Groups
          </h1>
        ) : (
          <div>
            <div className="py-2 flex justify-between items-center text-[1.2rem]">
              Available{" "}
              <span
                className={`${
                  available ? "bg-green" : "bg-red"
                } px-3 py-3 rounded-full cursor-pointer`}
                onClick={updateAvailablity}
              ></span>
            </div>
            <p>Click on red button to join new group</p>
            {currentUser?.groupStatus === false &&
              currentUser?.available === true && <p>Wait for some time</p>}
          </div>
        )}

        <div>
          <div>
            {group && (
              <GroupCard
                name={group?.name}
                lastMessage={
                  group?.messages[group?.messages.length - 1]?.message
                }
              />
            )}
          </div>
        </div>
      </div>

      {group && <GroupChat group={group} />}
    </div>
  );
};

export default Group;
