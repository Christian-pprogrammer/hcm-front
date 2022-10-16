import http from "../http-common";

class ScheduleService {
  getAllSchedules() {
    return http.get("/api/v2/schedules");
  }

  createSchedule(data: any) {
    return http.post("/api/v2/schedules", data);
  }

  updateSchedule(scheduleId: string, data: any) {
    return http.put(`/api/v2/schedules/${scheduleId}`, data);
  }

  deleteSchedule(scheduleId: string, userPassword: string) {
    return http.delete(`/api/v2/schedules/${scheduleId}/${userPassword}`);
  }

  getDoctorHospitalSchedules(doctorId: string, hospitalId: string) {
    return http.get(`/api/v2/schedules/doctor/${doctorId}/hostpital/${hospitalId}`);
  }

  getHospitalSchedules(hospitalId: string) {
    return http.get(`/api/v2/schedules/hospital/${hospitalId}`);
  }
}

export default new ScheduleService();
