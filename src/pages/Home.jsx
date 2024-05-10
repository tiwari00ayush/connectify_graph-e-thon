import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config.js";
const Home = () => {
  // const allPost = [
  //   {
  //     location: "ABES EC",
  //     caption: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  //     tags: ["a", "b"],
  //     fileUrl: "https://www.pacegallery.com/media/images/16_9-2.width-2000.png",
  //   },
  // ];
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    const getAllPost = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postArr = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        postArr.push(doc.data());
      });
      setAllPost(postArr);
    };
    getAllPost();
  });
  const owner = {
    uid: "123",
    photoURL: "https://www.pacegallery.com/media/images/16_9-2.width-2000.png",
  };
  return (
    <div className="flex-[2] h-screen overflow-y-scroll py-6 sm:px-5 text-white">
      <h1 className="text-2xl font-bold ">Home Feed</h1>

      {allPost.map((post) => (
        <div className="my-10 flex flex-col">
          <div className="flex items-center gap-2">
            <Link to={`/profile/${owner?.uid}`}>
              <img
                src={owner?.photoURL}
                alt="dp"
                className="w-[40px] h-[40px] rounded-full"
              />
            </Link>
            <div className="flex flex-col justify-start">
              <h1 className="font-bold text-[1.1rem]">Ayush tiwari</h1>
              <div className="flex text-gray-400 text-[0.8rem] items-center flex-wrap">
                {/* <p>
                  {date.getDate()}-{date.getMonth()}-{date.getFullYear()},{" "}
                  {date.getHours()}:{date.getMinutes()}
                </p> */}
                <p className="mx-1">{post?.location}</p>
              </div>
            </div>
          </div>
          <p className="my-2">{post?.caption}</p>
          <div className="flex gap-1 flex-wrap text-gray-400 my-1">
            {post?.tags.map((tag, index) => (
              <span key={index}>#{tag}</span>
            ))}
          </div>
          <img
            src={post?.fileUrl}
            alt="post photo"
            className="rounded-md my-2"
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">like</div>
            save
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
