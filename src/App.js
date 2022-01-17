import React from "react";
import "./App.css";
import ReactDOM from "react-dom";

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
      <div className="App">
        <header classNams="App-header">

        </header>
      </div>
    </div>
  );
}

export default App;
