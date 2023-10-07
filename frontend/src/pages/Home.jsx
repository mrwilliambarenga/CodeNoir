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
      <div className="text-white relative z-10 max-w-[800px] w-full md:h-[35rem] sm:h-[30rem] h-[25rem] mx-auto text-center flex flex-col justify-center">
        <h1 className="text-9xl">
          bubble
        </h1>
        <h2 className="text-2xl py-5">
            find your bubble
        </h2>
        
      </div>
    </div>
  );
};

export default Home;
