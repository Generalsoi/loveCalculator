import { HeartIcon } from "./../assets/hearticon";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const History = ({ history }) => {
  const [result, setResult] = useState(false);

  return (
    <div className="bg-red-300 w-full h-screen  p-10 flex flex-col justify-start items-center font-maven relative">
      <Link to="/calculator">
        <button className="flex items-center justify-center w-fit h-8 p-2 border border-black rounded text-sm fixed top-4 left-4">
          Go back
        </button>
      </Link>
      <h1 className="font-bold text-3xl uppercase">History</h1>
      {history.map((content) => (
        <div>
          <p className="flex gap-3 items-center mt-4">
            {content.query.name1} <HeartIcon /> {content.query.name2}
          </p>

          <p>{content.result.result}</p>

          <p>{content.result.message}</p>
        </div>
      ))}
    </div>
  );
};
