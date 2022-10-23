import http from "../http-common";

class ScheduleManagerService {
  createScheduleManager(data: any) {
    return http.post(`/api/v2/schedule-manager`, data);
  }
}

doexport default new ScheduleManagerService();
