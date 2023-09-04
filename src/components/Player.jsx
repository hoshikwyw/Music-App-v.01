import { space } from "postcss/lib/list";
import React, { useState } from "react";
import {
  PiCaretDoubleLeftFill,
  PiCaretDoubleRightFill,
  PiPlayFill,
  PiPauseFill,
  PiHeartStraightFill,
  PiShareFatFill,PiDownloadFill
} from "react-icons/pi";
import weeknd from "../assets/theWeekend.jpg";

const Player = () => {
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    setPlay(!play);
  };
  return (
    <div className=" backdrop-blur-sm bg-white/40 px-3 rounded-3xl py-1 flex items-center justify-between">
      <div className=" flex items-center bg-black/20 px-5 py-1 rounded-3xl justify-between w-[80%]">
        <div className=" flex items-center">
          <img src={weeknd} alt="" className=" w-10 h-10 rounded-full" />
          <div className=" text-xs text-[#ffffff] font-semibold ps-3">
            <h2>The Weeknd</h2>
            <h2>Die for you</h2>
          </div>
        </div>
          <div className=" text-lg text-[#4e4e4e] flex gap-3 items-center">
            <button>
              <PiCaretDoubleLeftFill />
            </button>
            <button className={`p-2 rounded-full`} onClick={handlePlay}>
              {play ? (
                <span>
                  <PiPlayFill />
                </span>
              ) : (
                <span>
                  <PiPauseFill />
                </span>
              )}
            </button>
            <button>
              <PiCaretDoubleRightFill />
            </button>
          </div>
      </div>
      <div className=" text-lg text-[#4e4e4e] flex gap-3 items-center">
        <button>
          <PiHeartStraightFill />
        </button>
        <button>
          <PiShareFatFill />
        </button>
        <button>
          <PiDownloadFill />
        </button>
      </div>
    </div>
  );
};

export default Player;
