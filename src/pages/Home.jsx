import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config.js";
import Post from "../components/Post.jsx";
const Home = () => {
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    const getAllPost = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postArr = [];
      querySnapshot.forEach((doc) => {
        postArr.push(doc.data());
      });
      setAllPost(postArr.sort((a, b) => a.timestamp < b.timestamp));
    };
    getAllPost();
  }, []);

  return (
    <div className="flex-[2] h-screen overflow-y-scroll py-6 sm:px-5 text-white">
      <h1 className="text-2xl font-bold ">Home Feed</h1>

      {allPost.map((post) => (
        <Post post={post} ownerId={post?.owner} key={post.id} />
      ))}
    </div>
  );
};

export default Home;
