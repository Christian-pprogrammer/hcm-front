import React from 'react'
import ContentHospitalAdmin from '../../components/Dashboard/ContentHospitalAdmin'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ContentHospitalAdmin/>
    </div>
</div>
  )
}

export default Dashboard