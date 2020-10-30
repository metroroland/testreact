import React from "react";
import logo from "./logo.png";
import logoSVG from "./SVGlogo.svg";
import { ReactComponent as Logo } from "./SVGlogo.svg";
import "./App.css";

function App() {
  return (
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
        <img src={logoSVG} className="App-logo" alt="logo" />
        <Logo className="App-logo" />
      </header>
    </div>
  );
}

export default App;
