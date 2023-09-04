import React from "react";
import Recommend from "./Recommend";
import Artists from "./Artists";
import Playing from "./Playing";

const Landing = () => {
  return (
    <div className=" w-[99%]">
      <Recommend />
      <div className=" flex gap-5">
        <div className=" w-[60%]">
          <Artists />
        </div>
        <div className=" w-[40%] h-48">
          <Playing />
        </div>
      </div>
    </div>
  );
};

export default Landing;
