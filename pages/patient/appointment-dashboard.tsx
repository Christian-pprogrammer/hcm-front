import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import DashboardPatient from '../../components/ManageAppointments/DashboardPatient'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

const AppointmentDashboard = () => {
  return (
    <RouteProtector only={system_users.PATIENT}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar/>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            <DashboardPatient/>
        </div>
    </div>
    </RouteProtector>
  )
}

export default AppointmentDashboard
