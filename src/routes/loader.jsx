import { Link } from "react-router-dom";
import { useState } from "react";
import Background from "../images/love.webp";

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <div
          className="w-full h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "contain",
            overflow: "hidden",
          }}
        >
          {setTimeout(() => {
            setLoading(false);
          }, 1500)}
        </div>
      ) : (
        <div className="bg-red-200 w-full h-screen font-maven font-bold flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-3xl font-extrabold mb-8">
            Welcome to Onose's love calculator game
          </h1>

          <Link to="/calculator">
            <button className="w-32 h-9 border border-slate-50 rounded-md bg-transparent hover:bg-white hover:text-black">
              Play now
            </button>
          </Link>
        </div>
      )}
    </>
  );
};
