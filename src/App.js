import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      <footer>
      This project was coded by <a href="https://www.instagram.com/alibooh/?hl=es" target="blank">Alicia Garcia</a> and is {""}
      <a 
      href="https://github.com/AliOli85/react-weather-app" 
      target="blank"
      >
        open-sourced on GitHub
      </a>
      </footer>
      </div>
    </div>
  );
}