import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaHome } from 'react-icons/fa'
import Chart from './Chart'
import StatisticsService from '../../services/statistics/index.service'
import { useSelector } from 'react-redux'
import { notifyError } from '../alert'

const ContentHospitalAdmin = () => {
  const [reschedules, setReschedules] = useState(0);
  const [bookedApps, setBookedApps] = useState(0);
  const [availableSchs, setAvailableSchs] = useState(0);
  const authUser = useSelector((state: any) => state.authUser);
  const hospitalId = authUser.user.hospital.hospitalId;

    useEffect(() => {

        async function getSuperAdminStats() {
          try {
              const data = await StatisticsService.getHospitalAdminStats(hospitalId);
              setReschedules(data.data.bookedAppointments);
              setBookedApps(data.data.bookedAppointments);
              setAvailableSchs(data.data.availableSchedules);
          } catch (error: any) {
              const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Statistics fetching failed, reload the page!" : error.error;
              notifyError(ERROR_MESSAGE);
          }
        }
        getSuperAdminStats();
    }, [hospitalId])

    return (
        <div className="px-2  py-4">
            <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard' > Dasboard/ </Link>
            </div>
            <div className="flex gap-2">
                <div className="chart-data min-w-[77vw] max-h-[85vh] bg-white rounded-lg p-5 border-2 border-[#0000003]">
                    <div className="flex justify-between py-5">
                    <h1 className='font-bold '>Appointment Reviews</h1>
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
                            <p>Rescheduled Appointments</p>
                            <p className=' text-center text-xl font-bold'>{reschedules}</p>
                            <span className='text-backG group-hover:text-black text-right flex absolute bottom-2 right-2 text-[12px]'><FaArrowUp /> +</span>
                        </div>
                        <div className='flex hover:cursor-pointer duration-300 group hover:bg-backG hover:text-white hover:scale-110 lg:h-[15vh] text-[12px] lg:text-base lg:w-60 py-5 px-2 lg:px-5 rounded-lg flex-col relative  bg-inputG'>
                            <p>Booked appointments</p>
                            <p className=' text-center text-xl font-bold'>{bookedApps}</p>
                            <span className='text-backG group-hover:text-black text-right flex absolute bottom-2 right-2 text-[12px]'><FaArrowUp /> +</span>
                        </div>
                        <div className='flex hover:cursor-pointer duration-300 group hover:bg-backG hover:text-white hover:scale-110 lg:h-[15vh] text-[12px] lg:text-base lg:w-60 py-5 px-2 lg:px-5 rounded-lg flex-col relative  bg-inputG'>
                            <p>Available schedules</p>
                            <p className=' text-center text-xl font-bold'>{availableSchs}</p>
                            <span className='text-backG group-hover:text-black text-right flex absolute bottom-2 right-2 text-[12px]'><FaArrowUp /> +</span>
                        </div>
                    </div>
                    <div className='lg:max-w-[45vw] py-10 w-full '>
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentHospitalAdmin
