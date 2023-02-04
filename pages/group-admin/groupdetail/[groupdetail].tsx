import { useRouter } from 'next/router'
import React from 'react'
import TableAdminSuper from '../../../components/Dashboard/groupsmanagedetails/tableadminsuper';
import Navbar from '../../../components/Dashboard/Navbar';
import Sidebar from '../../../components/Dashboard/Sidebar';
import ManageAdminHospitalPage from '../../../components/ManageHospitals/details/ManageAdminHospitalPage';
import RouteProtector from '../../../middlewares/RouteProtector';
import { system_users } from '../../../utils/constants';

const GroupDetail = () => {
    const router = useRouter();
    const hospital_details = router.query
  return (
    <RouteProtector only={system_users.GROUP_ADMIN}>
    <div className="flex">
        <Sidebar/>
        <div className="lg:w-[80vw] w-full">
          <Navbar/>
          <ManageAdminHospitalPage name={`${hospital_details.hospitalName}`} id={hospital_details.groupdetail}/>
        </div>
    </div>
    </RouteProtector>
  )
}

export default GroupDetail