import React,{ useState } from 'react';
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';
import AppointmentList from '../../components/ManageSchedules/AppointmentList';
import ManageSchedulesTable from '../../components/ManageSchedules/ManageSchedulesTable';
import { GetServerSideProps } from 'next';
import scheduleService from '../../services/schedules/schedule.service';
import { notifyError, notifySuccess } from '../../components/alert';
import RouteProtector from '../../middlewares/RouteProtector';
import { system_users } from '../../utils/constants';

const Appointments = (data:any) => {
    const [showAppointmentModal,setShowModalApp] = useState<Boolean>(false);
    console.log("Appointment Manager",data);
    return (
      <RouteProtector only={system_users.SCHEDULE_MANAGER}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar/>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            {/* {showAppointmentModal ? <AppointmentList onClose={()=>setShowModalApp(false)}/> : <ManageSchedulesTable data={data} showAppFunc={()=>setShowModalApp(true)}/>} */}
            <AppointmentList onClose={()=>setShowModalApp(false)}/>
        </div>
    </div>
    </RouteProtector>
    )
}
export const getServerSideProps: GetServerSideProps = async ({
    res
  }) => {
    try{
        const data = await scheduleService.getAllSchedules();
        if(res.statusCode == 200){
            notifySuccess("Manage Appointments Manager")
        }
        return {
            props : {data}
        }
    }catch(error:any){
        res.statusCode = 404;
        const Error_Message = error.message;
        // reportError(Error_Message);
        notifyError(Error_Message);
        return {
            props : {}
        }
    }
  };

export default Appointments
