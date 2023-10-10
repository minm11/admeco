//import { Link } from "react-router-dom";
import React from "react"
import logo from "../assets/sti_logo.png"
import {LuLayoutDashboard} from 'react-icons/lu'

//<Link to="/">Home</Link>
export default function SideBar(){
    return(
    <div id="sidebar" className="fixed top-0 left-0 w-[280px] -z-10 h-full bg-[#EEEEEE] overflow-hidden font-lato">
        <div id="brand" className="text-[24px] font-bold h-14 flex items-center text-black sticky top-0 left-0 bg-[#3C91E6] z-[100] pb-5 box-content">
            <img className="h-20 " src={logo} alt=""></img>
            <h1>ADMECO</h1>
        </div>
        
        <div className="side">
            <ul id="sideMenuTop" className="w-100% mt-12 bg-slate-400">
            <li id="active" className="h-9 bg-red-400 ml-2 rounded-full p-3">
               
                <LuLayoutDashboard id="icon dashboard" className="text-sky-700 flex"/>
                <h1> Dashboard</h1>
                
                
            </li>
            <li id="active" className="h-9 bg-red-400 ml-2 rounded-full p-3 flex">
                <LuLayoutDashboard id="icon dashboard" className="text-black"/>
                <h1> Dashboard</h1>
            </li>
            <li id="active" className="h-9 bg-red-400 ml-2 rounded-full p-3 flex">
                <LuLayoutDashboard id="icon dashboard" className="text-black"/>
                <h1> Dashboard</h1>
            </li>
            <li id="active" className="h-9 bg-red-400 ml-2 rounded-full p-3 flex">
                <LuLayoutDashboard id="icon dashboard" className="text-black"/>
                <h1> Dashboard</h1>
            </li>
            </ul>
        </div>
    </div>
    );
}
