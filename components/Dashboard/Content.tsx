import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaCheck, FaHome } from 'react-icons/fa'
import Chart from './Chart'
import TopAccounts from './TopAccounts'
import roleService from '../../services/role/role.service'
import StatisticsService from '../../services/statistics/index.service';
import { AdminHospital } from '../../utils/FormData'
import { notifyError } from '../alert'

const Content = () => {
  const [hospitalNo, setHospitalNo] = useState(0);
  const [usersNo, setUsersNo] = useState(0);
  const [servicesNo, setServicesNo] = useState(0);
  const [hospitalAdmins, setHospitalAdmins] = useState<AdminHospital[]>([]);
    useEffect(() => {
        async function handleRoleFetch() {
            const roles = await roleService.getAllRoles();
        }
        handleRoleFetch();
        async function getSuperAdminStats() {
          try {
              const data = await StatisticsService.getSuperAdminStats();
              setHospitalNo(data.data.hospitalsCount);
              setUsersNo(data.data.usersCount);
              setServicesNo(data.data.servicesCount);
              setHospitalAdmins(data.data.hospitalAdmins);
          } catch (error: any) {
              const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Statistics fetching failed, reload the page!" : error.error;
              notifyError(ERROR_MESSAGE);
          }
        }
        getSuperAdminStats();
    }, [])

    return (
        <div className="px-2 bg-[#F7F7F7] py-4 w-[80vw]">
            <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard' > Dashboard/ </Link>
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
                            <p>Total Hospitals Registered</p>
                            <p className=' text-center text-xl font-bold'>{hospitalNo}</p>
                            <span className='text-backG group-hover:text-black text-right flex absolute bottom-2 right-2 text-[12px]'><FaArrowUp /> +</span>
                        </div>
                        <div className='flex hover:cursor-pointer duration-300 group hover:bg-backG hover:text-white hover:scale-110 lg:h-[15vh] text-[12px] lg:text-base lg:w-60 py-5 px-2 lg:px-5 rounded-lg flex-col relative  bg-inputG'>
                            <p>Total  People Registered</p>
                            <p className=' text-center text-xl font-bold'>{usersNo}</p>
                            <span className='text-backG group-hover:text-black text-right flex absolute bottom-2 right-2 text-[12px]'><FaArrowUp /> +</span>
                        </div>
                        <div className='flex hover:cursor-pointer duration-300 group hover:bg-backG hover:text-white hover:scale-110 lg:h-[15vh] text-[12px] lg:text-base lg:w-60 py-5 px-2 lg:px-5 rounded-lg flex-col relative  bg-inputG'>
                            <p>Total services available</p>
                            <p className=' text-center text-xl font-bold'>{servicesNo}</p>
                            <span className='text-backG group-hover:text-black text-right flex absolute bottom-2 right-2 text-[12px]'><FaArrowUp /> +</span>
                        </div>
                    </div>
                    <div className='lg:max-w-[50vw] w-full '>
                        <Chart />
                    </div>
                </div>
                <TopAccounts hospitalAdmins={hospitalAdmins} />
            </div>
        </div>
    )
}

export default Content
