import React from "react";

import bubbles from "../assets/bubbles.mp4";
import bursting from "../assets/bursting.png";
import harmonious from "../assets/harmonious.png";
import serene from "../assets/serene.png";

import logo from "../assets/logo.png";

const Test = () => {
  return (
    <div className="h-full min-h-screen bg-gradient-to-b from-[#b9dcff] to-[#0080FF]">
      <div className="sticky top-0 z-50 bg-transparent">
        <img src={logo} className="w-[100px] mx-4" alt="" />
      </div>
      <div className="top-0 z-0 w-screen">
        <div className="mx-auto text-center flex flex-col justify-center text-white">
          <h1 className="text-7xl font-bubble">Psychometric Test</h1>
            <h2 className="text-2xl py-3 font-bold">
                Find your personality type
            </h2>
            <div className="my-20 grid grid-rows-none grid-cols-3">
                <div className="col-span-1">
                    <img className="w-[325px] mx-auto pb-5" src={bursting} alt="" />
                    <h1 className="font-bold text-2xl">Bursting Energiser</h1>
                </div>
                <div className="col-span-1">
                    <img className="w-[250px] mx-auto pb-5" src={harmonious} alt="" />
                    <h1 className="font-bold text-2xl mt-5">Harmonious Orb</h1>
                </div>
                <div className="col-span-1">
                    <img className="w-[250px] mx-auto pb-5" src={serene} alt="" />
                    <h1 className="font-bold text-2xl mt-5">Serene Floater</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
