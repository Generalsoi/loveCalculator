import React from "react";
import { FaHeart } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";

export const Calculator = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-12 items-center justify-center bg-red-700">
      <div className="flex flex-col md:flex-row items-center text-white font-maven gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="yourName">Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-transparent focus:bg-red-300 w-full md:w-60  p-2 border border-white focus:border-white rounded-lg"
          />
        </div>

        <div>
          <FaHeart className="w-12 h-12 hover:scale-110 hover:transition-all hover:duration-300" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="soulMateName">Other name</label>
          <input
            type="text"
            placeholder="Enter the other name"
            className="bg-transparent focus:bg-red-300 w-full md:w-60  p-2 border border-white focus:border-white rounded-lg"
          />
        </div>
      </div>

      <div>
        <BsCalculator className="w-16 h-16 text-white cursor-pointer hover:scale-125 transition-all duration-500" />
      </div>
    </div>
  );
};
