import React from "react";
import weekend from "../../assets/theWeekend.jpg";
import { FaPlay } from "react-icons/fa";
import "./recommend.css"

const Recommend = () => {
  return (
    <div className=" p-3">
      <h2 className=" text-[#fffffff1] font-semibold font-mono text-lg">
        Top Recommendation
      </h2>
      <div className=" bg-white/25 rounded-2xl mt-1 p-3 main flex gap-5">
        <div className=" relative group w-fit inner">
          <img src={weekend} alt="" className=" w-20 rounded-lg" />
          <button className=" absolute top-[22%] left-5 text-[#fffffff1] bg-slate-400 px-3 py-3 rounded-full invisible group-hover:visible">
            <FaPlay />
          </button>
          <h2 className=" text-sm text-[#ffffff] font-semibold">The Weekend</h2>
          <h2 className=" text-xs text-[#ffffff] font-semibold">Die for You</h2>
        </div>
        <div className=" relative group w-fit inner">
          <img src={weekend} alt="" className=" w-20 rounded-lg" />
          <button className=" absolute top-[22%] left-5 text-[#fffffff1] bg-slate-400 px-3 py-3 rounded-full invisible group-hover:visible">
            <FaPlay />
          </button>
          <h2 className=" text-sm text-[#ffffff] font-semibold">The Weekend</h2>
          <h2 className=" text-xs text-[#ffffff] font-semibold">Die for You</h2>
        </div>
        <div className=" relative group w-fit inner">
          <img src={weekend} alt="" className=" w-20 rounded-lg" />
          <button className=" absolute top-[22%] left-5 text-[#fffffff1] bg-slate-400 px-3 py-3 rounded-full invisible group-hover:visible">
            <FaPlay />
          </button>
          <h2 className=" text-sm text-[#ffffff] font-semibold">The Weekend</h2>
          <h2 className=" text-xs text-[#ffffff] font-semibold">Die for You</h2>
        </div>
        <div className=" relative group w-fit inner">
          <img src={weekend} alt="" className=" w-20 rounded-lg" />
          <button className=" absolute top-[22%] left-5 text-[#fffffff1] bg-slate-400 px-3 py-3 rounded-full invisible group-hover:visible">
            <FaPlay />
          </button>
          <h2 className=" text-sm text-[#ffffff] font-semibold">The Weekend</h2>
          <h2 className=" text-xs text-[#ffffff] font-semibold">Die for You</h2>
        </div>
        <div className=" relative group w-fit inner">
          <img src={weekend} alt="" className=" w-20 rounded-lg" />
          <button className=" absolute top-[22%] left-5 text-[#fffffff1] bg-slate-400 px-3 py-3 rounded-full invisible group-hover:visible">
            <FaPlay />
          </button>
          <h2 className=" text-sm text-[#ffffff] font-semibold">The Weekend</h2>
          <h2 className=" text-xs text-[#ffffff] font-semibold">Die for You</h2>
        </div>
      </div>
    </div>
  );
};
export default Recommend;
