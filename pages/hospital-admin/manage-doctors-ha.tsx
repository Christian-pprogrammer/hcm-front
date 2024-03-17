import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import ManageDoctorAdmin from '../../components/ManageDoctor/ManageDoctorAdmin'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

const ManageDoctorsHA = () => {
  return (
    <RouteProtector only={system_users.HOSPITAL_ADMIN}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ManageDoctorAdmin/>
    </div>
</div>
</RouteProtector>
  )
}

export default ManageDoctorsHA
