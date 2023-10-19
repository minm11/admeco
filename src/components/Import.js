import React from "react";
import { Link } from "react-router-dom";
import {BiChevronRight, BiFilter, BiErrorAlt, BiSolidGroup} from 'react-icons/bi' 

export default function Import(){
    return(
        <div id="main" className="ml-[284px] shadow-blue-600 rounded-tl-3xl pt-9 pb-28 px-5 font-lato max-h-full overflow-y-auto fixed grid grid-cols-1 w-full">
            <div id="headTitle" className="flex items-center justify-between gap-16 flex-wrap">
                <div id="container left">
                    <h1 className="text-4xl font-semibold mb-5 text-black">Progress</h1>
                    <div className="flex items-center gap-4">
                        <Link to='/' className="hover:text-[#3C91E6]">Home</Link>
                        <BiChevronRight id="icon iconchevronRight" className=""/>
                        <Link to='/Import' className="hover:text-[#3C91E6]">Import</Link>
                    </div>
                </div>
            </div>

        </div>
    );
}