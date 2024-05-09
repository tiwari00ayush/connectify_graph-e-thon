import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const ProfileLinks = () => {
  const { currentUser } = useAuth();
  const instagram = currentUser?.socialHandles.instagram;
  const linkedin = currentUser?.socialHandles.linkedin;
  const twitter = currentUser?.socialHandles.twitter;
  return (
    <div className="px-10 py-2 flex flex-col gap-4">
      <h1 className="text-[1.4rem] font-semibold">Social Media handles</h1>
      <Link to={instagram} className="flex items-center gap-2 w-full">
        <img
          className="h-[80px] w-[80px] rounded-md"
          src="https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147823814.jpg"
          alt=""
        />
        <input
          readOnly
          type="text"
          value={instagram}
          className="rounded-md bg-input-box h-[40px] px-2 w-full"
        />
      </Link>
      <Link to={linkedin} className="flex items-center gap-2 w-full">
        <img
          className="h-[80px] w-[80px] rounded-md"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
          alt=""
        />
        <input
          readOnly
          type="text"
          value={linkedin}
          className="rounded-md bg-input-box h-[40px] px-2 w-full "
        />
      </Link>
      <Link to={twitter} className="flex items-center gap-2 w-full">
        <img
          className="h-[80px] w-[80px] rounded-md"
          src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230724104554.jpg"
          alt=""
        />
        <input
          readOnly
          type="text"
          value={twitter}
          className="rounded-md bg-input-box h-[40px] px-2 w-full"
        />
      </Link>
    </div>
  );
};

export default ProfileLinks;
