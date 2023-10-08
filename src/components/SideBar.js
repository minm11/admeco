import { Link } from "react-router-dom";
import React from "react"
import "./SideBar.css"
import logo from "../assets/sti_logo.png"
import {LuLayoutDashboard} from 'react-icons/lu'


export default function SideBar(){
    return(
    <div className="sidebar">
        <img className="sti_logo.png" src={logo} alt="picture ng sti hahhaa" width="60" height="60"></img>
        <h1>ADMECO</h1>
        <div className="side">
            <ul>
            <li>
                <Link to="/">Home</Link>
                <h1> <LuLayoutDashboard className="icon db"/>Dashboard</h1>
            </li>
            </ul>
        </div>
    </div>
    );
}
