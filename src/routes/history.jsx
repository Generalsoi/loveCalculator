import { HeartIcon } from "./../assets/hearticon";
import React from "react";
import { Link } from "react-router-dom";

export const History = ({ history }) => {
  return (
    <div className="bg-red-300 w-full h-screen  p-10 flex flex-col justify-start items-center font-maven relative">
      <Link to="/calculator">
        <button className="flex items-center justify-center w-fit h-8 p-2 border border-black rounded text-sm fixed top-4 left-4">
          Go back
        </button>
      </Link>
      <h1 className="font-bold text-3xl uppercase">History</h1>
      {history.map((content, index) => (
        <div
          key={index}
          className="border border-black rounded-lg p-3 md:p-6 w-full md:w-[60%] flex flex-col justify-center items-start mt-5"
        >
          <p className="flex gap-3 items-center mt-4">
            {content.query.name1} <HeartIcon /> {content.query.name2}
          </p>

          <p className="font-extrabold text-lg">{content.result.result}</p>

          <p>{content.result.message}</p>
        </div>
      ))}
    </div>
  );
};
