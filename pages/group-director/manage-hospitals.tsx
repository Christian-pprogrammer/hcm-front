import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import ManageHospitalsGA from '../../components/ManageHospitals/ManageHospitalsGA'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

const ManageHospitals = () => {
  return (
    <RouteProtector only={system_users.GROUP_DIRECTOR}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ManageHospitalsGA/>
    </div>
</div>
</RouteProtector>
  )
}

export default ManageHospitals
