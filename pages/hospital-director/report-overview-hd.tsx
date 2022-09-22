import React from 'react'
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';
import ReportFile from '../../components/ReportStatus/ReportFile';
import SettingsPageComp from '../../components/SettingsComp/SettingsPageComp';


//Report Overview Hospital Director
const ReportOverviewHD =()=>{
    return (
        <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar/>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            <ReportFile/>
        </div>
    </div>
    )
}
export default ReportOverviewHD;