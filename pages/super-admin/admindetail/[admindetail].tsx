import { useRouter } from 'next/router'
import React from 'react'
import TableAdminSuper from '../../../components/Dashboard/groupsmanagedetails/tableadminsuper';
import Navbar from '../../../components/Dashboard/Navbar';
import Sidebar from '../../../components/Dashboard/Sidebar';
import RouteProtector from '../../../middlewares/RouteProtector';
import { system_users } from '../../../utils/constants';

const AdminDetail = () => {
    const router = useRouter();
    const groupNames = router.query
  return (
    <RouteProtector only={system_users.SUPER_ADMIN}>
    <div className="flex">
        <Sidebar/>
        <div className="lg:w-[80vw] w-full">
          <Navbar/>
          <TableAdminSuper name={`${groupNames.groupName}`} id={groupNames.admindetail}/>
        </div>
    </div>
    </RouteProtector>
  )
}

export default AdminDetail