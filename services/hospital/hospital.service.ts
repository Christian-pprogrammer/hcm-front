import http from "../http-common";

class HospitalService {
  getAllHospitals() {
    return http.get(`api/v2/hospitals`);
  }

  createNewHospital(data: any) {
    return http.post(`api/v2/hospitals`, data);
  }

  getGroupHospitals(groupId: string) {
    return http.get(`api/v2/hospitals/group/${groupId}`);
  }
}
export default new HospitalService();
