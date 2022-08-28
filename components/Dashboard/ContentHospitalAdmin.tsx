import Link from 'next/link'
import React from 'react'
import { FaArrowUp, FaCheck, FaHome } from 'react-icons/fa'
import { CheckIcon } from '../../icons'
import Chart from './Chart'
import HospitalAdminTable from './HospitalAdminTable'
import RecentAppointment from './RecentAppointment'
import TableAdmin from './TableAdmin'
import TableGA from './TableGA'
import TopAccounts from './TopAccounts'
import TopReviews from './TopReviews'

const ContentHospitalAdmin = () => {
    return (
        <div className="px-2  py-4">
            <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard' > Dasboard/ </Link> 
            </div>
            <div className="flex  gap-2">
                <div className="chart-data min-w-[55vw] max-h-[85vh] bg-white rounded-lg p-5 border-2 border-[#0000003]">
                    <div className="flex justify-between py-5">
                    <h1 className='font-bold '>Service Statistics</h1>
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
                <TopAccounts />
            </div>
            <div className=''>
                <div className='gap-2'>
                    <div className='py-5'>
                        <h1 className='font-bold'>Account Management</h1>
                    </div>
                    <div className='min-w-[55vw] bg-white border-2 rounded-lg h-[50vh] border-[#000000082] overflow-x-auto'>
                        <HospitalAdminTable/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContentHospitalAdmin