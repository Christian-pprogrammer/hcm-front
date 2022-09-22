import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import ManageUserAdmin from '../../components/ManageUser/ManageUserAdmin'

const ManageUsersHA = () => {
  return (
    <div className='flex gap-0 bg-[#F7F7F7] '>
    <Sidebar/>
    <div className="lg:w-[80vw]  w-full">
        <Navbar/>
        <ManageUserAdmin/>
    </div>
</div>
  )
}

export default ManageUsersHA