import React from "react";
import Recommend from "./Recommend";
import Artists from "./Artists";
import Playing from "./Playing";

const Landing = () => {
  return (
    <div className=" w-[99%]">
      <Recommend />
      <div className=" flex gap-5 flex-col md:flex-row">
        <div className=" md:w-[50%] w-full">
          <Artists />
        </div>
        <div className=" md:w-[50%] w-full md:h-48">
          <Playing />
        </div>
      </div>
    </div>
  );
};

export default Landing;
