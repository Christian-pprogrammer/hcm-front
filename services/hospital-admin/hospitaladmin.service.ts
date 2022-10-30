import http from "../http-common";

class HospitalAdmin {
  createHospitalAdmin(data: any) {
    return http.post(`/hospital-admin`,data);
  }

}
export default new HospitalAdmin();