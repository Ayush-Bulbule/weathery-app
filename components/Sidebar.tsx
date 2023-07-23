'use client';

import React from 'react'
import Link from 'next/link'
import { RiHome3Line, RiUserLine, RiShoppingCartLine, RiCloseLine, RiSearchLine, RiStarLine } from 'react-icons/ri'
import { FaCloudSunRain, FaListUl, FaMap, FaSlidersH } from "react-icons/fa";



const Sidebar = () => {
    return (
        <div className="md:h-auto w-full  md:w-auto md:p-4 px-4 fixed left-0 right-0  md:static bottom-4 ">

            <aside className="flex md:flex-col mx-3 md:mx-0 md:py-4 bg-white flex-row rounded-xl right-3 left-3  items-center h-full  md:bg-gray-100 md:text-gray-700 shadow-md shadow-gray-300">
                <div className="h-16 flex items-center justify-between md:justify-center md:w-full">
                    <Link className="px-3 md:px-0 hidden md:block" href="/">
                        <img
                            className="md:h-12 md:w-12 md:mx-auto"
                            src="/logo.png"
                            alt="svelte logo"
                        />
                    </Link>
                </div>

                <ul className='md:mt-16 flex md:flex-col items-center w-full justify-between flex-row'>
                    <li className="hover:bg-gray-100">
                        <Link
                            href="."
                            className="h-16 px-3 md:px-6 flex flex-col justify-center items-center w-full focus:text-orange-500 text-gray-700"
                        >
                            <FaCloudSunRain className="text-md md:text-2xl" />
                            <span className="text-xs mt-1.5 font-medium">Weather</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                        <Link 
                            href="/cities"
                            className="h-16 px-3 md:px-6 flex flex-col justify-center items-center w-full focus:text-orange-500 md:text-gray-500"
                        >
                            <FaListUl className="text-md md:text-2xl" />
                            <span className="text-xs mt-1.5 font-medium">Cities</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                        <Link 
                            href="/map"
                            className="h-16 px-3 md:px-6 flex flex-col justify-center items-center w-full focus:text-orange-500 md:text-gray-500"
                        >
                            <FaMap className="text-md md:text-2xl" />
                            <span className="text-xs mt-1.5 font-medium">Map</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                        <Link 
                            href="/settings"
                            className="h-16 px-3 md:px-6 flex flex-col justify-center items-center w-full focus:text-orange-500 md:text-gray-500"
                        >
                            <FaSlidersH className="text-md md:text-2xl" />
                            <span className="text-xs mt-1.5 font-medium">Settings</span>
                        </Link>
                    </li>

                 
                </ul>

                {/* <div className="mt-auto h-16 flex items-center w-full">
                    <button
                        className="h-16 w-10 mx-auto flex flex justify-center items-center w-full focus:text-orange-500 md:text-gray-500 hover:bg-red-200 focus:outline-none"
                    >
                        <RiCloseLine className="text-md md:text-2xl text-red-700" />
                    </button>
                </div> */}
            </aside>
        </div>
    )
}

export default Sidebar