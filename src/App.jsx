import React from "react";
import Path from "./router/Path";
import "./App.css";

const App = () => {
  return (
    <div className=" app bg-cover bg-no-repeat">
      <div className=" bg-black bg-opacity-20 flex items-center justify-center">
        <div className=" rounded p-5 w-full">
          <Path />
        </div>
      </div>
    </div>
  );
};

export default App;
