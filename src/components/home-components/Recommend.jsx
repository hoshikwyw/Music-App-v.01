import React from "react";
import weekend from "../../assets/theWeekend.jpg"
import {FaPlay} from "react-icons/fa"

const Recommend = () => {
  return (
    <div className=" p-5">
      <h2 className=" text-[#fffffff1] font-semibold font-mono text-lg">Top Recommendation</h2>
      <div className=" bg-white/25 rounded-2xl mt-1 p-3">
        <div className=" relative group w-fit">
            <img src={weekend} alt="" className=" w-24 rounded-md" />
            <button className=" absolute top-[28%] left-7 text-[#fffffff1] bg-slate-400 px-3 py-3 rounded-full invisible group-hover:visible"><FaPlay /></button>
            <h2 className=" text-sm text-[#ffffff] font-semibold">The Weekend</h2>
            <h2 className=" text-xs text-[#ffffff] font-semibold">Die for You</h2>
        </div>
      </div>
      
    </div>
  );
};
export default Recommend;
