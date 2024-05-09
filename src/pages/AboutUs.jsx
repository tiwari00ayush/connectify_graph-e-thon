import React from "react";
import { Navbar } from "../components";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
const AboutUs = () => {
  return (
    <div className="bg-purple-light text-white font-lilita h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 px-[2%] py-[2%] bg-secondary-btn">
        <h1 className="text-[34px] font-lilita">ABOUT US</h1>
        <div className="flex justify-center md:justify-between items-stretch flex-wrap my-[50px] gap-y-10">
          <div className="flex flex-col max-w-[400px]">
            <div className="h-[200px] w-full bg-primary-btn rounded-md overflow-hidden">
              <img src={about1} alt="" />
            </div>
            <h1 className="text-[55px] font-livvic font-bold leading-[47px] my-6">
              Why connectify matters{" "}
            </h1>
            <p className="font-livvic font-thin text-[1.2rem]">
              Connectify matters as it combats social isolation, prioritizes
              quality interactions, build communities ,enhance well-being,
              fosters real-world connections, promotes positivity, and and
              ensures safety in offline interactions.
            </p>
          </div>
          <div className="flex flex-col max-w-[400px]">
            <div className="h-[200px] w-full bg-primary-btn rounded-md">
              <img src={about2} alt="" />
            </div>
            <h1 className="text-[55px] font-livvic font-bold leading-[47px] my-6">
              How connectify Works
            </h1>
            <p className="font-livvic font-thin text-[1.2rem]">
              Connectify matches users based on interests, create groups,
              coordinate meetups, verifies identities, encourage discussions,
              and offers incentives for meaningful interactions.
            </p>
          </div>
          <div className="flex flex-col max-w-[400px]">
            <div className="h-[200px] w-full bg-primary-btn rounded-md">
              <img src={about3} alt="" />
            </div>
            <h1 className="text-[55px] font-livvic font-bold leading-[47px] my-6">
              What connectify Values
            </h1>
            <p className="font-livvic font-thin text-[1.2rem]">
              Connectify values the magic of serendipitous connections,
              celebrating diversity, fostering empathy, and nurturing a culture
              of genuine understanding and shared experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
