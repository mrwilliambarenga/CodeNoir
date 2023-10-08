import React from "react";

import Typed from "react-typed";

import jigsaw from "../assets/jigsaw.png";
import uni from "../assets/uni.png";

const Landing = () => {
  return (
    <div className="h-screen text-white bg-gradient-to-b from-[#b9dcff] to-[#0080FF]">
      <div className="grid grid-rows-none grid-cols-3">
        <div className="col-span-2">
          <div className="text-white relative z-10 max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <h1 className="text-5xl pb-5 font-bold drop-shadow-[0_5px_5px_rgb(100,177,253)]">
              Take your
            </h1>
            <h1 className="text-7xl pb-14 font-bubble drop-shadow-[0_5px_5px_rgb(100,177,253)]">
              Psychometric Test
            </h1>
            <div className="grid grid-rows-none grid-cols-3">
              <div className="col-span-2 flex flex-col justify-center">
                <h2 className="text-3xl py-4 font-semibold">
                  Find your personality type
                </h2>
                <div className="flex justify-center items-center self-center my-5">
                  <h2 className="text-3xl py-10 mr-2 font-semibold">
                    Match with 
                  </h2>
                  <Typed
                    className="text-3xl py-10 font-bold"
                    strings={[
                      "uni societies",
                      "friends",
                      "events",
                      "clubs",
                      "teams",
                      "students",
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                  />
                </div>
                <h2 className="text-3xl py-4 font-semibold">
                  Find your bubble
                </h2>
              </div>
              <div className="col-span-1">
                <img className="w-[250px] mx-auto pb-5" src={jigsaw} alt="" />
                <img className="w-[250px] mx-auto pt-5" src={uni} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <a
            href="/test"
            className="max-w-[800px] w-[200px] h-screen ml-14 text-center flex flex-col justify-center"
          >
            <button className="text-center rounded-md font-bold mx-auto my-6 px-16 py-6 text-5xl bg-[#ffffff] hover:bg-[#0080FF] text-black hover:text-white transition duration-300 ease-in-out drop-shadow-[0_5px_5px_rgb(100,177,253)]">
              Begin
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
