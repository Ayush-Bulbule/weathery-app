'use client';
import { use, useState, useContext, useEffect } from 'react';
import { CityContext } from './context/CityContext';
import IWeather from '@/types/IWeather';

interface Props {
    city: string;
}

const CityCard: React.FC<Props> = ({ city }) => {
    const [selected, setSelected] = useState(false);
    const [weather, setWeather] = useState<IWeather | null>(null);
    const { cityName, setCityName } = useContext(CityContext);
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        getWeather();
        const dt = new Date();
        setTime((dt.getHours()<9?"0"+dt.getHours():dt.getHours() )+ ":" + (dt.getMinutes()<9?"0"+dt.getMinutes():dt.getMinutes()));
    }, [])

    const handleSelect = () => {
        setCityName(city);

    }
    const getWeather = async () => {

        //Link
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

        console.log(url);

        const response = await fetch(url)
        const data = await response.json();
        //finally set thedata
        setWeather(data);

    }

    return (
        <div onClick={handleSelect} className={`w-full border-2  rounded-2xl p-2 md:p-4 px-8 my-1.5 md:my-3 flex items-center cursor-pointer justify-between ` + (city == cityName ? "border-blue-400" : "bg-gray-100 dark:bg-slate-900 border-none")}>
            <div className="flex items-center justify-start">
                <img src="/sun.png" alt="weather" className="object-cover mx-3 md:mx-8 md:max-w-24 md:max-h-24 max-w-16 max-h-16" />
                <div className="flex flex-col">
                    <h1 className='text-md md:text-2xl py-1 font-semibold capitalize'>{city}</h1>
                    <p className='text-xs md:text-sm'>{time}</p>
                </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">{weather ? Math.round(weather.main.temp) : ""}°</h1>
        </div>
    )
}

export default CityCard