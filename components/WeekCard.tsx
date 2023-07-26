'use client';
import React, { useState, useContext, useEffect } from 'react'
import { CityContext } from './context/CityContext';
import IForecast from '@/types/IForecast';


const WeekCard = () => {
    //City Context
    const { cityName, location } = useContext(CityContext);
    const [weather, setWeather] = useState<IForecast[]>();
    const [icons, setIcons] = useState<string[]>([])

    useEffect(() => {

        getWeather();
        console.log("hi");
    }, [location, cityName])

    const getWeather = async () => {
        const url = (cityName == '') ? `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}` :
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();

        let filteredData = [];
        for (let i = 0; i < data.list.length; i += 7) {
            filteredData.push(data.list[i]);
            console.log(data.list[i]);

        }

        setWeather(filteredData);
        if (filteredData) {
          
            console.log(icons);
        }

    }


    return (
        <div className="flex flex-col bg-gray-100 dark:bg-gray-900 p-8 w-full rounded-xl min-h-full">
            <p className='font-semibold text-blue-700 uppercase text-xs'>7 day Forcast</p>

            {/* Day Item */}
            <div className="flex w-full justify-between py-4 items-center border-b-2 border-gray-200 dark:border-slate-800">
                <p>Date</p>
                <div className="flex items-center">

                    <p className='mx-3'>Climate</p>

                </div>
                <p>min/max</p>
            </div>

            {
                weather?.map((item, index) => (
                    <div className="flex w-full justify-between py-2 items-center border-b-2 border-gray-200 dark:border-slate-950">
                        <p>{item.dt_txt.slice(8, 10)}-{item.dt_txt.slice(5, 7)}</p>
                        <div className="flex items-center">
                            <img src={item ? `/${item.weather[0].icon}.png` : "/preload.png"} alt="sun" className="object-contain w-14 h-14 my-1 " />
                            <p className='mx-2'>{item.weather[0].main}</p>

                        </div>
                        <p>{Math.round(item.main.temp_min)}/{Math.round(item.main.temp_max)}</p>
                    </div>
                ))
            }
        </div>

    )
}

export default WeekCard