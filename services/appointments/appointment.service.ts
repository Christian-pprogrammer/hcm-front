import http from "../http-common";

class AppointmentService {
  bookAppintment(appointmentId: string, data: any) {
    return http.put(`/api/v2/appointments/${appointmentId}`, data);
  }

  createAppointment(schedule_id: string, data: any) {
    return http.post(`/api/v2/appointments/${schedule_id}/`, data);
  }

  appointmentManagerEditAppointment(appointmentId: string, data: any) {
    return http.patch(`/api/v2/appointments/appointment-manager/edit/${appointmentId}`, data);
  }

  getHospitalDoctorAppointments(hospitalId: string, doctorId: string) {
    return http.get(`/api/v2/appointments/hospital/${hospitalId}/doctor/${doctorId}`);
  }

  getHospitalAppointments(hospitalId: string) {
    return http.get(`/api/v2/appointments/hospital/${hospitalId}`);
  }

  getHospitalAppointmentsByService(hospitalId: string, serviceId: string) {
    return http.get(`/api/v2/appointments/hospital/${hospitalId}/${serviceId}`);
  }

  patientEditAppointment(appointmentId: string, data: any) {
    return http.patch(`/api/v2/appointments/patient/edit/${appointmentId}`, data);
  }

  getScheduleAppointments(scheduleId: string) {
    return http.get(`/api/v2/appointments/schedule/${scheduleId}`);
  }

  getBookedAppointmentsInSchedule(scheduleId: string) {
    return http.get(`/api/v2/appointments/schedule/${scheduleId}/booked`);
  }

  getUnbookedAppointmentsInSchedule(scheduleId: string) {
    return http.get(`/api/v2/appointments/schedule/${scheduleId}/unbooked`);
  }
}
export default new AppointmentService();
