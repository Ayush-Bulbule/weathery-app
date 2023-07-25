'use client'
import React, { useState, useContext, useEffect } from 'react'
import { CityContext } from './context/CityContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'



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

const TodayCard = () => {
    const [weather, setWeather] = useState<IWeather[]>();
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

        let datalist: IWeather[] = data.list;

        datalist = datalist.slice(0, 6);

        setWeather(datalist);

        if (datalist) {
            datalist.forEach(item => {
                setIcons((prev) => [...prev, weatherConditions[item.weather[0].main]]);
                console.log(weatherConditions[item.weather[0].main]);
            });

        }
    }
    return (
        <div className="flex flex-col bg-gray-100 dark:bg-slate-900 md:p-8 p-4 w-full rounded-xl">
            <p className='font-semibold text-blue-700  uppercase text-xs pb-3'>Today's Forcast</p>
            <div className="flex flex-row flex-wrap md:flex-nowrap overflowx-scroll ">
                {/* Time item */}

                {weather ?
                    weather.map((data, index) => {
                        return (
                            <div key={index} className="w-1/2  flex flex-col justify-center items-center mt-4 md:border-r border-gray-400">
                                <p className="text-xs">{data.dt_txt.slice(11, 16)}</p>
                                <img src={icons[index] ? icons[index] : 'sun.png'} className='object-contain' alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
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