import http from '../http-common'
class AppointmentManager {
  createAppointmentManager(data: any) {
    return http.post(`/api/v2/appointment-manager`, data);
  }
}
export default new AppointmentManager();
