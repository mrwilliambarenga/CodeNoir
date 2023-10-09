import React, { useState } from "react";

import bubbles from "../assets/bubbles.mp4";
import bursting from "../assets/bursting.png";
import harmonious from "../assets/harmonious.png";
import serene from "../assets/serene.png";

import logo from "../assets/logo.png";

const questions = [
  "I am comfortable meeting new people",
  "I enjoy solving complex problems",
  "I prefer working in a team rather than alone",
  // Add more questions...
];

const Test = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Handle the submission of answers, e.g., send to server or analyze locally.
    console.log("Submitted Answers:", answers);
  };

  return (
    <div className="h-full min-h-screen bg-gradient-to-b from-[#b9dcff] to-[#0080FF]">
      <div className="sticky top-0 z-50 bg-transparent">
        <img src={logo} className="w-[100px] mx-4" alt="" />
      </div>
      <div className="top-0 z-0 w-screen">
        <div className="mx-auto text-center flex flex-col justify-center text-white">
          <h1 className="text-7xl font-bubble">Psychometric Test</h1>
          <h2 className="text-2xl py-3 font-bold">
            8 Questions to Find your Personality Type
          </h2>
          <div className="my-20 grid grid-rows-none grid-cols-3 font-bold text-xl">
            <div className="col-span-1 scale-75 hover:scale-100 text-white/0 hover:text-white transition duration-300 ease-in-out">
              <img className="w-[200px] mx-auto pb-5" src={bursting} alt="" />
              <p className="mr-14">Bursting Energiser</p>
            </div>
            <div className="col-span-1 scale-75 hover:scale-100 text-white/0 hover:text-white transition duration-300 ease-in-out">
              <img className="w-[150px] mx-auto pb-5" src={harmonious} alt="" />
              <p className="mr-4">Harmonious Orb</p>
            </div>
            <div className="col-span-1 scale-75 hover:scale-100 text-white/0 hover:text-white transition duration-300 ease-in-out">
              <img className="w-[150px] mx-auto pb-5" src={serene} alt="" />
              <p className="mr-4">Serene Floater</p>
            </div>
          </div>
          <div>
            <form>
              {questions.map((question, index) => (
                <div key={index} className="mb-4 items-center">
                  <p className="mb-10 text-3xl font-bold">{question}</p>
                  <div className="flex flex-row justify-between mx-16 mb-20 p-8 rounded-md bg-slate-600/30 font-bold">
                    <label className="flex flex-col gap-2">
                      <input
                        type="radio"
                        name={`question${index}`}
                        value="agree"
                        onChange={() =>
                          handleAnswerChange(index, "agree")
                        }
                      />
                      Agree
                    </label>
                    <label className="flex flex-col gap-2">
                      <input
                        type="radio"
                        name={`question${index}`}
                        value="slightly agree"
                        onChange={() => handleAnswerChange(index, "slightly agree")}
                      />
                      Slightly Agree
                    </label>
                    <label className="flex flex-col gap-2">
                      <input
                        type="radio"
                        name={`question${index}`}
                        value="neutral"
                        onChange={() => handleAnswerChange(index, "neutral")}
                      />
                      Neutral
                    </label>
                    <label className="flex flex-col gap-2">
                      <input
                        type="radio"
                        name={`question${index}`}
                        value="slightly disagree"
                        onChange={() => handleAnswerChange(index, "slightly disagree")}
                      />
                      Slightly Disagree
                    </label>
                    <label className="flex flex-col gap-2">
                      <input
                        type="radio"
                        name={`question${index}`}
                        value="disagree"
                        onChange={() =>
                          handleAnswerChange(index, "disagree")
                        }
                      />
                      Disagree
                    </label>
                  </div>
                </div>
              ))}
            </form>
            <div className="mb-20">
                <button className="flex flex-row gap-1 w-auto rounded-md font-bold my-6 mx-auto px-6 py-3 text-lg bg-white hover:bg-[#4cfcff] text-[#0080FF] hover:text-white transition duration-300 ease-in-out">
                  <a href="/results/b">Go</a> <a href="/results/h">To</a> <a href="/results/s">Results</a>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
