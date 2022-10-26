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
}
export default new HospitalService();
