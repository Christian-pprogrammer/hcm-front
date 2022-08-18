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
        <div className="px-2 py-4">
            <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/Dash/Dashboard' > Dasboard/ </Link> 
            </div>
            <div className="flex gap-2">
                <div className="chart-data min-w-[55vw] max-h-[85vh] bg-white rounded-lg p-5 border-2 border-[#0000003]">
                    <h1 className='font-bold '>Account Statistics</h1>
                    <div className='flex gap-8 py-5'>
                        <div className='flex hover:cursor-pointer duration-300 group hover:bg-backG hover:text-white hover:scale-110 h-[15vh] w-60 p-5 rounded-lg flex-col relative  bg-inputG'>
                            <p>Total Account Registered </p>
                            <p className=' text-center text-xl font-bold'>02</p>
                            <span className='text-backG group-hover:text-black text-right flex absolute bottom-2 right-2 text-[12px]'><FaArrowUp /> +2</span>
                        </div>
                        <div className='flex hover:cursor-pointer duration-300 group hover:bg-backG hover:text-white hover:scale-110 h-[15vh] w-60 p-5 rounded-lg flex-col relative  bg-inputG'>
                            <p>Total Account Registered </p>
                            <p className=' text-center text-xl font-bold'>02</p>
                            <span className='text-backG group-hover:text-black text-right flex absolute bottom-2 right-2 text-[12px]'><FaArrowUp /> +2</span>
                        </div>
                        <div className='flex hover:cursor-pointer duration-300 group hover:bg-backG hover:text-white hover:scale-110 h-[15vh] w-60 p-5 rounded-lg flex-col relative  bg-inputG'>
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
                    <div className='lg:w-[55vw] overflow-none   bg-white rounded-lg p-0 border-2 border-[#000000082]'>
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