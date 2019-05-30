import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Questions from "./Questions/Questions";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Questions />
    </div>
  );
}

export default App;
