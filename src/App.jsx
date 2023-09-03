import React from "react";
import Path from "./router/Path";
import "./App.css";

const App = () => {
  return (
    <div className=" app h-screen bg-cover bg-no-repeat">
      <div className=" bg-black h-screen bg-opacity-20 flex items-center justify-center">
        <div className=" rounded p-5">
          <Path />
        </div>
      </div>
    </div>
  );
};

export default App;
