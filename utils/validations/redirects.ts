import RouteService from "../../services/auth/routing";

export const getUserHref = (authUser: any) => {
    const res = RouteService.getPrevRoute();
    if (res) {
        RouteService.removePrevRoute();
        return res;
    } else {
        if (authUser.role) {
            switch (authUser.role) {
                case "SUPER_ADMIN":
                    return "/super-admin/dashboard";
                case "GROUP_ADMIN":
                    return "/group-admin/dashboard";
                case "GROUP_DIRECTOR":
                    return "/group-director/dashboard";
                case "HOSPTIAL_ADMIN":
                    return "/hospital-admin/dashboard";
                case "HOSPITAL_DIRECTOR":
                    return "/hospital-director/dashboard";
                case "DOCTOR":
                    return "/doctor/dashboard";
                case "SCHEDULE_MANAGER":
                    return "/schedule-manager/dashboard";
                case "APPOINTMENT_MANAGER":
                    return "/appointment-manager/dashboard";
                default:
                    return "/patient/dashboard";
            }
        }
    }

    return "/404"
}