import React from 'react';
import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';
import TableManageAcc from '../../components/Dashboard/TableManageAcc';
import RouteProtector from '../../middlewares/RouteProtector';
import { system_users } from '../../utils/constants';

const ManageAccounts = () => {
  return (
    <RouteProtector only={system_users.SUPER_ADMIN}>
    <div className="flex">
        <Sidebar/>
        <div className="lg:w-[80vw] w-full">
          <Navbar/>
          <TableManageAcc/>
        </div>
    </div>
    </RouteProtector>
  )
}

export default ManageAccounts
