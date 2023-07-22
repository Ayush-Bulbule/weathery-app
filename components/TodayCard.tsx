import React from 'react'

const TodayCard = () => {
    return (
        <div className="flex flex-col bg-gray-100 p-8 w-full rounded-xl">
            <p className='font-semibold text-gray-600 uppercase text-xs pb-3'>Today'sForcast</p>
            <div className="flex">
                {/* Time item */}
                <div className="flex flex-col w-1/2 justify-center items-center border-r border-gray-400">
                    <p className="text-xs">06:30 AM</p>
                    <img src="./suni.png" className='object-contain' alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                    <p className="text-md font-bold">31°C</p>
                </div>

                <div className="flex flex-col w-1/2 justify-center items-center border-r border-gray-400">
                    <p className="text-xs">06:30 AM</p>
                    <img src="./suni.png" className='object-contain' alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                    <p className="text-md font-bold">31°C</p>
                </div>

                <div className="flex flex-col w-1/2 justify-center items-center border-r border-gray-400">
                    <p className="text-xs">06:30 AM</p>
                    <img src="./cloud.png" className='object-contain' alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                    <p className="text-md font-bold">31°C</p>
                </div>


                <div className="flex flex-col w-1/2 justify-center items-center border-r border-gray-400">
                    <p className="text-xs">06:30 AM</p>
                    <img src="./sun.png" className='object-contain' alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                    <p className="text-md font-bold">31°C</p>
                </div>


                <div className="flex flex-col w-1/2 justify-center items-center border-r border-gray-400">
                    <p className="text-xs">06:30 AM</p>
                    <img src="./sun-rain.png" className='object-contain' alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                    <p className="text-md font-bold">31°C</p>
                </div>

                <div className="flex flex-col w-1/2 justify-center items-center  border-gray-400">
                    <p className="text-xs">06:30 AM</p>
                    <img src="./syn-cloud.png" className='object-contain' alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                    <p className="text-md font-bold">31°C</p>
                </div>
            </div>
        </div>
    )
}

export default TodayCard