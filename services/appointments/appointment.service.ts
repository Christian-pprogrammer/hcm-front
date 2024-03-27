import { PayAppointment } from "../../utils/ModalTypes";
import http from "../http-common";

class AppointmentService {
  getPatientAllAppointments() {
    return http.get(`/appointments/`)
  }

  bookAppintment(appointmentId: string) {
    return http.put(`/appointments/${appointmentId}`);
  }

  createAppointment(scheduleId: string, data: any) {
    return http.post(`/appointments/${scheduleId}/`, data);
  }

  appointmentManagerEditAppointment(appointmentId: string, data: any) {
    return http.patch(`/appointments/appointment-manager/edit/${appointmentId}`, data);
  }

  getHospitalDoctorAppointments(hospitalId: string, doctorId: string) {
    return http.get(`/appointments/hospital/${hospitalId}/doctor/${doctorId}`);
  }

  getHospitalAppointments(hospitalId: string) {
    return http.get(`/appointments/hospital/${hospitalId}`);
  }

  getHospitalAppointmentsByService(hospitalId: string, serviceId: string) {
    return http.get(`/appointments/hospital/${hospitalId}/${serviceId}`);
  }

  patientEditAppointment(appointmentId: string, data: any) {
    return http.patch(`/appointments/patient/edit/${appointmentId}`, data);
  }

  getScheduleAppointments(scheduleId: string) {
    return http.get(`/appointments/schedule/${scheduleId}`);
  }

  getBookedAppointmentsInSchedule(scheduleId: string) {
    return http.get(`/appointments/schedule/${scheduleId}/booked`);
  }

  getUnbookedAppointmentsInSchedule(scheduleId: string) {
    return http.get(`/appointments/schedule/${scheduleId}/unbooked`);
  }

  payForAppointment(data: PayAppointment) {
    return http.post(`/payment`, data);
  }
  getPaymentStatus(paymentId: string) {
    return http.get(`/payment/${paymentId}`);
  }
}
export default new AppointmentService();
