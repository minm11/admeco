import React from "react";
import { Link } from "react-router-dom";
import {BiChevronRight, BiFilter, BiErrorAlt, BiSolidGroup} from 'react-icons/bi' 
import {AiOutlineSearch} from 'react-icons/ai'
import profile from "../assets/profile.jpg"

export default function Progress(){
    return(
        <div id="main" className="ml-[284px] shadow-blue-600 rounded-tl-3xl pt-9 pb-28 px-5 font-lato max-h-full overflow-y-auto fixed grid grid-cols-1 w-full">
            <div id="headTitle" className="flex items-center justify-between gap-16 flex-wrap">
                <div id="container left">
                    <h1 className="text-4xl font-semibold mb-5 text-black">Progress</h1>
                    <div className="flex items-center gap-4">
                        <Link to='/' className="hover:text-[#3C91E6]">Home</Link>
                        <BiChevronRight id="icon iconchevronRight" className=""/>
                        <Link to='/Progress' className="hover:text-[#3C91E6]">Progress</Link>
                    </div>
                </div>
            </div>
            
            
            <div id="table data" className="flex gap-5 mt-[68px] ml-6 text-black">
                <div id="order" className="grow-1 basis-[43%] bg-slate-500">
                    <div id="head" className="flex items-center gap-5 mb-8">
                        <h1 className="text-2xl mr-auto font-semibold ">Progress</h1>
                        <AiOutlineSearch/> <BiFilter/>
                    </div>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b-[1px]">
                                <th className="pb-1 text-sm text-left bottom-1 border-solid border-[#eee]">student</th>
                                <th className="pb-1 text-sm text-left bottom-1 border-solid border-[#eee]">date Progress</th>
                                <th className="pb-1 text-sm text-left bottom-1 border-solid border-[#eee]">status</th>
                            </tr>
                        </thead>
                        <tbody className="">
							<tr className="h-10  items-center bg-slate-600">
								<td className="flex ">
									<img  className="h-10" src={profile} alt=""/>
									<p>Ron Jericho manzano</p>
								</td>
								<td>28-09-2023</td>
								<td><span class="status Passed">Passed</span></td>
							</tr>
							<tr className="h-10">
                                <td className="flex">
									<img className="h-7" src={profile} alt=""/>
									<p>Vincent Baliuag</p>
								</td>
								<td>28-09-2023</td>
								<td><span class="status Failure">Failure</span></td>
							</tr>
							<tr className=" ">
                                <td className="flex">
									<img className="h-7" src={profile} alt=""/>
									<p>Alto Alexander</p>
								</td>
                                
								<td>28-09-2023</td>
								<td><span class="status Improving">Improving</span></td>
							</tr>
							<tr className="  ">
                                <td className="flex">
									<img className="h-7" src={profile} alt=""/>
									<p>Ceejay Fajardo</p>
								</td>
								<td>28-09-2023</td>
								<td><span class="status Failure">Failure</span></td>
							</tr>
							
						</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}