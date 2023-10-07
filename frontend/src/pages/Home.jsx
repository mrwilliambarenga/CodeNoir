import React from "react";

import bubbles from "../assets/bubbles.mp4";

const Home = () => {
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
      <div className="text-white relative z-10 max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="text-9xl font-bubble">Bubble</h1>
        <h2 className="text-2xl py-3 font-bold">Find your people. Find your bubble</h2>
        <a href="/signup" className="w-[200px] mx-auto">
          <button className="w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3 text-lg bg-[#ffffff] hover:bg-[#0080FF] text-black hover:text-white transition duration-300 ease-in-out">
            Sign Up
          </button>
        </a>
        <a href="/login" className="w-[200px] mx-auto">
          <button className="w-[200px] rounded-md font-bold mx-auto px-6 text-lg text-white hover:text-black transition duration-300 ease-in-out">
            Log in
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
