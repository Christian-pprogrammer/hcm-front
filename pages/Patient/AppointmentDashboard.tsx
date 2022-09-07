import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import DashboardPatient from '../../components/ManageAppointments/DashboardPatient'

const AppointmentDashboard = () => {
  return (
    <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar/>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            <DashboardPatient/>
        </div>
    </div>
  )
}

export default AppointmentDashboard