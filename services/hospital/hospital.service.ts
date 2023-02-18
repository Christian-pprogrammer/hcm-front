import http from "../http-common";

class HospitalService {
  getAllHospitals() {
    return http.get(`/hospitals`);
  }

  createNewHospital(data: any) {
    return http.post(`/hospitals`, data);
  }

  getGroupHospitals(groupId: string) {
    return http.get(`/hospitals/group/${groupId}`);
  }

  editHospital(hospitalId: string, data: any) {
    return http.put(`/hospitals/${hospitalId}`, data);
  }

  deleteHospital(hospitalId: string) {
    return http.delete(`/hospitals/${hospitalId}`);
  }
}
export default new HospitalService();
