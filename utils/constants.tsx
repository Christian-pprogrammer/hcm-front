import React, { ReactComponentElement } from 'react';
import { FaChartPie, FaCheckSquare, FaConnectdevelop, FaLanguage, FaNotesMedical, FaReacteurope, FaSignOutAlt } from 'react-icons/fa'
export const system_users = {
    SUPER_ADMIN: "SUPER_ADMIN",
    MINISTRY_ADMIN: "MINISTRY_ADMIN",
    GROUP_DIRECTOR : "GROUP_DIRECTOR",
    HOSPITAL_ADMIN: "HOSPITAL_ADMIN",
    HOSPITAL_DIRECTOR : "HOSPITAL_DIRECTOR",
    DOCTOR: "DOCTOR",
    PATIENT: "PATIENT",
    APPOINTMENT_MANAGER: "APPOINTMENT_MANAGER",
    SCHEDULE_MANAGER: "SCHEDULE_MANAGER"
};
export interface SideBarInterface{
    id : number;
    IconName: any;
    LinkName: string;
    Linkurl : string;
}
const SideBarAdmins : SideBarInterface[] = [
{
    id: 1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl: "/Dash/Dashboard"
},
{
    id: 2,
    IconName: <FaConnectdevelop/>,
    LinkName: "Manage Accounts",
    Linkurl: "/Dash/ManageAccounts"
},
{
    id: 3,
    IconName: <FaNotesMedical />,
    LinkName: "Audit Logs",
    Linkurl: "/Dash/AuditLogs"
},
{
    id: 4,
    IconName: <FaReacteurope/>,
    LinkName: "Settings",
    Linkurl: "/Dash/Settings"
}
]
export default SideBarAdmins;


export const GroupAdminArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/Dash/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Manage Hospitals",
    Linkurl:"/Dash/ManageHospitals"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Manage Services",
    Linkurl:"/Dash/ManageServices"
},
{
    id:4,
    IconName: <FaChartPie/>,
    LinkName: "Audit Logs",
    Linkurl:"/Dash/AuditStaus"
},
{
    id:5,
    IconName: <FaLanguage/>,
    LinkName: "Languages",
    Linkurl:"/Dash/Languages"
}
]


export const HospitalAdminArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/Dash/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Manage Users",
    Linkurl:"/Dash/ManageUsers"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Manage Services",
    Linkurl:"/Dash/ManageServices"
},
{
    id:4,
    IconName: <FaChartPie/>,
    LinkName: "Audit Logs",
    Linkurl:"/Dash/AuditStaus"
},
{
    id:5,
    IconName: <FaLanguage/>,
    LinkName: "Settings",
    Linkurl:"/Dash/Settings"
}
]


export const DoctorAdminArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/Dash/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Appointments",
    Linkurl:"/Dash/ManageUsers"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Request Updates",
    Linkurl:"/Dash/RequestUpdates"
}
]

export const PatientAdminArr : SideBarInterface[] = [{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Appointments",
    Linkurl:"/Dash/Appointments"
}]


export const AppointmentManagerArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/Dash/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Appointments",
    Linkurl:"/Dash/ManageUsers"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Request Updates",
    Linkurl:"/Dash/RequestUpdates"
}
]


export const ScheduleManagerArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/Dash/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Schedules",
    Linkurl:"/Dash/Schedules"
}
]

export const GroupDirectorArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/Dash/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Manage Hospitals",
    Linkurl:"/Dash/ManageUsers"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Report Overview",
    Linkurl:"/Dash/Reportoverview"
},
{
    id:4,
    IconName: <FaChartPie/>,
    LinkName: "Audit Logs",
    Linkurl:"/Dash/AuditStaus"
}]

export const HospitalDirectorArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/Dash/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Manage Users",
    Linkurl:"/Dash/ManageUsers"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Report Overview",
    Linkurl:"/Dash/Reportoverview"
},
{
    id:4,
    IconName: <FaChartPie/>,
    LinkName: "Audit Logs",
    Linkurl:"/Dash/AuditStaus"
}]