import React, {useState} from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'
import AppointmentList from '../../components/ManageSchedules/AppointmentList'
import ManageSchedulesTable from '../../components/ManageSchedules/ManageSchedulesTable'

const AvailableSchedules = () => {
  const [showAppointmentModal, setShowModalApp] = useState<Boolean>(false);

  return (
    <RouteProtector only={system_users.PATIENT}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar/>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            {showAppointmentModal ? <AppointmentList onClose={() => setShowModalApp(false)} /> : <ManageSchedulesTable/>}
        </div>
    </div>
    </RouteProtector>
  )
}

export default AvailableSchedules
