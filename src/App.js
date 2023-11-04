import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Progress from "./components/Progress";
import Activity from "./components/Activity";
import Import from "./components/Import";
import Login from "./components/Login";
import supabase from "./supabaseClient";

//
export default function App({ msalinstance }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [user, setUser] = useState();
  const [userAzure, setUserAzure] = useState();
  console.log(user);
  console.log(userAzure);

  return (
    <div className="flex h-screen ">
      <div
        className={`${
          openMenu
            ? "w-[280px] h-screen transition-transform duration-200 overflow-hidden"
            : "w-0 hidden h-screen transition-transform duration-200"
        }`}
      >
        {user && <SideBar openMenu={openMenu} user={user} />}
      </div>
      <NavBar
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
        msalinstance={msalinstance}
        setUser={setUser}
        setUserAzure={setUserAzure}
      />
      <div className="w-[100%] overflow-hidden">
        <div className="mt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Import" element={<Import />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Login" element={<Login msalinstance={msalinstance}/>} />
        </Routes>
        </div>
      </div>

      {console.log(openMenu)}
    </div>
  );
}
