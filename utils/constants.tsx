import React from 'react';
import { FaChartPie, FaConnectdevelop, FaFileCsv, FaLanguage, FaNotesMedical, FaReacteurope, FaUsers } from 'react-icons/fa'
import { AuditIcon, DashboardIcon, ManageAccIcon, SettingsIcon } from '../icons';
export const system_users = {
    SUPER_ADMIN: "SUPER_ADMIN",
    GROUP_ADMIN: "GROUP_ADMIN",
    GROUP_DIRECTOR : "GROUP_DIRECTOR",
    HOSPITAL_ADMIN: "HOSPITAL_ADMIN",
    HOSPITAL_DIRECTOR : "HOSPITAL_DIRECTOR",
    DOCTOR: "DOCTOR",
    PATIENT: "PATIENT",
    APPOINTMENT_MANAGER: "APPOINTMENT_MANAGER",
    SCHEDULE_MANAGER: "SCHEDULE_MANAGER"
};

const APP_NAME = "HCM Appointment System";

export const global_color = "1A73E8";

export const app_config = {
    APP_NAME: APP_NAME,
    APP_COMPANY_NAME: APP_NAME + " Corp",
    APP_NAME_LOWER: "HCM Appointment System",
    APP_LOGO: "/favicon_io/logo.png",
    APP_PHONE: "+250 785 867 199",
    APP_EMAIL: "info@hcm.org",
    APP_URL: "www.hcm.org",
    APP_URL_HTTPS:"https://hcm-backend-hosting.herokuapp.com/",
    APP_DISCRIPTO: "Easy, fast and secure hospital appointment system",
};

export const ALERT_EXPIRATION_PERIOD = 4000;

export const LOCAL_STORAGE_TOKEN_KEY =
    "U2FsdGVkX1/G0spCYq44fQCTDWSVO6gq2/UDLKJSLKAFJKLADFDS";
export const PREV_LINK_LOCAL_STORAGE_KEY =
    "U2FsdGVkX1/wKjkfljasdlkjfkajdaPpveuMtd+sqe8pr64Dq2r";
export const DEVICE_DETAILS_LOCAL_STORAGE_KEY =
    "U2FsdGVkX18VgmL9lt/jkldfjklsjfdau3rWg1q6h4lsc=";

export interface ISidebar{
    id : number;
    IconName: any;
    LinkName: string;
    Linkurl : string;
}
const SideBarAdmins : ISidebar[] = [
{
    id: 1,
    IconName: <DashboardIcon />,
    LinkName: "Dashboard",
    Linkurl: "/super-admin/dashboard"
},
{
    id: 2,
    IconName: <ManageAccIcon/>,
    LinkName: "Manage Accounts",
    Linkurl: "/super-admin/manage-accounts"
},
{
    id: 3,
    IconName: <AuditIcon />,
    LinkName: "Audit Logs",
    Linkurl: "/super-admin/auditlogs"
},
{
    id: 4,
    IconName: <SettingsIcon/>,
    LinkName: "Settings",
    Linkurl: "/super-admin/settings"
}
]
export default SideBarAdmins;


export const GroupAdminArr : ISidebar[] = [
{
    id:1,
    IconName: <DashboardIcon />,
    LinkName: "Dashboard",
    Linkurl:"/group-admin/dashboard"
},
{
    id:2,
    IconName: <ManageAccIcon/>,
    LinkName: "Manage Hospitals",
    Linkurl:"/group-admin/manage-hospitals"
},
{
    id:3,
    IconName: <ManageAccIcon/>,
    LinkName: "Manage Services",
    Linkurl:"/group-admin/manage-service"
},
{
    id:4,
    IconName: <AuditIcon />,
    LinkName: "Audit Logs",
    Linkurl:"/group-admin/auditlog-ga"
},
{
    id:5,
    IconName: <FaLanguage/>,
    LinkName: "Languages",
    Linkurl:"/group-admin/languages"
}
]


export const HospitalAdminArr : ISidebar[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/hospital-admin/dashboard"
},
{
    id:2,
    IconName: <FaUsers/>,
    LinkName: "Manage Users",
    Linkurl:"/hospital-admin/manage-users-ha"
},
{
    id:3,
    IconName: <ManageAccIcon/>,
    LinkName: "Manage Services",
    Linkurl:"/hospital-admin/manage-services-ha"
},
{
    id:4,
    IconName: <FaFileCsv/>,
    LinkName: "Audit Logs",
    Linkurl:"/hospital-admin/auditLogs-ha"
},
{
    id:5,
    IconName: <SettingsIcon/>,
    LinkName: "Settings",
    Linkurl:"/hospital-admin/settings-page-ha"
}
]


export const DoctorAdminArr : ISidebar[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/doctor/dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Appointments",
    Linkurl: "/doctor/manage-appointment"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Request Updates",
    Linkurl:"/doctor/request-updates"
}
]

export const PatientAdminArr : ISidebar[] = [{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Appointments",
    Linkurl:"/patient/appointment-dashboard"
}]


export const AppointmentManagerArr : ISidebar[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/appointment-manager/dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Appointments",
    Linkurl:"/appointment-manager/manage-appointments-file"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Request Updates",
    Linkurl:"/appointment-manager/request-updates-manager"
}
]


export const ScheduleManagerArr : ISidebar[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/schedule-manager/dashboard"
},
{
    id:2,
    IconName: <ManageAccIcon/>,
    LinkName: "Schedules",
    Linkurl:"/schedule-manager/manage-schedules"
}
]

export const GroupDirectorArr : ISidebar[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/group-director/dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Manage Hospitals",
    Linkurl:"/group-director/manage-hospitals"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Report Overview",
    Linkurl:"/group-director/report-overview"
},
{
    id:4,
    IconName: <FaChartPie/>,
    LinkName: "Audit Logs",
    Linkurl:"/group-director/auditlog-ga"
}]

export const HospitalDirectorArr : ISidebar[] = [
{
    id:1,
    IconName: <FaChartPie/>,
    LinkName: "Dashboard",
    Linkurl:"/hospital-director/dashboard"
},
{
    id:2,
    IconName: <FaChartPie/>,
    LinkName: "Manage Users",
    Linkurl:"/hospital-director/manage-users-ha"
},
{
    id:3,
    IconName: <FaChartPie/>,
    LinkName: "Report Overview",
    Linkurl:"/hospital-director/report-overview-hd"
},
{
    id:4,
    IconName: <FaChartPie/>,
    LinkName: "Audit Logs",
    Linkurl:"/hospital-director/auditlogs-ha"
}]
