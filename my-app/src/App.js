import React from "react";
import "./App.css";

import Goods from "./components/Goods";

function App() {
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <Goods />
      </div>{" "}
    </div>
  );
}

export default App;