import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { DashBoardLogo } from '../Logo'
import SideBarAdmins, { AppointmentManagerArr, DoctorAdminArr, GroupAdminArr, GroupDirectorArr, HospitalAdminArr, HospitalDirectorArr, PatientAdminArr, ScheduleManagerArr, system_users } from '../../utils/constants'
import authService from '../../services/auth/auth.service'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const AuthUser = useSelector((state: any) => state.authUser);
    const VerifyUser = (AuthUser:any) => {
        switch (AuthUser.role.role[0]) {
            case "SUPER_ADMIN":
                return SideBarAdmins;
            case "GROUP_ADMIN":
                return GroupAdminArr;
            case "GROUP_DIRECTOR":
                return GroupDirectorArr;
            case "HOSPTIAL_ADMIN":
                return HospitalAdminArr;
            case "HOSPITAL_DIRECTOR":
                return HospitalDirectorArr;
            case "DOCTOR":
                return DoctorAdminArr;
            case "SCHEDULE_MANAGER":
                return ScheduleManagerArr;
            case "APPOINTMENT_MANAGER":
                return AppointmentManagerArr;
            default:
                return PatientAdminArr;
        }
    }
    const ChangeHeader = (path: string) => {
        const router = useRouter()
        if (router.asPath == path) {
            return "bg-[#d9d9d93a] font-semibold"
        }
    }
    const handleSystemSignOut = async () => {
        authService.logout();
    }
    return (
        <aside className='bg-backG bottom-0 overflow-hidden hidden md:block min-h-screen text-white w-[20vw] '>
            <DashBoardLogo />
            <div className='flex py-5 flex-col px-2 gap-4'>
                {VerifyUser(AuthUser).map((sidebar) => (
                    <div key={sidebar.id} className={`flex text-[1.5em] rounded-lg hover:bg-[#d9d9d93a] px-10 py-5 justify-start place-items-center gap-[2em]  ${ChangeHeader(`${sidebar.Linkurl}`)}`}>
                        {sidebar.IconName}
                        <Link href={sidebar.Linkurl}><span className='cursor-pointer text-white text-[16px]'>{sidebar.LinkName}</span></Link>
                    </div>
                ))}
                <div onClick={handleSystemSignOut} className='flex absolute bottom-2 px-10  py-5 justify-start place-items-center gap-[4em]'>
                    <FaSignOutAlt className='text-[2em]' />
                    <span className='font-bold text-white'>Sign Out</span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar