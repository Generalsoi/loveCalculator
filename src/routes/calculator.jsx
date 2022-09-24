import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";
import axios from "axios";

export const Calculator = () => {
  const [userName, setUserName] = useState("");
  const [soulMate, setSoulMate] = useState("");

  const handleSubmit = (e) => {
    // calling the api
    const url = "https://loverapi.herokuapp.com/api/v1/calculate";
    axios
      .get(url, {
        params: {
          personA: { userName },
          personB: { soulMate },
        },
      })
      .then((res) => console.log(res.data.message))
      .catch((err) => console.log(err));
    console.log(userName, soulMate);
  };

  return (
    <div className="w-full h-screen flex flex-col gap-12 items-center justify-center bg-red-700">
      <div className="flex flex-col md:flex-row items-center text-white font-maven gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="yourName">Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
            value={soulMate}
            onChange={(e) => setSoulMate(e.target.value)}
            className="bg-transparent focus:bg-red-300 w-full md:w-60  p-2 border border-white focus:border-white rounded-lg"
          />
        </div>
      </div>

      <div onClick={handleSubmit}>
        <BsCalculator className="w-16 h-16 text-white cursor-pointer hover:scale-125 transition-all duration-500" />
      </div>
    </div>
  );
};
