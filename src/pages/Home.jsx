import React from "react";
import Landing from "../components/home-components/Landing";
import SideNav from "../components/nav-components/SideNav";
import TopNav from "../components/nav-components/TopNav";
import Player from "../components/Player";

const Home = () => {
  return (
    <div className=" w-full flex gap-5 justify-center items-center">
      <div className=" w-[6%] flex items-center">
        <SideNav />
      </div>
      <div className=" flex flex-col gap-3 mt- items-center justify-center w-[90%] ">
        <div className=" backdrop-blur-sm bg-white/40 w-[70%] px-3 rounded-3xl py-2">
          <TopNav />
        </div>
        <div className=" backdrop-blur-sm bg-[#ffffff]/30 px-3 py-3 rounded-3xl w-[100%] cursor-pointer">
          <Landing />
        </div>
        <div className=" md:w-[50%] w-full fixed md:relative bottom-0 left-0 mx-auto">
        <Player />
        </div>
      </div>
    </div>
  );
};

export default Home;
