import React, { Suspense } from 'react'
import Content from '../../components/Dashboard/Content'
import Navbar from '../../components/Dashboard/Navbar'
import WelcomeLoader from '../../components/loaders/welcomeLoader';
import RouteProtector from '../../middlewares/RouteProtector';
import { system_users } from '../../utils/constants';
// import Sidebar from '../../components/Dashboard/Sidebar'

const SideBarComponent = React.lazy(() => import('../../components/Dashboard/Sidebar'));

const Dashboard = () => {
  return (
    <RouteProtector only={system_users.SUPER_ADMIN}>
    <div className="flex">
        <Suspense fallback={<WelcomeLoader/>}>
          <SideBarComponent />
        </Suspense>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            <Content/>
        </div>
    </div>
    </RouteProtector>
  )
}

export default Dashboard
