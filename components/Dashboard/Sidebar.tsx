import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState , useMemo } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { DashBoardLogo } from '../Logo'
import SideBarAdmins, { AppointmentManagerArr, DoctorAdminArr, GroupAdminArr, GroupDirectorArr, HospitalAdminArr, HospitalDirectorArr, PatientAdminArr, ScheduleManagerArr, system_users } from '../../utils/constants'
import authService from '../../services/auth/auth.service';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const AuthUser = useSelector((state: any) => state.authUser);
  const [role, setRole] = useState("");
  useEffect(() => {
    if (!role && AuthUser?.user?.role?.role) {
      setRole(AuthUser.user.role.role);
    }
  }, [AuthUser, role]);
    const VerifyUser = () => {
        if (role == "SUPER_ADMIN") {
            return SideBarAdmins;
          } if (role == "GROUP_ADMIN") {
            return GroupAdminArr;
          } if (role == "GROUP_DIRECTOR") {
            return GroupDirectorArr;
          } if (role == "HOSPITAL_ADMIN") {
            return HospitalAdminArr
          } if (role == "HOSPITAL_DIRECTOR") {
            return HospitalDirectorArr
          } if (role == "DOCTOR") {
            return DoctorAdminArr
          } if (role == "PATIENT") {
            return PatientAdminArr;
          } if (role == "APPOINTMENT_MANAGER") {
            return AppointmentManagerArr;
          } if (role == "SCHEDULE_MANAGER") {
            return ScheduleManagerArr
          } else{
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
        <aside className='bg-backG bottom-0 overflow-hidden hidden md:block min-h-screen text-white w-[20vw] h-screen sticky top-0'>
            <DashBoardLogo />
            <div className='flex py-5 flex-col px-2 gap-4'>
                {VerifyUser().map((sidebar) => (
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
