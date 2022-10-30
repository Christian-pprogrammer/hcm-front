import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import SettingsPage from '../../components/Dashboard/SettingsPage'
import Sidebar from '../../components/Dashboard/Sidebar'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

const Settings = () => {
  return (
    <RouteProtector only={system_users.SUPER_ADMIN}>
    <div className="flex">
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
    <Navbar/>
    <SettingsPage/>
    </div>
</div>
</RouteProtector>
  )
}

export default Settings
