'use client'
import React, { useState, useContext, useEffect } from 'react'
import { CityContext } from './context/CityContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import IForecast from '@/types/IForecast';

const TodayCard = () => {
    const [weather, setWeather] = useState<IForecast[]>();
    const { cityName, location } = useContext(CityContext);
    const [icons, setIcons] = useState<string[]>([]);


    useEffect(() => {
        getWeather();


    }, [cityName, location.latitude])

    const getWeather = async () => {
        const url = (cityName == '') ? `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}` :
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
        console.log(url);

        const response = await fetch(url)
        const data = await response.json();

        let datalist: IForecast[] = data.list;

        datalist = datalist.slice(0, 6);

        setWeather(datalist);

  
    }
    return (
        <div className="flex flex-col bg-gray-100 dark:bg-slate-900 md:p-8 p-4 w-full rounded-xl">
            <p className='font-semibold text-blue-700  uppercase text-xs'>Today's Forcast</p>
            <div className="flex flex-row flex-wrap md:flex-nowrap overflowx-scroll ">
                {/* Time item */}

                {weather ?
                    weather.map((data, index) => {
                        return (
                            <div key={index} className="w-1/2  flex flex-col justify-center items-center mt-4 md:border-r border-gray-400">
                                <p className="text-xs">{data.dt_txt.slice(11, 16)}</p>
                                <img src={weather ? `/${data.weather[0].icon}.png` : "/preload.png"} className='object-contain my-1.5' alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                                <p className="text-md font-bold">{data.main.temp}°C</p>
                            </div>
                        )
                    }) :
                    <div className="h-24 w-full">
                        <Skeleton />
                    </div>
                }
            </div>
        </div>
    )
}

export default TodayCard