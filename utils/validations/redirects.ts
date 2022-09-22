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
                    return "/super-admin";
                case "GROUP_ADMIN":
                    return "/group-admin";
                case "GROUP_DIRECTOR":
                    return "/group-director";
                case "HOSPTIAL_ADMIN":
                    return "/hospital-admin";
                case "HOSPITAL_DIRECTOR":
                    return "/hospital-director";
                case "DOCTOR":
                    return "/doctor";
                case "SCHEDULE_MANAGER":
                    return "/schedule-manager";
                case "APPOINTMENT_MANAGER":
                    return "/appointment-manager";
                default:
                    return "/patient";
            }
        }
    }

    return "/404"
}