import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {  FaSignOutAlt } from 'react-icons/fa'
import { DashBoardLogo } from '../Logo'
import  SideBarAdmins, { AppointmentManagerArr, DoctorAdminArr, GroupAdminArr, GroupDirectorArr, HospitalAdminArr, HospitalDirectorArr, PatientAdminArr, ScheduleManagerArr, system_users } from '../../utils/constants'
import authService from '../../services/auth/auth.service'

const Sidebar = () => {
    const VerifyUser= () => {
    const userRole = "SUPER_ADMIN";
        if(userRole === system_users.SUPER_ADMIN){
            return SideBarAdmins;
        }
        else{
            return SideBarAdmins
        }
    }
    const ChangeHeader = (path:string) => {
        const router= useRouter()
        if(router.asPath == path){
            return "bg-[#d9d9d93a] font-semibold"
        }
    }
    const handleSystemSignOut = async () =>{
       authService.logout();
    }
  return (
    <aside className='bg-backG bottom-0 overflow-hidden hidden md:block min-h-screen text-white w-[20vw] '>
        <DashBoardLogo/>
        <div className='flex py-5 flex-col px-2 gap-4'>
            {VerifyUser().map((sidebar) => (
            <div key={sidebar.id} className={`flex text-[1.5em] rounded-lg hover:bg-[#d9d9d93a] px-10 py-5 justify-start place-items-center gap-[2em]  ${ChangeHeader(`${sidebar.Linkurl}`)}`}>
                {sidebar.IconName}
                <Link href={sidebar.Linkurl}><span className='cursor-pointer text-white text-[16px]'>{sidebar.LinkName}</span></Link>
            </div>
            ))}
            <div onClick={handleSystemSignOut} className='flex absolute bottom-2 px-10  py-5 justify-start place-items-center gap-[4em]'>
                <FaSignOutAlt className='text-[2em]'/>
                <span className='font-bold text-white'>Sign Out</span>
            </div>
        </div>
    </aside>
  )
}   

export default Sidebar