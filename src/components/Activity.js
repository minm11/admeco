import React from "react";
import { Link } from "react-router-dom";
import {BiChevronRight, BiFilter, BiErrorAlt, BiSolidGroup} from 'react-icons/bi' 

export default function Activity(){
    return(     
        <div id="main" className="ml-[284px] shadow-blue-600 rounded-tl-3xl pt-9 pb-28 px-5 font-lato max-h-full overflow-y-auto fixed grid grid-cols-1 w-full">
            <div id="headTitle" className="flex items-center justify-between gap-16 flex-wrap">
                <div id="container left">
                    <h1 className="text-4xl font-semibold mb-5 text-black">Activity</h1>
                    <div className="flex items-center gap-4">
                        <Link to='/' className="hover:text-[#3C91E6]">Home</Link>
                        <BiChevronRight id="icon iconchevronRight" className=""/>
                        <Link to='/Progress' className="hover:text-[#3C91E6]">Activity</Link>
                    </div>
                </div>
            </div>
            
            
            <div id="Activity" className="gap-5 mt-[68px] ml-6 text-black ">
                    <div id="head" className="flex gap-6 mb-7">
                        <h1 className="text-2xl  font-semibold ">Activity</h1>
                    </div>
                    <ul className="">
                        <li className="border-x-2  mb-5 bg-[#eee] rounded-lg px-14 py-6  "><h1>tite</h1></li>
                        <li className="border-x-2  mb-5 bg-[#eee] rounded-lg px-14 py-6  "><h1>tite</h1></li>
                        <li className="border-x-2  mb-5 bg-[#eee] rounded-lg px-14 py-6  "><h1>tite</h1></li>
                        <li className="border-x-2  mb-5 bg-[#eee] rounded-lg px-14 py-6  "><h1>tite</h1></li>
                        <li className="border-x-2  mb-5 bg-[#eee] rounded-lg px-14 py-6  "><h1>tite</h1></li>
                    </ul>
                </div>
        </div>
    );
}