import React, {useState} from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import DashboardPatient from '../../components/ManageAppointments/DashboardPatient'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'
import AppointmentList from '../../components/ManageSchedules/AppointmentList'

const AppointmentDashboard = () => {
  const [showAppointmentModal,setShowModalApp] = useState<Boolean>(false);

  return (
    <RouteProtector only={system_users.PATIENT}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar/>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            <AppointmentList  onClose={()=>setShowModalApp(false)} />
        </div>
    </div>
    </RouteProtector>
  )
}

export default AppointmentDashboard
