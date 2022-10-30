import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import ManageUserAdmin from '../../components/ManageUser/ManageUserAdmin'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

const ManageUsersHA = () => {
  return (
    <RouteProtector only={system_users.HOSPITAL_DIRECTOR}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ManageUserAdmin/>
    </div>
</div>
</RouteProtector>
  )
}

export default ManageUsersHA
