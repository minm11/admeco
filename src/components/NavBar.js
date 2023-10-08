import React from "react";
import "./NavBar.css";
//import { Link } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'


export default function NavBar(){
    return(
        //3 icons menu search notification
    <div id="Nav" className='
    h-56 blue pr-24 flex items-center 
    gap-24 font-lato sticky top-0 left-0 z-0'>
        <div className="block">
            <AiOutlineMenu className="icon iconmenu"/>
            
        </div>
        <div className="block SearchBarContainer">
            <input
                className="searchbar"
                placeholder="Search..."
                type="text"
            />
            <AiOutlineSearch className="icon iconsearch"/>
        </div>
        <div>
            <input type="checkbox" id="switch-mode" hidden></input>
        </div>
    </div>
    );
}