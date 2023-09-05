import React from "react";
import weeknd from "../../assets/theWeekend.jpg";
import { AiFillPlayCircle,AiFillHeart } from "react-icons/ai";

const RecentCard = ({song}) => {
  return (
    <div className=" flex items-center justify-between bg-white/25 rounded-2xl mt-2 main gap-5 w-full">
      <div className=" flex items-center">
        <img src={song.item.header_image_thumbnail_url} alt="" className=" w-12 h-12 rounded-xl" />
        <div className=" text-xs text-[#4e4e4e] font-semibold ps-3">
          <h2>{song.item.artist_names.substring(0, 10)}...</h2>
          <h2>{song.item.title.substring(0,10)}...</h2>
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
  );
};

export default RecentCard;
