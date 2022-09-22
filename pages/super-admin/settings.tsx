import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import SettingsPage from '../../components/Dashboard/SettingsPage'
import Sidebar from '../../components/Dashboard/Sidebar'

const Settings = () => {
  return (
    <div className="flex">
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
    <Navbar/>
    <SettingsPage/>
    </div>
</div>
  )
}

export default Settings