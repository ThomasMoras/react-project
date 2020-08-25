import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ReactDOM from "react-dom";

import Table from "./home/table";
import SerieList from "./home/home";
import TechView from "./home/test";
import Game from "./tuto-morpion/Game";
import NavBar from "./pages/routing";

function tick() {
  const element = (
    <div>
      <h1>Bonjour, monde !</h1>
      <h2>Il est {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

function App() {
  return (
    <div>
      {NavBar()}
      <div>
        <Game />
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="container"></div>

          {/* <Table />
      <SerieList/>
      <TechView/> */}
        </header>
      </div>
    </div>
  );
}

export default App;
