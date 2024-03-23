import React from 'react';
import { useRouter } from 'next/router';

import Navbar from '../../components/Dashboard/Navbar';
import Sidebar from '../../components/Dashboard/Sidebar';
import TableManageAcc from '../../components/Dashboard/TableManageAcc';
import ManageAdminHospitalPage from "../../components/ManageHospitals/details/ManageAdminHospitalPage";
import RouteProtector from '../../middlewares/RouteProtector';
import { system_users } from '../../utils/constants';

const ManageAccounts = () => {
  const router = useRouter();
  const hospital_details = router.query
return (
  <RouteProtector only={system_users.SUPER_ADMIN}>
  <div className="flex">
      <Sidebar/>
      <div className="lg:w-[80vw] w-full">
        <Navbar/>
        <ManageAdminHospitalPage id={hospital_details.groupdetail}/>
      </div>
  </div>
  </RouteProtector>
)
}

export default ManageAccounts
