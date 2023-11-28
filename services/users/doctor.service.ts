import { IUser } from '../../utils/ModalTypes';
import http from '../http-common';

class DoctorService {
  createDoctor(data: IUser) {
    return http.post(`/doctors`, data);
  }
  deleteDoctor(doctorId: string) {
    return http.delete(`/doctors/${doctorId}`);
  }

  getDoctorsByHospitalAndService(hospitalId: string, serviceId: string) {
    return http.get(`/doctors/${serviceId}/${hospitalId}`);
  }
}
export default new DoctorService();
