import Link from 'next/link'
import React from 'react'
import { FaArrowUp, FaHome } from 'react-icons/fa'
import CalendarDoctorComp from './CalendarDoctorComp'
import Chart from './Chart'
import RecentAppointment from './RecentAppointment'
import TableGA from './TableGA'
import TopAccounts from './TopAccounts'

const ContentDoctor = () => {
    return (
        <div className="px-2  py-4">
            <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard' > Dashboard/ </Link>
            </div>
            <div className="flex gap-2">
                <div className='page-first-content '>
                    <div className="chart-data min-w-[55vw] max-h-[85vh] bg-white rounded-lg p-5 border-2 border-[#0000003]">
                        <div className="flex justify-between py-5">
                            <h1 className='font-bold '>Appointment Analysis</h1>
                            <div className="px-2 ">
                                <select name="" id="" className='bg-white border-2 border-[#00000020]  rounded-2xl outline-none px-2 py-1'>
                                    <option defaultValue="today">Today</option>
                                    <option defaultValue="today">Yesterday</option>
                                    <option defaultValue="today">Week</option>
                                    <option defaultValue="today">Month</option>
                                </select>
                            </div>
                        </div>
                        <div className='lg:max-w-[50vw] py-10 w-full '>
                            <Chart />
                        </div>
                    </div>
                    <div className='gap-2'>
                        <div className='py-5'>
                            <h1 className='font-bold'>Latest Services</h1>
                        </div>
                        <div className='min-w-[55vw] grid grid-cols-2 gap-4 place-items-center py-2 bg-white border-2 rounded-lg border-[#000000082] '>
                            <div className='py-2 px-2 w-72 h-32 text-black rounded-lg  bg-inputG'>
                                <span className='text-[12px] text-backG'>Today s Patients</span>
                                <div className='pt-2 text-center'>
                                <h5 className=' font-bold text-xl'>Orthodontics Services</h5>
                                <p className='font-bold text-2xl'>64</p>
                                </div>
                                <span className='text-[12px] text-backG float-right flex'><FaArrowUp/>+1</span>
                            </div>
                            <div className='py-2 px-2 w-72 h-32 text-black rounded-lg  bg-inputG'>
                                <span className='text-[12px] text-backG'>Active Schedules</span>
                                <div className='pt-2 text-center'>
                                <h5 className=' font-bold text-xl'>Orthodontics Services</h5>
                                <p className='font-bold text-2xl'>4</p>
                                </div>
                                <span className='text-[12px] text-backG float-right flex'><FaArrowUp/>+1</span>
                            </div>
                            <div className='py-2 px-2 w-72 h-32 text-black rounded-lg  bg-inputG'>
                                <span className='text-[12px] text-backG'>Booked Appointments</span>
                                <div className='pt-2 text-center'>
                                <h5 className=' font-bold text-xl'>Orthodontics Services</h5>
                                <p className='font-bold text-2xl'>12</p>
                                </div>
                                <span className='text-[12px] text-backG float-right flex'><FaArrowUp/>+1</span>
                            </div>
                            <div className='py-2 px-2 w-72 h-32 text-black rounded-lg  bg-inputG'>
                                <span className='text-[12px] text-backG'>Attended Patients</span>
                                <div className='pt-2 text-center'>
                                <p className='font-bold text-2xl'>24</p>
                                </div>
                                <span className='text-[12px] text-backG float-right flex'><FaArrowUp/>+1</span>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className='bg-white min-w-[20vw]  hidden lg:block relative  rounded-lg'>
                    <CalendarDoctorComp />
                    <div className='py-10 flex flex-col gap-[2em] px-5'>
                        <h5>
                            Different Schedule Reviews
                        </h5>
                        <div className='p-5 hover:bg-backG hover:text-white group border-l-2 hover:border-black hover:cursor-pointer hover:scale-110 duration-300 border-backG'>
                            <span className='text-[10px] text-backG group-hover:text-white'>12/02/2012</span>
                            <p className='text-[12px] font-bold text-[#00000073] group-hover:text-white group-hover:text-opacity-60'>Latest Schedule</p>
                            <h5 className='font-bold text-xl'>Orthodontics Services</h5>
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ContentDoctor