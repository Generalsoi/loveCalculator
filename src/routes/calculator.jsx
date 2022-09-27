import React, { useState } from "react";
import axios from "axios";
import { HeartIcon } from "./../assets/hearticon";
import { Link } from "react-router-dom";
import { CalculateIcon } from "../assets/calculatorIcon";

export const Calculator = ({ createHistory }) => {
  const [userName, setUserName] = useState("");
  const [soulMate, setSoulMate] = useState("");
  const [compatibility, setCompatibility] = useState({
    message: "",
    result: 0,
  });

  const handleSubmit = (e) => {
    const url = "https://loverapi.herokuapp.com/api/v1/calculate";

    axios
      .get(url, {
        params: {
          personA: userName,
          personB: soulMate,
        },
      })
      .then((res) => {
        const { result, message } = res.data;
        setCompatibility({ result, message });

        createHistory({
          query: { name1: userName, name2: soulMate },
          result: { message, result },
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-screen flex flex-col  items-center justify-center bg-red-700 relative">
      <Link to="/history">
        <button className="w-fit h-8 flex items-center justify-center text-white text-sm p-2 border border-white rounded fixed top-4 right-4">
          View History
        </button>
      </Link>
      <div className="flex flex-col md:flex-row items-end text-white font-maven gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="yourName">First name</label>
          <input
            type="text"
            placeholder="Enter first name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="bg-transparent focus:bg-red-300 w-full md:w-60  p-2 border border-white focus:border-white rounded-lg"
          />
        </div>

        <div>
          <HeartIcon computedWidth={48} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="soulMateName">Second name</label>
          <input
            type="text"
            placeholder="Enter second name"
            value={soulMate}
            onChange={(e) => setSoulMate(e.target.value)}
            className="bg-transparent focus:bg-red-300 w-full md:w-60  p-2 border border-white focus:border-white rounded-lg"
          />
        </div>
      </div>

      <div onClick={handleSubmit} className="mt-12">
        <CalculateIcon computedWidth={48} />
      </div>

      {!!compatibility.message && (
        <div className="w-full text-center md:p-auto p-[10%] text-white text-xl font-maven">
          <h2 className="font-bold uppercase text-white ">Result</h2>
          <p className=" font-bold text-white text-xl mb-2">
            {compatibility.result < 50
              ? `Eyaaaaaa!!! Omo, your compatibility score is:  ${compatibility.result} oo`
              : `Awesome!!!! Your compatibility score is: ${compatibility.result}`}
          </p>

          <p className=" font-bold text-white text-2xl">
            {compatibility.message}
          </p>
        </div>
      )}
    </div>
  );
};
