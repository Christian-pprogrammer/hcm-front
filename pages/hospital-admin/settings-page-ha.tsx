import React from 'react'
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';
import SettingsPageComp from '../../components/SettingsComp/SettingsPageComp';
import RouteProtector from '../../middlewares/RouteProtector';
import { system_users } from '../../utils/constants';

const SettingsPageHA =()=>{
    return (
      <RouteProtector only={system_users.HOSPITAL_ADMIN}>
        <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar/>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            <SettingsPageComp/>
        </div>
    </div>
    </RouteProtector>
    )
}
export default SettingsPageHA;
