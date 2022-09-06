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
    Linkurl: "/SuperAdmin/Dashboard"
},
{
    id: 2,
    IconName: <FaConnectdevelop/>,
    LinkName: "Manage Accounts",
    Linkurl: "/SuperAdmin/ManageAccounts"
},
{
    id: 3,
    IconName: <FaNotesMedical />,
    LinkName: "Audit Logs",
    Linkurl: "/SuperAdmin/AuditLogs"
},
{
    id: 4,
    IconName: <FaReacteurope/>,
    LinkName: "Settings",
    Linkurl: "/SuperAdmin/Settings"
}
]
export default SideBarAdmins;


export const GroupAdminArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/GroupAdmin/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Manage Hospitals",
    Linkurl:"/GroupAdmin/ManageHospitals"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Manage Services",
    Linkurl:"/GroupAdmin/ManageService"
},
{
    id:4,
    IconName: <FaChartPie/>,
    LinkName: "Audit Logs",
    Linkurl:"/GroupAdmin/AuditLogGA"
},
{
    id:5,
    IconName: <FaLanguage/>,
    LinkName: "Languages",
    Linkurl:"/GroupAdmin/Languages"
}
]


export const HospitalAdminArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/HospitalAdmin/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Manage Users",
    Linkurl:"/HospitalAdmin/ManageUsersHA"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Manage Services",
    Linkurl:"/HospitalAdmin/ManageServicesHA"
},
{
    id:4,
    IconName: <FaChartPie/>,
    LinkName: "Audit Logs",
    Linkurl:"/HospitalAdmin/AuditLogsHA"
},
{
    id:5,
    IconName: <FaLanguage/>,
    LinkName: "Settings",
    Linkurl:"/HospitalAdmin/SettingsPageHA"
}
]


export const DoctorAdminArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/Doctor/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Appointments",
    Linkurl: "/Doctor/ManageAppointment"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Request Updates",
    Linkurl:"/Doctor/RequestUpdates"
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
    Linkurl:"/AppointmentManager/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Appointments",
    Linkurl:"/AppointmentManager/ManageAppointmentsFile"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Request Updates",
    Linkurl:"/AppointmentManager/RequestUpdatesManager"
}
]


export const ScheduleManagerArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/ScheduleManager/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Schedules",
    Linkurl:"/ScheduleManager/ManageSchedules"
}
]

export const GroupDirectorArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/GroupDirector/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Manage Hospitals",
    Linkurl:"/GroupDirector/ManageHospitals"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Report Overview",
    Linkurl:"/GroupDirector/ReportOverview"
},
{
    id:4,
    IconName: <FaChartPie/>,
    LinkName: "Audit Logs",
    Linkurl:"/GroupDirector/AuditLogGA"
}]

export const HospitalDirectorArr : SideBarInterface[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/HospitalDirector/Dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Manage Users",
    Linkurl:"/HospitalDirector/ManageUsersHA"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Report Overview",
    Linkurl:"/HospitalDirector/ReportOverviewHD"
},
{
    id:4,
    IconName: <FaChartPie/>,
    LinkName: "Audit Logs",
    Linkurl:"/HospitalDirector/AuditLogsHA"
}]