import { Link } from "react-router-dom";
import React from "react"
import logo from "../assets/sti_logo.png"
import {LuLayoutDashboard} from 'react-icons/lu'
import {FaBarsProgress, FaFileImport} from 'react-icons/fa6'


export default function SideBar(){
    return(
    <div id="sidebar" className="fixed top-0 left-0 w-[280px] -z-10 h-full bg-[#EEEEEE] overflow-hidden  font-lato">
        <div id="brand" className="text-[24px] font-bold h-14 flex items-center text-black sticky top-0 left-0 bg-[#3C91E6] z-[100] pb-5 box-content">
            <img className="h-20 " src={logo} alt=""/>
            <h1>ADMECO</h1>
        </div>
        
        <div className="side">
            <ul id="sideMenuTop" className="w-100% mt-[51px]">
            <Link to="/" className=""  >
                <li id="active" className="h-9 bg-[#F9F9F9] items-center ml-2 p-3 mr-[2px] flex rounded-full mb-3 hover:text-[#3C91E6]">
                    <LuLayoutDashboard id="icon dashboard" className=""/>
                    <h1 className="ml-4"> Dashboard</h1>
                </li>
            </Link>
            <Link to="/Progress" className=""  >
                <li id="active" className="h-9 bg-[#F9F9F9] items-center ml-2 p-3 mr-[2px] rounded-full  mb-3 flex hover:text-[#3C91E6]">
                    <FaBarsProgress id="icon dashboard" className=""/>
                    <h1 className="ml-4"> Progress</h1>
                </li>
            </Link>
            <Link to="/Activiy" className=""  >
                <li id="active" className="h-9 bg-[#F9F9F9] items-center ml-2 p-3 mr-[2px] rounded-full mb-3 flex hover:text-[#3C91E6]">
                <LuLayoutDashboard id="icon dashboard" className=""/>
                <h1 className="ml-4"> Activity</h1>
                </li>
            </Link>
            <Link to="/Activiy" className=" "  >
                <li id="active" className="h-9 bg-[#F9F9F9]  items-center ml-2 p-3 mr-[2px] rounded-full mb-3 flex hover:text-[#3C91E6]">
                    <FaFileImport id="icon dashboard" className=""/>
                    <h1 className="ml-4"> import</h1>
                </li>
            </Link>
            </ul>
        </div>
    </div>
    );
}
