import React from 'react'
import { BellIcon, Camera, CameraIcon, Clapperboard, HistoryIcon, Home,  TvIcon } from 'lucide-react'
function Sidebar() {
    return (
        <>
            <div>
                <ul className='text-2xl pl-5 pr-32'>
                    <li className='p-3 hover:bg-gray-300 flex items-center mb-4'><Home/><a href=''>Home</a></li>
                </ul>
                <ul className='text-2xl pl-5 pr-32'>
                    <li className='p-3 hover:bg-gray-300 flex items-center mb-4'><Clapperboard/>Shorts</li>
                </ul>
                <ul className='text-2xl pl-5 pr-32'>
                    <li className='p-3 hover:bg-gray-300 flex items-center mb-4'><BellIcon/>Subscriptions</li>
                </ul>
                <ul className='text-2xl pl-5 pr-32'>
                    <li className='p-3 hover:bg-gray-300 flex items-center mb-4'><TvIcon/>Your Channel</li>
                </ul>
                <ul className='text-2xl pl-5 pr-32'>
                    <li className='p-3 hover:bg-gray-300 flex items-center mb-4'><HistoryIcon/>History</li>
                </ul>
                <ul className='text-2xl pl-5 pr-32'>
                    <li className='p-3 hover:bg-gray-300 flex items-center mb-4'><CameraIcon/>Your Videos</li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar 