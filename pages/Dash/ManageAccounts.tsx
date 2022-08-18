import React from 'react'
import ManageAcc from '../../components/Dashboard/ManageAcc'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import TableAdmin from '../../components/Dashboard/TableAdmin'
import TableManageAcc from '../../components/Dashboard/TableManageAcc'

const ManageAccounts = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <div className="lg:w-[80vw] w-full">
        <ManageAcc/>
        <Navbar/>
        <TableManageAcc/>
        </div>
    </div>
  )
}

export default ManageAccounts