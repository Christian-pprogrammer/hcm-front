import React, { Suspense } from 'react'
import Content from '../../components/Dashboard/Content'
import Navbar from '../../components/Dashboard/Navbar'
// import Sidebar from '../../components/Dashboard/Sidebar'

const SideBarComponent = React.lazy(() => import('../../components/Dashboard/Sidebar'));

const Dashboard = () => {
  return (
    <div className="flex">
        <Suspense fallback='Loading ...'>
          <SideBarComponent />
        </Suspense>
        <div className="lg:w-[80vw]  w-full">
            <Navbar/>
            <Content/>
        </div>
    </div>
  )
}

export default Dashboard