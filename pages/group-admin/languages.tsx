import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import LanguagesTable from '../../components/Languages/LanguagesTable'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

const Languages = () => {
  return (
    <RouteProtector only={system_users.GROUP_ADMIN}>
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <LanguagesTable/>
    </div>
</div>
</RouteProtector>
  )
}

export default Languages
