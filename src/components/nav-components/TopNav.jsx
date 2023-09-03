import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/musicLogo.png";

const TopNav = () => {
  return (
    <div className=" backdrop-blur-sm bg-white/40 w-[500px] px-3 rounded-3xl py-2 flex items-center justify-between">
      <div className=" flex items-center gap-2">
        <button>
          <img src={logo} alt="" className=" w-6 brightness-75" />
        </button>
        <h2 className=" font-serif text-sm text-[#272626f1] font-semibold">
          Oro's Music Player
        </h2>
      </div>
      <div className=" flex gap-2 items-center w-fit bg-white/40 rounded-3xl px-5 py-1">
        <input
          type="text"
          className=" outline-none bg-transparent text-sm"
          placeholder="search here"
        />
        <button className=" text-[#fffffff1] hover:text-[#6b6a6a]">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default TopNav;
