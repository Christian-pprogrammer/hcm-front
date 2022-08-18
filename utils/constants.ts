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
interface SuperAdminInterface{
    id : number;
    IconName: string;
    LinkName: string;
    Linkurl : string;
}
export const SideBarAdmins : SuperAdminInterface[] = [
{
    id: 1,
    IconName: "FaChartPie",
    LinkName: "Dashboard",
    Linkurl: "/Dash/Dashboard"
},
{
    id: 2,
    IconName: "FaConnectdevelop",
    LinkName: "Manage Accounts",
    Linkurl: "/Dash/ManageAccounts"
},
{
    id: 3,
    IconName: "FaCheckSquare",
    LinkName: "Audit Logs",
    Linkurl: "/auditLogs"
},
{
    id: 4,
    IconName: "FaReacteurope",
    LinkName: "Settings",
    Linkurl: "/settings"
}
]