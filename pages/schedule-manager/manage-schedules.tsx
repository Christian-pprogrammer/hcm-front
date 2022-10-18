import { GetServerSideProps } from 'next'
import React,{ useState } from 'react'
import { notifyError } from '../../components/alert'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import AppointmentList from '../../components/ManageSchedules/AppointmentList'
import ManageSchedulesTable from '../../components/ManageSchedules/ManageSchedulesTable'
import scheduleService from '../../services/schedules/schedule.service'

const ManageSchedules = (data:any) => {
    const [showAppointmentModal,setShowModalApp] = useState<Boolean>(false);
    console.log("Schedule Manager",data);
    
    return (
    <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar/>
        <div className="lg:w-[80vw]  w-fu ll">
            <Navbar/>
            {showAppointmentModal ? <AppointmentList onClose={()=>setShowModalApp(false)}/> : <ManageSchedulesTable data={data} showAppFunc={()=>setShowModalApp(true)}/>}
        </div>
    </div>
    )
}
export const getServerSideProps: GetServerSideProps = async ({
    res
  }) => {
    try{
        const data = await scheduleService.getAllSchedules();
        return {
            props : {data}
        }
    }catch(error:any){
        res.statusCode = 404;
        const Error_Message = error.message;
        reportError(Error_Message);
        notifyError(Error_Message);
        return {
            props : {}
        }
    }
  };
export default ManageSchedules