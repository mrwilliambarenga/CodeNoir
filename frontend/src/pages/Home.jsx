import React, { useState } from "react";

import bubbles from "../assets/bubbles.mp4";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showHero, setShowHero] = useState(true);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
    setShowHero(false);
  };

  const handleShowSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
    setShowHero(false);
  };

  const handleShowHero = () => {
    setShowHero(true);
    setShowLogin(false);
    setShowSignUp(false);
  };

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
      <div
        className={
          showHero
            ? "fixed bottom-0 right-0 w-[100%] h-full ease-in-out duration-700"
            : "fixed bottom-[100%] right-0 w-[100%] h-full ease-in-out duration-700"
        }
        // If menu is toggled, display menu, else hide menu
      >
        <div className="text-white relative z-10 max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <h1 className="text-9xl font-bubble">Bubble</h1>
          <h2 className="text-2xl py-3 font-bold">
            Find your people. Find your bubble
          </h2>
          <button
            onClick={handleShowSignUp}
            className="w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3 text-lg bg-[#ffffff] hover:bg-[#0080FF] text-black hover:text-white transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
          <button
            onClick={handleShowLogin}
            className="w-[200px] rounded-md font-bold mx-auto px-6 text-lg text-white hover:text-black transition duration-300 ease-in-out"
          >
            Log In
          </button>
        </div>
      </div>
      <div
        className={
          showLogin
            ? "fixed right-0 bottom-0 w-[100%] h-full ease-in-out duration-700"
            : "fixed right-[100%] bottom-0 w-[100%] h-full ease-in-out duration-700"
        }
        // If login is toggled, display login, else hide login
      >
        <div className="text-white relative z-10 max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <h1 className="text-6xl font-bold drop-shadow-[0_5px_5px_rgb(112,183,254)]">
            Log In
          </h1>
          <div className="my-5 pt-5 flex flex-col items-center justify-between text-black">
            <input
              type="email"
              className="bg-white w-[45rem] rounded-full py-4 px-2 text-center font-bold my-5"
              placeholder="Email"
            />
            <input
              type="password"
              className="bg-white w-[45rem] rounded-full py-4 px-2 text-center font-bold my-5"
              placeholder="Password"
            />
            <div className="flex flex-row justify-center items-center">
              <input size="medium" type="checkbox" />
              <p className="text-lg ml-2 text-white font-bold">Remember me</p>
            </div>
            <a href="/landing">
              <button className="w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3 text-lg bg-[#0080FF] hover:bg-[#4cfcff] text-white hover:text-black transition duration-300 ease-in-out">
                Sign In
              </button>
            </a>
            <div className="flex flex-row justify-center items-center text-center mt-4">
              <p className="font-bold">Don't have an account?</p>
              <button
                onClick={handleShowSignUp}
                className="w-[200px] rounded-md font-bold mx-auto px-6 text-lg text-white hover:text-black transition duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          showSignUp
            ? "fixed left-0 bottom-0 w-[100%] h-full ease-in-out duration-700"
            : "fixed left-[100%] bottom-0 w-[100%] h-full ease-in-out duration-700"
        }
        // If signup is toggled, display signup, else hide signup
      >
        <div className="text-white relative z-10 max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <h1 className="text-6xl font-bold drop-shadow-[0_5px_5px_rgb(112,183,254)]">
            Sign Up
          </h1>
          <div className="my-5 pt-5 flex flex-col items-center justify-between text-black">
            <input
              type="text"
              className="bg-white w-[45rem] rounded-full py-4 px-2 text-center font-bold mt-3 mb-3"
              placeholder="First Name"
            />
            <input
              type="text"
              className="bg-white w-[45rem] rounded-full py-4 px-2 text-center font-bold my-3"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="bg-white w-[45rem] rounded-full py-4 px-2 text-center font-bold my-3"
              placeholder="Email"
            />
            <input
              type="password"
              className="bg-white w-[45rem] rounded-full py-4 px-2 text-center font-bold mt-3 mb-3"
              placeholder="Password"
            />
            <a href="/landing">
              <button className="w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3 text-lg bg-[#0080FF] hover:bg-[#4cfcff] text-white hover:text-black transition duration-300 ease-in-out">
                Register
              </button>
            </a>
            <div className="flex flex-row justify-center text-center items-center">
              <p className="font-bold">Already have an account?</p>
              <button
                onClick={handleShowLogin}
                className="w-[200px] rounded-md font-bold mx-auto px-6 text-lg text-white hover:text-black transition duration-300 ease-in-out"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
