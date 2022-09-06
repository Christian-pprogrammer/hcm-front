import React from 'react'
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';
import SettingsPageComp from '../../components/SettingsComp/SettingsPageComp';

const SettingsPageHA =()=>{
    return (
        <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar/>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            <SettingsPageComp/>
        </div>
    </div>
    )
}
export default SettingsPageHA;