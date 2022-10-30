import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import ManageServicesGA from '../../components/ManageServices/ManageServicesGA'
import ReportFile from '../../components/ReportStatus/ReportFile'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

const ReportOverview = () => {
  return (
    <RouteProtector only={system_users.GROUP_DIRECTOR}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ReportFile/>
    </div>
</div>
</RouteProtector>
  )
}

export default ReportOverview
