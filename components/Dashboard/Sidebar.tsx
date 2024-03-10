import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState, useMemo } from 'react'
import { FaSignOutAlt, FaBars } from 'react-icons/fa'
import { DashBoardLogo } from '../Logo'
import SideBarAdmins, { AppointmentManagerArr, DoctorAdminArr, GroupAdminArr, GroupDirectorArr, HospitalAdminArr, HospitalDirectorArr, PatientAdminArr, ScheduleManagerArr, system_users } from '../../utils/constants'
import authService from '../../services/auth/auth.service';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const router = useRouter();
  const AuthUser = useSelector((state: any) => state.authUser);
  const [role, setRole] = useState(AuthUser.role);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!role && AuthUser?.role) {
      setRole(AuthUser.role);
    }
  }, [AuthUser, role]);

  const sidebarItems = useMemo(() => {
    if (role == "SUPER_ADMIN") {
      return SideBarAdmins;
    } if (role == "GROUP_ADMIN") {
      return GroupAdminArr;
    } if (role == "GROUP_DIRECTOR") {
      return GroupDirectorArr;
    } if (role == "HOSPITAL_ADMIN") {
      return HospitalAdminArr;
    } if (role == "HOSPITAL_DIRECTOR") {
      return HospitalDirectorArr;
    } if (role == "DOCTOR") {
      return DoctorAdminArr;
    } if (role == "PATIENT") {
      return PatientAdminArr;
    } if (role == "APPOINTMENT_MANAGER") {
      return AppointmentManagerArr;
    } if (role == "SCHEDULE_MANAGER") {
      return ScheduleManagerArr;
    } else {
      return PatientAdminArr;
    }
  }, [role]);

  const handleSystemSignOut = async () => {
    authService.logout();
  }

  const ChangeHeader = (path: string) => {
    if (router.asPath == path) {
      return "bg-[#d9d9d93a] font-semibold";
    }
  }

  return (
    <aside className='bg-backG bottom-0 md:block min-h-screen text-white w-[20vw] md:w-64 lg:w-72 sticky top-0'>
      <div className='flex flex-col h-full'>
        <div className='flex justify-end md:hidden'>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className='p-4'>
            <FaBars className='text-white text-2xl' />
          </button>
        </div>
        <DashBoardLogo />
        <div className='overflow-y-auto flex-grow'>
          {sidebarItems.map((sidebar) => (
            <div key={sidebar.id} className={`flex text-[1.5em] rounded-lg hover:bg-[#d9d9d93a] px-10 py-5 justify-start place-items-center gap-[2em]  ${ChangeHeader(`${sidebar.Linkurl}`)}`}>
              <Link href={sidebar.Linkurl}>
                <div className='flex items-center gap-6 hover:cursor-pointer'>
                  {sidebar.IconName}
                  <span className='cursor-pointer hidden lg:flex text-white text-[16px]'>{sidebar.LinkName}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div onClick={handleSystemSignOut} className='flex px-10 py-5 justify-start place-items-center gap-[4em]'>
          <FaSignOutAlt className='text-[2em]' />
          <span className='font-bold text-white'>Sign Out</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;
