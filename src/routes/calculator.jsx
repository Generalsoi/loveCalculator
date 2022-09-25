import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { BsCalculator } from "react-icons/bs";
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
  // {query: { name1, name2 }, result: {message, result}}
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
    <div className="w-full h-screen flex flex-col gap-12 items-center justify-center bg-red-700">
      <Link to="/history">go to History</Link>
      <div className="flex flex-col md:flex-row items-center text-white font-maven gap-3">
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

      <div onClick={handleSubmit}>
        <CalculateIcon computedWidth={48} />
      </div>

      {!!compatibility.message && (
        <div>
          Here's your result:
          {compatibility.result}. <br />
          {compatibility.message}
        </div>
      )}
    </div>
  );
};
