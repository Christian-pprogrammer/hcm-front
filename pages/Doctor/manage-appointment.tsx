import React,{ useState} from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import AppointmentList from '../../components/ManageSchedules/AppointmentList'
import ManageSchedulesTable from '../../components/ManageSchedules/ManageSchedulesTable'

const ManageAppointment = () => {
    const [showAppointmentModal,setShowModalApp] = useState<Boolean>(false)
    return (
    <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar/>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            {showAppointmentModal ? <AppointmentList onClose={()=>setShowModalApp(false)}/> : <ManageSchedulesTable showAppFunc={()=>setShowModalApp(true)}/>}
        </div>
    </div>
    )
}
export default ManageAppointment;