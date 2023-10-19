import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./components/Home"
import Progress from "./components/Progress";
import Activity from "./components/Activity";
import Login from "./components/Login";

     
export default function App() {
  return (
    <div>
      <NavBar />
      <SideBar />

      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Progress" element={<Progress />} /> 
        <Route path="/Activity" element={<Activity />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
      
      
    </div>
  );
}