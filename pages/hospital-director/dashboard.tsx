import React from 'react'
import ContentHospitalAdmin from '../../components/Dashboard/ContentHospitalAdmin'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

const Dashboard = () => {
  return (
    <RouteProtector only={system_users.HOSPITAL_DIRECTOR}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ContentHospitalAdmin/>
    </div>
</div>
</RouteProtector>
  )
}

export default Dashboard
