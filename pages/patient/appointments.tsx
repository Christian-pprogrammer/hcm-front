import React, { useState } from 'react'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'
import Sidebar from '../../components/Dashboard/Sidebar'
import Navbar from '../../components/Dashboard/Navbar'
import AppointmentList from '../../components/ManageSchedules/AppointmentList'
import scheduleService from '../../services/schedules/schedule.service'
import { notifyError, notifySuccess } from '../../components/alert'
import { GetServerSideProps } from 'next';

//Appointment Page for the Landing website page
const LandingAppointmentPage = (data: any) => {
  const [showAppointmentModal,setShowModalApp] = useState<Boolean>(false);

  return (
    <RouteProtector only={system_users.PATIENT}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar/>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            {/* {showAppointmentModal ? <AppointmentList onClose={()=>setShowModalApp(false)}/> : <ManageSchedulesTable data={data} showAppFunc={()=>setShowModalApp(true)}/>} */}
            <AppointmentList onClose={()=>setShowModalApp(false)} />
        </div>
    </div>
    </RouteProtector>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query, res
}) => {
  try{
      const { scheduleId } = query;
      const data = await scheduleService.getAllSchedules();
      if(res.statusCode == 200){
          notifySuccess("Manage Appointments Manager")
      }
      return {
          props : {scheduleId, data}
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


export default LandingAppointmentPage
