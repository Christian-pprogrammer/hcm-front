import React from 'react'
import AuditStatus from '../../components/Dashboard/AuditStatus'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

const AuditLogGA = () => {
  return (
    <RouteProtector only={system_users.HOSPITAL_ADMIN}>
    <div className="flex">
    <Sidebar/>
    <div className="lg:w-[80vw] w-full">
    <Navbar/>
    <AuditStatus/>
    </div>
</div>
</RouteProtector>
  )
}

export default AuditLogGA
