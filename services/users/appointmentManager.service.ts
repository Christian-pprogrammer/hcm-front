import http from '../http-common'
class AppointmentManager {
  createAppointmentManager(data: any) {
    return http.post(`/appointment-manager`, data);
  }
}
export default new AppointmentManager();
