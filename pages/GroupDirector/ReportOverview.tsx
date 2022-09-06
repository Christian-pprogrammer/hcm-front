import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import ManageServicesGA from '../../components/ManageServices/ManageServicesGA'
import ReportFile from '../../components/ReportStatus/ReportFile'

const ReportOverview = () => {
  return (
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ReportFile/>
    </div>
</div>
  )
}

export default ReportOverview