import http from '../http-common';

class DoctorService {
  createDoctor(data: any) {
    return http.post(`/api/v2/doctors`, data);
  }

  deleteDoctor(doctorId: string) {
    return http.delete(`/api/v2/doctors/${doctorId}`);
  }
}
export default new DoctorService();
