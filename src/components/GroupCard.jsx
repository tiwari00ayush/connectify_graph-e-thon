import React from "react";

const GroupCard = ({ name }) => {
  return (
    <div className="w-full flex items-center py-2 px-2 gap-2 hover:bg-input rounded-md">
      <img
        src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXB8ZW58MHx8MHx8fDA%3D"
        alt=""
        className="w-[60px] h-[60px] rounded-full"
      />
      <div className="flex flex-col flex-1">
        <h1 className="text-[1.2rem]">{name}</h1>
        <p className="text-para">kjbasd aksd</p>
      </div>
    </div>
  );
};

export default GroupCard;
