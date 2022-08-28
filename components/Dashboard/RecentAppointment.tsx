import React from 'react'
import DoughnutChartPage from './DoughnutChartPage'

const RecentAppointment = () => {
  return (
    <div className='min-w-[22vw] bg-white relative rounded-lg border-2 h-[50vh] border-[#000000082] border-solid'>
    <div className='px-5 pb-5 pt-4 text-[12px] font-bold'>
        <span> Services  </span>
    </div>
    <div className='w-full flex flex-col justify-center place-items-center bg-white'>
        <DoughnutChartPage/>
    </div>
    </div>
  )
}

export default RecentAppointment