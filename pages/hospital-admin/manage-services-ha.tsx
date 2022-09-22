import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import ServicesList from '../../components/ManageServices/ServicesList'

const ManageUsersHA = () => {
  return (
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ServicesList/>
    </div>
</div>
  )
}

export default ManageUsersHA