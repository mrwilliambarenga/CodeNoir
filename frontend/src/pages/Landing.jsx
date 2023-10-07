import React from "react";

const Landing = () => {
  return (
    <div className="h-screen text-black">
      <div className="grid grid-rows-none grid-cols-3">
        <div className="col-span-2">
          <div className="text-white relative z-10 max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <h1 className="text-5xl pb-20 font-bold">
              Take your Psychometric Test
            </h1>
            <div className="text-left">
              <h2 className="text-2xl py-2">
                Find out your own personality type
              </h2>
              <h2 className="text-2xl py-2">
                Be personally matched with societies and likeminded students at
                your university
              </h2>
              <h2 className="text-2xl py-2">Find your bubble</h2>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <a
            href="/signup"
            className="max-w-[800px] w-[200px] h-screen mx-auto text-center flex flex-col justify-center"
          >
            <button className="text-center rounded-md font-bold my-6 mx-auto px-16 py-6 text-5xl bg-[#ffffff] hover:bg-[#0080FF] text-black hover:text-white transition duration-300 ease-in-out">
              Begin
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
