import React, { useState, useEffect } from "react";

import RiseLoader from "react-spinners/RiseLoader";

import bubbles from "../assets/bubbles.mp4";
import serene from "../assets/serene.png";

const ResultsS = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div>
      <div className="absolute z-0 top-0 w-full h-full">
        <video
          className="object-cover w-[100%] h-[100%]"
          src={bubbles}
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="relative z-10 h-screen w-screen bg-gradient-to-b from-[#b9dcff]/70 to-[#0080FF]/70">
        {loading ? (
          <div className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center">
            <RiseLoader size={50} color={"#ffffff"} loading={loading} />
            <h1 className="text-white font-bold text-4xl mt-16">
              Fetching Results...
            </h1>
          </div>
        ) : (
          <div className="text-white relative z-10 w-full h-screen mx-auto text-center flex flex-col justify-center">
            <h2 className="text-2xl py-3 font-bold">You are a</h2>
            <div className="grid grid-rows-none grid-cols-2">
              <div className="grid grid-cols-none grid-rows-2">
                <p className="font-bold text-9xl ml-40">Serene Floater</p>
                <div className="flex flex-col">
                  <p className="mt-12 font-bold text-xl text-left ml-40 flex flex-row">
                    Traits: {" "}
                    <p className="font-normal ml-2">
                      The quality to stay calm and composed everywhere
                    </p>
                  </p>
                  <p className="mt-12 font-bold text-xl text-left ml-40 flex flex-row">
                    Society Types: {" "}
                    <p className="font-normal ml-2">
                      Book Clubs and Meditation Societies
                    </p>
                  </p>
                </div>
              </div>
              <img className="ml-60 mt-32" src={serene} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsS;
