import React from 'react'
import { FaStar } from 'react-icons/fa'
const Reviews = () => {
    return (
        <div className="min-h-screen  bg-white px-8 lg:px-[8em]">
            <div className="flex justify-center place-items-center ">
                <div className="text-backG flex py-10 lg:py-10  gap-6 ">
                    <img src="/assets/arrow.svg" alt="" /><span>Live Reviews</span>
                </div>
                <div className="text-center flex-auto  ">
                    <h1 className="font-semibold text-center text-[14px] align-center flex justify-center text-xl ">The Best opinions Review</h1>
                </div>
            </div>
            <div className="flex py-10 justify-between gap-6">
                <div className='h-[70vh]  hidden md:flex relative w-[30vw] rounded-full bg-backG'>
                    <img src="https://www.kindpng.com/picc/m/62-625002_female-doctor-transparent-background-hd-png-download.png" alt="" className='absolute w-full rounded-full h-full bottom-0 left-0 right-0' />
                </div>
                <div className='p-10 flex-1'>
                    <p className='text-black text-[14px] text-opacity-60'>“Text message-based health interventions provide patients with reminders, education, or self-management assistance for a broad spectrum of health conditions. Interventions are most frequently used as a part of broader health promotion efforts or to help individuals manage chronic diseases1. Text messages may be standardized or tailored to specific patients and sent at varied frequencies based on the intervention2. Text messaging can be combined with other approaches or delivered as part of a stepped care or progressive intervention that is tailored to patients’ needs, beginning with the least intensive treatment and moving to more intensive, and often expensive, treatments as needed1. Text message software and smartphone apps can be integrated into electronic health records (EHRs) to send alerts and reminders to patients”</p>
                    <div className='py-10 '>
                        <h1 className='text-backG text-2xl font-semibold'>Dr Maxwell Simons</h1>
                        <span className='font-bold'>Senior Director at FAISAL Hospital</span>
                        <ul className='flex gap-1 py-2 text-[18px] text-yellow-300'>
                            <li><FaStar /> </li>
                            <li><FaStar /> </li>
                            <li><FaStar /> </li>
                            <li><FaStar /> </li>
                            <li><FaStar /> </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Reviews