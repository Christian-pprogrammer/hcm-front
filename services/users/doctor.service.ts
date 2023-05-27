import { IUser } from '../../utils/ModalTypes';
import http from '../http-common';

class DoctorService {
  createDoctor(data: IUser) {
    return http.post(`/doctors`, data);
  }
  deleteDoctor(doctorId: string) {
    return http.delete(`/doctors/${doctorId}`);
  }
}
export default new DoctorService();
