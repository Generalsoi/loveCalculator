import React from "react";

export const Calculator = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-red-500">
      <div className="flex flex-col md:flex-row items-center text-white">
        <div className="flex flex-col gap-2">
          <label htmlFor="yourName">Your name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="soulMateName">Other name</label>
          <input type="text" placeholder="Enter the other name" />
        </div>
      </div>
    </div>
  );
};
