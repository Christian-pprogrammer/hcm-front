import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import ManageServicesGA from '../../components/ManageServices/ManageServicesGA'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

const ManageService = () => {
  return (
    <RouteProtector only={system_users.SUPER_ADMIN}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ManageServicesGA/>
    </div>
</div>
</RouteProtector>
  )
}

export default ManageService
