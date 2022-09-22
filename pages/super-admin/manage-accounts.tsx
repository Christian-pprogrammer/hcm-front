import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import TableManageAcc from '../../components/Dashboard/TableManageAcc'

const ManageAccounts = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <div className="lg:w-[80vw] w-full">
        <Navbar/>
        <TableManageAcc/>
        </div>
    </div>
  )
}

export default ManageAccounts