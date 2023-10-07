import React from "react";
import './App.css';
//import { Route, Routes } from "react-router-dom"
import {NavBar} from "./components/NavBar";
import {SideBar } from "./components/SideBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      
      <h1>pota bat wala</h1>
    </div>
  );
}

export default App;