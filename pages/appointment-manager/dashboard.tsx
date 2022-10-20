import React from 'react'
import ContentAppManager from '../../components/Dashboard/ContentAppmanager'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ContentAppManager/>
    </div>
</div>
  )
}

export default Dashboard
