import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./components/Home"
import Login from "./components/Login";

     
export default function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="login" element={<Login />} /> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}