import http from "../http-common";

class HospitalAdmin {
  createHospitalAdmin(data: any) {
    return http.post(`/hospital-admin`, data);
  }

  getHospitalAdmins(hospitalId: string) {
    return http.get(`/hospital-admin/${hospitalId}`);
  }

  editHospitalAdmin(data: any, userId: string) {
    return http.put(`/hospital-admin/${userId}`, data);
  }

}
export default new HospitalAdmin();
