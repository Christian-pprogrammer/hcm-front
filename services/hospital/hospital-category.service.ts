import http from "../http-common";

class HospitalCategoryService {
  getHospitalCategories() {
    return http.get(`/hospital_category`);
  }

  createHospitalCategory(data: any) {
    return http.post(`/hospital_category`, data);
  }
}
export default new HospitalCategoryService();
