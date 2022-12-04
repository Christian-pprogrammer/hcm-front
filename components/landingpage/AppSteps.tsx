import Image from 'next/image';
import React from 'react';
import { FaCalendarDay } from 'react-icons/fa';
import { ArrowSvg, StarSvg } from '../../icons';

const AppSteps = () => {
    return (
        <div className='min-h-screen bg-white px-8 lg:px-[8em]'>
            <div className='pt-10'>
                <div className="text-backG py-10 lg:py-0 flex gap-6 ">
                    <ArrowSvg/> <span>The Appointment Steps</span>
                </div>
            </div>
            <div className="flex md:flex-col lg:flex-row md:py-2 lg:py-[5em] gap-2 md:gap-6 justify-around">
                <div className='md:px-10   px-4 flex flex-col gap-8'>
                    <h1 className="font-semibold ">Steps to create appointment</h1>
                    <p className='sm:text-[12px] text-[14px]'>
                        Text message-based health interventions provide patients with reminders, education, or self-management assistance for a bbraids.                    </p>
                    <ul>
                        <li className='flex gap-2  md:gap-6 '><StarSvg/><span className='py-3 text-[12px] md:text-[14px]'>Text message-based health interventions provide patients with reminders, education, or self-management assistance for a bbraids.</span></li>
                        <li className='flex gap-2  md:gap-6 '><StarSvg/><span className='py-3 text-[12px] md:text-[14px]'>Text message-based health interventions provide patients with reminders, education, or self-management assistance for a bbraids.</span></li>
                        <li className='flex gap-2  md:gap-6 '><StarSvg/><span className='py-3 text-[12px] md:text-[14px]'>Text message-based health interventions provide patients with reminders, education, or self-management assistance for a bbraids.</span></li>
                        <li className='flex gap-2  md:gap-6 '><StarSvg/><span className='py-3 text-[12px] md:text-[14px]'>Text message-based health interventions provide patients with reminders, education, or self-management assistance for a bbraids.</span></li>
                    </ul>
                    <div>
                    <button className='hover:bg-white hover:border-backG hover:border-2 hover:shadow-none bg-backG hover:text-backG duration-700 text-white font-semibold p-4 px-5 text-[12px] md:text-[16px] md:p-6 flex justify-center gap-6 place-items-center shadow-backG shadow-lg md:px-10 rounded-full'><FaCalendarDay/> Book appointment</button>
                    </div>
                </div>
                <div className='flex  justify-center place-items-center'>
                <Image className='rounded-lg hidden  md:flex md:px-2 sm:py-5 object-cover' src="/static/doctorsystem.jpg" alt="" width="800" height="600"/>
                </div>
            </div>
        </div>
    )
}

export default AppSteps;