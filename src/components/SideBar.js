import { Link } from "react-router-dom";
import React, { useState } from "react"
import logo from "../assets/sti_logo.png"
import {LuLayoutDashboard} from 'react-icons/lu'
import {PiClipboardTextBold, PiReadCvLogoFill} from 'react-icons/pi'
import {AiOutlineMenu,AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import {FaBarsProgress, FaFileImport} from 'react-icons/fa6'


export default function SideBar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
    <div id="sidebar" className="fixed top-0 left-0 w-[280px] -z-10 h-full bg-[#EEEEEE] overflow-hidden  font-lato">
        <div id="brand" className="font-bold flex items-center text-black sticky top-0 left-0 bg-[#3C91E6] z-[100] pb-5 box-content">
            <img className="h-20 " src={logo} alt=""/>
            <h1 className="text-[24px]">ADMECO</h1>
            <AiOutlineMenu id="icon iconmenu" className="h-11 ml-10 hover:text-[#F9F9F9]"/>
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
                    <FaBarsProgress id="icon Progress" className=""/>
                    <h1 className="ml-4"> Progress</h1>
                </li>
            </Link>
            <Link to="/Import" className=" "  >
                <li id="active" className="h-9 bg-[#F9F9F9]  items-center ml-2 p-3 mr-[2px] rounded-full mb-3 flex hover:text-[#3C91E6]">
                    <FaFileImport id="icon Import" className=""/>
                    <h1 className="ml-4"> import</h1>
                </li>
            </Link>
            <button onClick={() => setIsOpen((prev) => !prev)}>
                <li id="active" className="h-9 bg-[#F9F9F9] w-[270px] items-center ml-2 p-3 mr-[2px] rounded-full mb-3 flex hover:text-[#3C91E6] ">
                    <PiReadCvLogoFill id="icon Logs" className=""/>
                    <h1 className="ml-4">Logs</h1>
                    {!isOpen ? (<AiFillCaretDown/> ) : (<AiFillCaretUp/>)}
                </li>
            </button>
            
                {isOpen &&(
                    <Link to="/Activity" className=""  >
                        <li id="active" className="h-9 bg-[#F9F9F9] items-center ml-2 p-3 mr-[2px] rounded-full mb-3 flex hover:text-[#3C91E6]">
                            <PiClipboardTextBold id="icon Activity" className=""/>
                            <h1 className="ml-4"> Activity</h1>
                        </li>
                    </Link> 
                    
                    
                ) : (
                <Link to="/Activity" className=""  >
                <li id="active" className="h-9 bg-[#F9F9F9] items-center ml-2 p-3 mr-[2px] rounded-full mb-3 flex hover:text-[#3C91E6]">
                    <PiClipboardTextBold id="icon Activity" className=""/>
                    <h1 className="ml-4"> Activity</h1>
                </li>
            </Link> )}
            
                
            
            </ul>
        </div>
    </div>
    );
}
