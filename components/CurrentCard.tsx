'use client';
import { log } from 'console';
import React, { useState, useEffect } from 'react'

interface IWeather {
    name: string;
    main: {
        temp: number;
    }
    weather: [{
        main: string;
        description: string;
        icon: string;
    }]

}

const CurrentCard = () => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
    const [weather, setWeather] = useState<IWeather | null>(null);
    const [time, setTime] = useState({ hour: '00', min: '00',sec:'00'});

    //Get location
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                setLocation({ latitude, longitude });
            })
        }
    }, []);

    //If location then create request
    useEffect(() => {
        if (location.latitude && location.longitude) {
            getWeather(location.latitude, location.longitude);
        }
    }, [location]);

    //Get time
    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const min = String(date.getMinutes()).padStart(2, '0');
            const hour = String(date.getHours()).padStart(2,'0');
            const sec = String(date.getSeconds()).padStart(2,'0');
        setTime({ hour, min,sec });
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);



    //functiont to get weather
    const getWeather = async (latitude: number, longitude: number) => {
        console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=e513d046730a4e2a203dd95c606fec56`);

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=e513d046730a4e2a203dd95c606fec56`)
        const data = await response.json();
        console.log(data);

        //finally set thedata
        setWeather(data);
    }
    return (
        <>{
            (weather) ?
                <div className="main flex p-4 px-20">

                    {/* Code Web */}
                    <div className="text flex flex-col w-1/2 justify-center">

                        <h1 className="text-2xl font-bold my-3">{weather.name}</h1>
                        <p className="text-xs capitalize">{weather.name}</p>

                        <h1 className="temp-text font-bold text-5xl mt-8">{Math.round(weather.main.temp)}°C</h1>
                        <h1 className="text-xl font-bold my-3">{time.hour}:{time.min}:{time.sec}</h1>

                    </div>
                    <div className="img w-1/2 flex flex-col justify-center items-center">
                        {
                            weather.weather[0].main == 'Clouds' ? <img src="/cloud.png" alt="weather" className="img-weather w-52" /> :
                                weather.weather[0].main == 'Rain' ? <img src="/sun-rain.png" alt="weather" className="img-weather w-52" /> :
                                    weather.weather[0].main == 'Clear' ? <img src="/sun.png" alt="weather" className="img-weather w-52" /> :
                                        weather.weather[0].main == 'Snow' ? <img src="/sun-snow.png" alt="weather" className="img-weather w-52" /> :
                                            weather.weather[0].main == 'Thunderstorm' ? <img src="/sun-thunder.png" alt="weather" className="img-weather w-52" /> :
                                                weather.weather[0].main == 'Drizzle' ? <img src="/sun-rain.png" alt="weather" className="img-weather w-52" /> :
                                                    weather.weather[0].main == 'Mist' ? <img src="/sun-rain.png" alt="weather" className="img-weather w-52" /> :
                                                        weather.weather[0].main == 'Smoke' ? <img src="/sun-rain.png" alt="weather" className="img-weather w-52" /> :
                                                            weather.weather[0].main == 'Haze' ? <img src="/sun-rain.png" alt="weather" className="img-weather w-52" /> :
                                                                weather.weather[0].main == 'Dust' ? <img src="/sun-rain.png" alt="weather" className="img-weather w-52" /> :
                                                                    weather.weather[0].main == 'Fog' ? <img src="/sun-rain.png" alt="weather" className="img-weather w-52" /> : <img src="/sun-rain.png" alt="weather" className="img-weather w-52" />

                        }
                        <h3 className="text-cl font-bold text-center"></h3>
                    </div>
                </div> : <div>loading</div>
        }


        </>
    )
}

export default CurrentCard