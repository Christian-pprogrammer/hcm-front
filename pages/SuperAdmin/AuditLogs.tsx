import React from 'react'
import AuditStatus from '../../components/Dashboard/AuditStatus'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'

const AuditLogs = () => {
  return (
    <div className="flex">
    <Sidebar/>
    <div className="lg:w-[80vw] w-full">
    <Navbar/>
    <AuditStatus/>
    </div>
</div>
  )
}

export default AuditLogs