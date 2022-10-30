import React from 'react'
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';
import ReportFile from '../../components/ReportStatus/ReportFile';
import SettingsPageComp from '../../components/SettingsComp/SettingsPageComp';
import RouteProtector from '../../middlewares/RouteProtector';
import { system_users } from '../../utils/constants';


//Report Overview Hospital Director
const ReportOverviewHD =()=>{
    return (
      <RouteProtector only={system_users.HOSPITAL_DIRECTOR}>
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
export default ReportOverviewHD;
