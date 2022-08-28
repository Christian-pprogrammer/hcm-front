import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import ManageServicesGA from '../../components/ManageServices/ManageServicesGA'

const ManageService = () => {
  return (
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ManageServicesGA/>
    </div>
</div>
  )
}

export default ManageService