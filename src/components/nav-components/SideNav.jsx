import React from "react";
import { FaHome, FaHeart } from "react-icons/fa";
import { GoIssueTracks } from "react-icons/go";
import { PiPlaylistBold } from "react-icons/pi";
import { AiFillSetting } from "react-icons/ai";
import { Tooltip } from "@mui/material";

const SideNav = () => {
  return (
    <div className=" flex flex-col gap-2 backdrop-blur-sm bg-white/40 h-fit px-2 py-2 rounded-3xl">
      <Tooltip title="Home" placement="right" arrow>
        <button className=" text-2xl hover:bg-[#6b6a6a] text-[#fffffff1] hover:text-[#ffffffd3] px-2 py-2 rounded-full text-center">
          <FaHome />
        </button>
      </Tooltip>
      <Tooltip title="Liked" placement="right" arrow>
        <button className=" text-2xl hover:bg-[#6b6a6a] text-[#fffffff1] hover:text-[#ffffffd3] px-2 py-2 rounded-full text-center">
          <FaHeart />
        </button>
      </Tooltip>
      <Tooltip title="Tracks" placement="right" arrow>
        <button className=" text-2xl hover:bg-[#6b6a6a] text-[#fffffff1] hover:text-[#ffffffd3] px-2 py-2 rounded-full text-center">
          <GoIssueTracks />
        </button>
      </Tooltip>

      <Tooltip title="Playlists" placement="right" arrow>
        <button className=" text-2xl hover:bg-[#6b6a6a] text-[#fffffff1] hover:text-[#ffffffd3] px-2 py-2 rounded-full text-center">
          <PiPlaylistBold />
        </button>
      </Tooltip>

      <Tooltip title="Settings" placement="right" arrow>
        <button className=" text-2xl hover:bg-[#6b6a6a] text-[#fffffff1] hover:text-[#ffffffd3] px-2 py-2 rounded-full text-center">
          <AiFillSetting />
        </button>
      </Tooltip>
    </div>
  );
};

export default SideNav;
