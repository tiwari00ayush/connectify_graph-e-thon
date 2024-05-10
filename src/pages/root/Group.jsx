import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import GroupCard from "../../components/GroupCard";

const Group = () => {
  const { currentUser } = useAuth();
  const [available, setAvailable] = useState();
  const [group, setGroup] = useState(null);
  useEffect(() => {
    setAvailable(currentUser?.available);
  }, [currentUser]);
  useEffect(() => {
    const getGroup = async () => {
      const docRef = doc(db, "groups", currentUser?.groupId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setGroup(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
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
    <div className="text-white ">
      <div className="w-[300px] h-screen overflow-y-scroll border-r-2 border-input pr-2">
        {currentUser.groupStatus ? (
          <div className="flex gap-2 py-2 *:items-center text-[1.2rem] border-b-input border-b-[1px]">
            <h1>You are in a group </h1>
            {group && <p> {group.name} </p>}
          </div>
        ) : (
          <div className="py-2 flex justify-between items-center text-[1.2rem]">
            Available{" "}
            <span
              className={`${
                available ? "bg-green" : "bg-red"
              } px-3 py-3 rounded-full cursor-pointer`}
              onClick={updateAvailablity}
            ></span>
          </div>
        )}

        <div>
          <div>
            <h1 className="text-[1.3rem] mb-3">Current Group : </h1>
            <GroupCard name={group?.name} />
          </div>
          <div>
            <h1 className="text-[1.3rem] mb-3">Past Group : </h1>
            <GroupCard name={"abcd"} />
            <GroupCard name={"abcd"} />
            <GroupCard name={"abcd"} />
            <GroupCard name={"abcd"} />
            <GroupCard name={"abcd"} />
            <GroupCard name={"abcd"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
