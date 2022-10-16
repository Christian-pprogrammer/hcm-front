import http from "../http-common";

class ManageAppointments {
  createAppointment(scheduleId: string, data: any) {
    return http.post(`/api/v2/appointments/${scheduleId}`, data)
  }
  approveAll(username: string, password: string) {
    return http.put(`/api/v2/appointments/` + username + '/' + password);
  }
  approveAppointment(appointmentId: string) {
    return http.put(`/api/v2/appointments/approve/${appointmentId}`,)
  }
  changeSchedule(ScheduleDataId: any) {
    return http.patch(`/api/v2/appointments/change-schedule`, ScheduleDataId);
  }
  declineAppointment(appointmentId: string) {
    return http.put(`/api/v2/appointments/decline/${appointmentId}`,)
  }
  getDoctorAppointments(hospitalId: string, doctorId: string) {
    return http.get(`/api/v2/appointments/hospital/${hospitalId}/doctor/${doctorId}`);
  }
  getHospitalAppointments(hospitalId: string) {
    return http.get(`/api/v2/appointments/hospital/${hospitalId}`);
  }
  getScheduleAppointments(scheduleId: string) {
    return http.get(`/api/v2/appointments/schedule/${scheduleId}`);
  }
  editAppointment(appointmentId: string, scheduleId: string, data: any) {
    return http.patch(`/api/v2/appointments/schedule/${scheduleId}/edit/${appointmentId}`, data);
  }
  sendAppointments(data: any) {
    return http.post(`/api/v2/appointments/send-appointment`, data);
  }
}
export default new ManageAppointments();
