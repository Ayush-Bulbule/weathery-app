import React from 'react'

const WeekCard = () => {
    return (
        <div className="w-2/6 h-full p-4 pt-16 pr-8" >
            <div className="flex flex-col bg-gray-100 p-8 w-full rounded-xl h-full">
                <p className='font-semibold text-gray-600 uppercase text-xs'>7 day Forcast</p>

                {/* Day Item */}
                <div className="flex w-full justify-between py-4 items-center border-b-2 border-gray-200">
                    <p>Today</p>
                    <div className="flex items-center">
                        <img src="./sun.png" alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                        <p className='mx-3'>Sunny</p>

                    </div>
                    <p>22/36</p>
                </div>
                <div className="flex w-full justify-between py-4 items-center border-b-2 border-gray-200">
                    <p>Today</p>
                    <div className="flex items-center">
                        <img src="./sun.png" alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                        <p className='mx-3'>Sunny</p>

                    </div>
                    <p>22/36</p>
                </div>
                <div className="flex w-full justify-between py-4 items-center border-b-2 border-gray-200">
                    <p>Today</p>
                    <div className="flex items-center">
                        <img src="./sun.png" alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                        <p className='mx-3'>Sunny</p>

                    </div>
                    <p>22/36</p>
                </div>
                <div className="flex w-full justify-between py-4 items-center border-b-2 border-gray-200">
                    <p>Today</p>
                    <div className="flex items-center">
                        <img src="./sun.png" alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                        <p className='mx-3'>Sunny</p>

                    </div>
                    <p>22/36</p>
                </div>
                <div className="flex w-full justify-between py-4 items-center border-b-2 border-gray-200">
                    <p>Today</p>
                    <div className="flex items-center">
                        <img src="./sun.png" alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                        <p className='mx-3'>Sunny</p>

                    </div>
                    <p>22/36</p>
                </div>
                <div className="flex w-full justify-between py-4 items-center border-b-2 border-gray-200">
                    <p>Today</p>
                    <div className="flex items-center">
                        <img src="./sun.png" alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                        <p className='mx-3'>Sunny</p>

                    </div>
                    <p>22/36</p>
                </div>
                <div className="flex w-full justify-between py-4 items-center border-b-2 border-gray-200">
                    <p>Today</p>
                    <div className="flex items-center">
                        <img src="./sun.png" alt="sun" style={{ width: 50 + "px", height: 50 + "px" }} />
                        <p className='mx-3'>Sunny</p>

                    </div>
                    <p>22/36</p>
                </div>
            </div>
        </div>
    )
}

export default WeekCard