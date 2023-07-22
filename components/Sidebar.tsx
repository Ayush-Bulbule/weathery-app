'use client';

import React from 'react'
import { RiHome3Line, RiUserLine, RiShoppingCartLine, RiCloseLine, RiSearchLine, RiStarLine } from 'react-icons/ri'
import { FaCloudSunRain, FaListUl, FaMap, FaSlidersH } from "react-icons/fa";



const Sidebar = () => {
    return (
        <div className="h-full p-4">

            <aside className="flex flex-col rounded-xl items-center h-full  bg-gray-100 text-gray-700  ">
                <div className="h-16 flex items-center w-full">
                    <a className="h-8 w-8 mx-auto" href="http://svelte.dev/">
                        <img
                            className="h-8 w-8 mx-auto"
                            src="https://cdn-icons-png.flaticon.com/512/3767/3767039.png"
                            alt="svelte logo"
                        />
                    </a>
                </div>

                <ul className='mt-16'>
                    <li className="hover:bg-gray-100">
                        <a
                            href="."
                            className="h-16 px-6 flex flex-col justify-center items-center w-full focus:text-orange-500 text-gray-700"
                        >
                            <FaCloudSunRain className="h-5 w-5" />
                            <span className="text-xs mt-1.5 font-medium">Weather</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a
                            href="."
                            className="h-16 px-6 flex flex-col justify-center items-center w-full focus:text-orange-500 text-gray-500"
                        >
                            <FaListUl className="h-5 w-5" />
                            <span className="text-xs mt-1.5 font-medium">Cities</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a
                            href="."
                            className="h-16 px-6 flex flex-col justify-center items-center w-full focus:text-orange-500 text-gray-500"
                        >
                            <FaMap className="h-5 w-5" />
                            <span className="text-xs mt-1.5 font-medium">Map</span>
                        </a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a
                            href="."
                            className="h-16 px-6 flex flex-col justify-center items-center w-full focus:text-orange-500 text-gray-500"
                        >
                            <FaSlidersH className="h-5 w-5" />
                            <span className="text-xs mt-1.5 font-medium">Settings</span>
                        </a>
                    </li>

                 
                </ul>

                {/* <div className="mt-auto h-16 flex items-center w-full">
                    <button
                        className="h-16 w-10 mx-auto flex flex justify-center items-center w-full focus:text-orange-500 text-gray-500 hover:bg-red-200 focus:outline-none"
                    >
                        <RiCloseLine className="h-5 w-5 text-red-700" />
                    </button>
                </div> */}
            </aside>
        </div>
    )
}

export default Sidebar