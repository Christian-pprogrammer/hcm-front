import React from 'react'
import { FaCalendarAlt, FaDatabase } from 'react-icons/fa'

const Services=()=> {
    return (
        <div className="min-h-screen  bg-white px-8 lg:px-[8em]">
            <div className="flex justify-center place-items-center ">
                <div className="text-backG flex py-10 lg:py-10  gap-6 ">
                    <img src="/assets/arrow.svg" alt="" /><span>Our Services</span>
                </div>
                <div className="text-center flex-auto  ">
                    <h1 className="font-semibold text-center text-[14px] align-center flex justify-center text-xl ">Different Services that we offer</h1>
                </div>
            </div>  
            <div className="flex flex-col text-[14px] text-center justify-center ">
                    <p>Text message-based health interventions provide patients with reminders, education, or self-management assistance for a broad spectrum of health conditions. Interventions are most frequently used as a part of broader health promotion efforts or to help individuals manage chronic diseases1. Text messages may be standardized or tailored to specific patients and sent at varied frequencies based on the intervention2. Text messaging can be combined with other</p>
            </div>
                    <div className="grid  gap-2 lg:grid-cols-2 place-items-center  py-10 ">
                <div className="bg-white shadow-inner drop-shadow-lg duration-500 hover:text-white hover:bg-backG group text-black p-5 min-h-[60vh] min-w-[30vw] rounded-xl hover:cursor-pointer">
                    <div className='bg-[#F3F8FF]    text-backG h-24 w-24 rounded-lg flex justify-center place-items-center'>
                        <FaDatabase/>
                    </div>
                    <div className='py-10'>
                        <h1 className='font-bold '>Data is always Real Time 24 hours Full, Data is kept and transmitted with integrity.</h1>
                        <p className='text-[12px] py-5 group-hover:text-[#ffffff67] text-[#00000097]' >e, treatments as needed1. Text message software and smartphone apps can be integrated into electronic health records (EHRs) to send alerts and reminders to patients e, treatments as needed1. Text message software and smartphone apps can be integrated into electronic health records (EHRs) to send alerts and reminders to patients</p>
                    </div>
                </div>
                <div className="bg-backG hover:cursor-pointer hover:scale-110 duration-300  p-5 min-h-[60vh] min-w-[30vw] rounded-xl hover">
                    <div className='bg-white   text-backG h-24 w-24 rounded-lg flex justify-center place-items-center'>
                        <FaCalendarAlt/>
                    </div>
                    <div className='py-10 text-white'>
                        <h1 className='font-bold '>Book your appointment now and get free access quickly with health and time.</h1>
                        <p className='text-[12px] py-5 text-[#ffffff97]' >e, treatments as needed1. Text message software and smartphone apps can be integrated into electronic health records (EHRs) to send alerts and reminders to patients e, treatments as needed1. Text message software and smartphone apps can be integrated into electronic health records (EHRs) to send alerts and reminders to patients</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services