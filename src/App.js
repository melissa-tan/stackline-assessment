import logo from "./stackline_logo.svg";
import React from "react";
import Product from "./components/Product";
import Chart from "./components/Chart";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="logo" alt="stackline-logo" />
      </header>
      <div className="container">
        <Product className="left-container" />
        <Chart className="right-container" />
      </div>
    </div>
  );
}

export default App;
