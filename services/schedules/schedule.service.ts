import { ISchedule } from "../../utils/ModalTypes";
import http from "../http-common";

class ScheduleService {
  getAllSchedules() {
    return http.get("/schedules");
  }

  getSchedule(scheduleId: string) {
    return http.get(`/schudules/${scheduleId}`)
  }

  createSchedule(data: ISchedule) {
    return http.post("/schedules", data);
  }

  updateSchedule(scheduleId: string, data: ISchedule) {
    return http.put(`/schedules/${scheduleId}`, data);
  }

  deleteSchedule(scheduleId: string, userPassword: string) {
    return http.delete(`/schedules/${scheduleId}/${userPassword}`);
  }

  getDoctorHospitalSchedules(doctorId: string, hospitalId: string) {
    return http.get(`/schedules/doctor/${doctorId}/hostpital/${hospitalId}`);
  }

  getHospitalSchedules(hospitalId: string) {
    return http.get(`/schedules/hospital/${hospitalId}`);
  }
}

export default new ScheduleService();
