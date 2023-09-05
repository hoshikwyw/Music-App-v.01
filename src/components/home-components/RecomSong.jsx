import React from "react";
import weekend from "../../assets/theWeekend.jpg";
import { FaPlay } from "react-icons/fa";

const RecomSong = ({ song }) => {
//   console.log(song);
  return (
    <div className=" relative group inner">
      <img src={song.item.song_art_image_url} alt="" className=" w-24 rounded-lg" />
      <button className=" absolute top-[22%] left-6 text-[#fffffff1] bg-slate-400 px-3 py-3 rounded-full invisible group-hover:visible">
        <FaPlay />
      </button>
      <h2 className=" text-sm text-[#4e4e4e] font-semibold break-words">
        {song.item.artist_names.substring(0, 10)}...
      </h2>
      <h2 className=" text-xs text-[#4e4e4e] font-semibold">{song.item.title.substring(0,10)}...</h2>
    </div>
  );
};

export default RecomSong;
