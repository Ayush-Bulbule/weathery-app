'use client'
import React from 'react'

const DetailCard = () => {
    return (
        <div className="flex flex-col bg-gray-100 p-8 w-full mt-4 rounded-xl">
            <p className='font-semibold text-gray-600 uppercase text-xs pb-3'>Air Conditions</p>

            <div className="flex">
                <div className="w-1/2"></div>
                <div className="w-1/2"></div>
            </div>
        </div>

    )
}

export default DetailCard