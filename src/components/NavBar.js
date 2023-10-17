import React from "react";
//import { Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {PiBellSimpleFill} from 'react-icons/pi'
import profile from "../assets/profile.jpg"


export default function NavBar(){
    return(
        //3 icons menu search notification
    <div id="Nav" className='overflow-hidden h-14 bg-[#3C91E6] px-64 flex items-center gap-24 font-lato sticky top-0 left-0 z-0'>
        <div className="pl-12">
            
            <AiOutlineMenu className="icon iconmenu"/>
            
        </div>
        <div className="flex w-screen">
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
        
        <div className="flex ">
            <input type="checkbox" id="switch-mode" hidden></input>
            <PiBellSimpleFill className="text-[20px]"/>
            <img className="h-9 w-9 " src={profile} alt=""></img>
        </div>
    </div>
    
    );
}