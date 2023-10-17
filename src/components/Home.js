import React from "react";
import { Link } from "react-router-dom";
import {BiChevronRight, BiFilter, BiErrorAlt, BiSolidGroup} from 'react-icons/bi' 
import {AiOutlineSearch} from 'react-icons/ai'
import profile from "../assets/profile.jpg"
export default function Home(){
    return(
        <div id="main" className="w-[80%]  mx-[20%] shadow-blue-600 rounded-tl-3xl py-9 px-5 font-lato max-h-full overflow-y-auto fixed">
            <div id="headTitle" className="flex items-center justify-between gap-16 flex-wrap">
                <div id="container left">
                    <h1 className="text-4xl font-semibold mb-5 text-black">Dashboard</h1>
                    <ul className="flex items-center gap-4">
                        <li className="text-black">
                            <Link to='/'>Dashboard</Link>
                        </li>
                        <li>
                            <BiChevronRight id="icon iconchevronRight" className=""/>
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>

            <ul id="container info" className="grid  lg:grid-cols-4 gap-24 mt-[5%] ml-7">
                <div className="items-center flex gap-5 w-[80.5%]">
                    <li id="box info" className="p-3 bg-red-500   rounded-2xl">
                        <BiErrorAlt id="icon iconError" className="  text-white text-6xl"/>
                    </li>
                    <div>
                        <h1 className="font-bold text-2xl">20</h1>
                        <p className="whitespace-nowrap">New Failure Student</p>
                    </div>
                </div>
                <div className="items-center flex gap-5 w-[80.5%]">
                    <li id="box info" className="p-3 bg-green-700   rounded-2xl">
                        <BiSolidGroup id="icon iconError" className="  text-white text-6xl"/>
                    </li>
                    <div>
                        <h1 className="font-bold text-2xl">30</h1>
                        <p>Online</p>
                    </div>
                </div>
                <div className="items-center flex gap-5 w-[80.5%]">
                    <li id="box info" className="p-3 bg-yellow-400   rounded-2xl">
                        <BiSolidGroup id="icon iconError" className="  text-white text-6xl"/>
                    </li>
                    <div>
                        <h1 className="font-bold text-2xl">5</h1>
                        <p className="whitespace-nowrap">Busy User</p>
                    </div>
                </div>
            </ul>
            <div id="table data" className="flex flex-wrap gap-1 mt-20 ml-7 w-full bg-slate-500 text-black">
                <div id="order" className="grow-1 basis-[55%]">
                    <div id="head" className="flex items-center gap-5 mb-8">
                        <h1 className="text-2xl mr-auto font-semibold ">Progress</h1>
                        <AiOutlineSearch/> <BiFilter/>
                    </div>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="pb-12 text-sm text-left bottom-1 border-solid border-white">student</th>
                                <th className="pb-12 text-sm text-left bottom-1 border-solid border-white">date Progress</th>
                                <th className="pb-12 text-sm text-left bottom-1 border-solid border-white">status</th>
                            </tr>
                        </thead>
                        <tbody>
							<tr className=" bg-slate-600">
								<td className="flex">
									<img  className="h-7" src={profile} alt=""/>
									<p>Ron Jericho manzano</p>
								</td>
								<td>28-09-2023</td>
								<td><span class="status Passed">Passed</span></td>
							</tr>
							<tr className="  ">
                                <td className="flex">
									<img className="h-7" src={profile} alt=""/>
									<p>Vincent Baliuag</p>
								</td>
								<td>28-09-2023</td>
								<td><span class="status Failure">Failure</span></td>
							</tr>
							<tr className="  ">
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
							<tr className="  ">
                                <td className="flex">
									<img className="h-7" src={profile} alt=""/>
									<p>Arive Junio</p>
								</td>
								<td>28-09-2023</td>
								<td><span class="status Passed">Improving</span></td>
							</tr>
						</tbody>
                    </table>
                </div>

                <div id="Activity" className="grow-1 basis-[55%]">
                    <div id="head" className="flex items-center gap-6 mb-8">
                    <h1 className="text-2xl  font-semibold ">Activity</h1>
                    </div>
                    <ul className="w-full">
                        <li className="border-x-2"><h1>tite</h1></li>
                        <li className="border-x-2"><h1>tite</h1></li>
                        <li className="border-x-2"><h1>tite</h1></li>
                        <li className="border-x-2"><h1>tite</h1></li>
                        <li className="border-x-2"><h1>tite</h1></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
