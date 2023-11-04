import React, { useState, useEffect } from "react";
import supabase from "../supabaseClient";
//import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import logo from "../assets/sti_logo.png";
import { PiBellSimpleFill } from "react-icons/pi";
import profile from "../assets/profile.jpg";
import Login from "./Login";

export default function NavBar({ setOpenMenu, openMenu, msalinstance, setUser, setUserAzure }) {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div
      id="Nav"
      className="overflow-y-hidden h-[75px] w-full bg-[#3C91E6] flex items-center justify-between font-lato absolute top-0 left-0 z-0"
    >
      <div
        id="brand"
        className="font-bold flex items-center text-black sticky top-0 left-0 bg-[#3C91E6] box-content"
      >
        <img className="h-20 " src={logo} alt="" />
        <h1 className="text-[24px] mr-6">ADMECO</h1>

        <a onClick={() => setOpenMenu(!openMenu)}>
          <AiOutlineMenu
            id="icon iconmenu"
            className="text-[20px] hover:text-[#F9F9F9] "
          />
        </a>
      </div>

      <div className="flex">
        <div
          id="searchbarcontainer"
          className="bg-white rounded-l-full flex justify-between h-9"
        >
          <input
            id="searchbar"
            className="rounded-l-full border-0 text-sm outline-none w-96 mx-5"
            placeholder="Search..."
            type="text"
          />
        </div>
        <div className="bg-yellow-400  rounded-r-full text-sm flex items-center p-2 h-9">
          <AiOutlineSearch id="icon" className="text-[20px]" />
        </div>
      </div>

      <div
        onClick={() => setOpenLogin(!openLogin)}
        className="h-10 bg-slate-400 rounded-full w-10 mr-5 border-rose-500 border  "
      >
        <Login
          msalinstance={msalinstance}
          setOpenLogin={setOpenLogin}
          openLogin={openLogin}
          setUser={setUser}
          setUserAzure={setUserAzure}
        />
      </div>
    </div>
  );
}
