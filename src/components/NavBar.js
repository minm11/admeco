import React from "react";
//import { Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {PiBellSimpleFill} from 'react-icons/pi'
import profile from "../assets/profile.jpg"


export default function NavBar(){
    return(
    <div id="Nav" className='overflow-hidden h-14 bg-[#3C91E6] pl-64 flex items-center gap-24 font-lato sticky top-0 left-0 z-0'>
        
        <div className="flex w-screen pl-10">
            <div id="searchbarcontainer" className="bg-white rounded-l-full flex justify-between w-[67%] h-9">
            <input
                id="searchbar"
                className="rounded-l-full border-0 text-sm outline-none w-full mx-5"
                placeholder="Search..."
                type="text"
            />
        </div>
            <div className="bg-yellow-400  rounded-r-full text-sm p-2 -mr-2 h-9">
                <AiOutlineSearch id="icon" className="text-[20px] mt-0"/>
            </div>
        </div>
        
        <div className="h-10 bg-slate-400 rounded-full w-[60px] mr-10 border-rose-500 border  ">
            
        </div>
    </div>
    );
}