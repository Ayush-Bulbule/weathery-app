'use client'
import React, { useState, useContext, useEffect } from 'react'
import { CityContext } from './context/CityContext';
import { BsFillDropletFill, BsSpeedometer2, BsThermometerSun, BsWind } from 'react-icons/bs';
import { FaShower } from 'react-icons/fa';


interface IWeather {
    main: {
        temp: number;
        feels_like: number;
    }
    weather: [{
        main: string;
    }]
    dt_txt: string;
}
const weatherConditions: Record<string, string> = {
    Clouds: "/cloud.png",
    Rain: "/rain.png",
    Clear: "/sun.png",
    Snow: "/sun-snow.png",
    Thunderstorm: "/sun-thunder.png",
    Drizzle: "/sun-rain.png",
    Mist: "/sun-rain.png",
    Smoke: "/sun-rain.png",
    Haze: "/sun-rain.png",
    Dust: "/sun-rain.png",
    Fog: "/sun-rain.png",
};

const DetailCard = ({ data }) => {

    const { cityName, location } = useContext(CityContext);
    console.log(data);

    return (
        <div className=" flex flex-col mb-4 bg-gray-100 md:p-8 p-4 md:w-full mt-4 rounded-xl">
            <p className='font-semibold text-gray-600 uppercase text-xs pb-3'>Air Conditions</p>

            <div className="flex justify-between ">
                <div className="mt-2 flex flex-col md:flex-row items-center md:items-start">
                    <BsThermometerSun size={24} className="text-gray-600" />
                    <div className="flex flex-col ml-2">
                        <p className='text-xs md:text-sm'>Real Feel</p>
                        <h1 className="text-md md:text-2xl mt-1.5 text-gray-800 font-semibold">
                            {Math.round(data.main.feels_like)}°C
                        </h1>
                    </div>
                </div>
                <div className="flex mt-2 flex-col md:flex-row items-center md:items-start">
                    <BsSpeedometer2 size={24} className="text-gray-600" />
                    <div className="flex flex-col ml-2">
                        <p className="text-xs md:text-sm">Pressure</p>
                        <h1 className="text-md md:text-2xl mt-1.5 text-gray-800 font-semibold">
                            {Math.round(data.main.pressure)}hPa
                        </h1>
                    </div>
                </div>
                <div className="flex mt-2 flex-col md:flex-row items-center md:items-start">
                    <BsWind size={24} className="text-gray-600" />
                    <div className="flex flex-col ml-2">
                        <p className="text-xs md:text-sm">Wind</p>
                        <h1 className="text-md md:text-2xl mt-1.5 text-gray-800 font-semibold">
                            {Math.round(data.wind.speed)}km/h
                        </h1>
                    </div>
                </div>
                <div className="flex mt-2 flex-col md:flex-row items-center md:items-start">
                    <FaShower size={24} className="text-gray-600" />
                    <div className="flex flex-col ml-2">
                        <p className="text-xs md:text-sm">Humidity</p>
                        <h1 className="text-md md:text-2xl mt-1.5 text-gray-800 font-semibold">
                            {Math.round(data.main.humidity)}%
                        </h1>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default DetailCard