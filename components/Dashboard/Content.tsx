import Link from 'next/link'
import React from 'react'
import { FaArrowUp, FaCheck, FaHome } from 'react-icons/fa'
import { CheckIcon } from '../../icons'
import Chart from './Chart'
import TableAdmin from './TableAdmin'
import TopAccounts from './TopAccounts'
import TopReviews from './TopReviews'

const Content = () => {
    return (
        <div className="px-2 bg-[#F7F7F7] py-4">
            <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard' > Dasboard/ </Link> 
            </div>
            <div className="flex  gap-2">
                <div className="chart-data min-w-[55vw] sm:max-h-[85vh] bg-white rounded-lg py-5 px-2 lg:p-5 border-2 border-[#0000003]">
                    <div className="flex justify-between">
                    <h1 className='font-bold '>Account Statistics</h1>
                    <div className="px-2 ">
                        <select name="" id="" className='bg-white border-2 border-[#00000020]  rounded-2xl outline-none px-2 py-1'>
                            <option defaultValue="today">Today</option>
                            <option defaultValue="today">Yesterday</option>
                            <option defaultValue="today">Week</option>
                            <option defaultValue="today">Month</option>
                        </select>
                    </div>
                    </div>

                    <div className='flex lg:gap-8 gap-2 py-5 flex-col md:flex-row'>
                        <div className='flex hover:cursor-pointer duration-300 group hover:bg-backG hover:text-white hover:scale-110 lg:h-[15vh] text-[12px] lg:text-base lg:w-60 py-5 px-2 lg:px-5 rounded-lg flex-col relative  bg-inputG'>
                            <p>Total Account Registered </p>
                            <p className=' text-center text-xl font-bold'>02</p>
                            <span className='text-backG group-hover:text-black text-right flex absolute bottom-2 right-2 text-[12px]'><FaArrowUp /> +2</span>
                        </div>
                        <div className='flex hover:cursor-pointer duration-300 group hover:bg-backG hover:text-white hover:scale-110 lg:h-[15vh] text-[12px] lg:text-base lg:w-60 py-5 px-2 lg:px-5 rounded-lg flex-col relative  bg-inputG'>
                            <p>Total  Registered </p>
                            <p className=' text-center text-xl font-bold'>02</p>
                            <span className='text-backG group-hover:text-black text-right flex absolute bottom-2 right-2 text-[12px]'><FaArrowUp /> +2</span>
                        </div>
                        <div className='flex hover:cursor-pointer duration-300 group hover:bg-backG hover:text-white hover:scale-110 lg:h-[15vh] text-[12px] lg:text-base lg:w-60 py-5 px-2 lg:px-5 rounded-lg flex-col relative  bg-inputG'>
                            <p>Total Account Registered </p>
                            <p className=' text-center text-xl font-bold'>02</p>
                            <span className='text-backG group-hover:text-black text-right flex absolute bottom-2 right-2 text-[12px]'><FaArrowUp /> +2</span>
                        </div>
                    </div>
                    <div className='lg:max-w-[50vw] w-full '>
                        <Chart />
                    </div>
                </div>
                <TopAccounts />
            </div>
            <div className='flex gap-2'>
                <div className='gap-2'>
                    <div className='py-5'>
                        <h1 className='font-bold'>Account Management</h1>
                    </div>
                    <div className='w-full bg-white border-2 rounded-lg h-[50vh] border-[#000000082] overflow-x-auto'>
                        <TableAdmin />
                    </div>
                </div>
                <div className='hidden lg:block '>
                    <div className='py-5'>
                        <h1 className='font-bold'>Top Reviews</h1>
                    </div>
                    <TopReviews />
                </div>
            </div>

        </div>
    )
}

export default Content