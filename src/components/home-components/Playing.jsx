import React from "react";
import weeknd from "../../assets/theWeekend.jpg";
import { AiFillPlayCircle,AiFillHeart } from "react-icons/ai";

const Playing = () => {
  return (
    <div className=" p-3 w-full">
      <h2 className=" text-[#fffffff1] font-semibold font-mono text-lg">
        Recent Playing
      </h2>
      <div className=" play-main pb-3 h-36 rounded-sm">
        <div className=" flex items-center justify-between bg-white/25 rounded-2xl mt-2 main gap-5 w-full">
          <div className=" flex items-center">
            <img src={weeknd} alt="" className=" w-12 h-12 rounded-xl" />
            <div className=" text-xs text-[#ffffff] font-semibold ps-3">
              <h2>The weekend</h2>
              <h2>die for you</h2>
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <button className=" text-xl text-[#757474] border border-[#ffffff] hover:bg-[#ffffff] px-1 py-1 rounded-lg flex items-center gap-1">
              <AiFillPlayCircle />
              <span className=" text-sm">Play</span>
            </button>
            <button className=" text-xl text-[#757474] border border-[#ffffff] hover:bg-[#ffffff] px-1 py-1 rounded-lg flex items-center gap-1">
              <AiFillHeart />
              <span className=" text-sm">Like</span>
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-between bg-white/25 rounded-2xl mt-2 main gap-5 w-full">
          <div className=" flex items-center">
            <img src={weeknd} alt="" className=" w-12 h-12 rounded-xl" />
            <div className=" text-xs text-[#ffffff] font-semibold ps-3">
              <h2>The weekend</h2>
              <h2>die for you</h2>
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <button className=" text-xl text-[#757474] border border-[#ffffff] hover:bg-[#ffffff] px-1 py-1 rounded-lg flex items-center gap-1">
              <AiFillPlayCircle />
              <span className=" text-sm">Play</span>
            </button>
            <button className=" text-xl text-[#757474] border border-[#ffffff] hover:bg-[#ffffff] px-1 py-1 rounded-lg flex items-center gap-1">
              <AiFillHeart />
              <span className=" text-sm">Like</span>
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-between bg-white/25 rounded-2xl mt-2 main gap-5 w-full">
          <div className=" flex items-center">
            <img src={weeknd} alt="" className=" w-12 h-12 rounded-xl" />
            <div className=" text-xs text-[#ffffff] font-semibold ps-3">
              <h2>The weekend</h2>
              <h2>die for you</h2>
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <button className=" text-xl text-[#757474] border border-[#ffffff] hover:bg-[#ffffff] px-1 py-1 rounded-lg flex items-center gap-1">
              <AiFillPlayCircle />
              <span className=" text-sm">Play</span>
            </button>
            <button className=" text-xl text-[#757474] border border-[#ffffff] hover:bg-[#ffffff] px-1 py-1 rounded-lg flex items-center gap-1">
              <AiFillHeart />
              <span className=" text-sm">Like</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playing;
