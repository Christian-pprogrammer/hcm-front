import React from 'react'
import ContentAppManager from '../../components/Dashboard/ContentAppmanager'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

const Dashboard = () => {
  return (
    <RouteProtector only={system_users.SCHEDULE_MANAGER}>
      <div className='flex gap-0 bg-[#F7F7F7] '>
        <Sidebar />
        <div className="lg:w-[80vw]  w-full">
        <Navbar title="Dashboard and Statistics" />
          <ContentAppManager />
        </div>
      </div>
    </RouteProtector>
  )
}

export default Dashboard
