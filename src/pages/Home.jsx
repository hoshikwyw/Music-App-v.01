import React from "react";
import Landing from "../components/home-components/Landing";
import SideNav from "../components/nav-components/SideNav";
import TopNav from "../components/nav-components/TopNav";
import Player from "../components/Player";

const Home = () => {
  return (
    <div className=" w-full flex gap-5 items-center ">
      <div>
        <SideNav />
      </div>
      <div className=" flex flex-col gap-3 justify-center items-center w-full">
        <TopNav />
        <Landing />
        <Player />
      </div>
    </div>
  );
};

export default Home;
