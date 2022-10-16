import http from "../http-common";

class HospitalCategoryService {
  getHospitalCategories() {
    return http.get(`api/v2/hospital_category`);
  }

  createHospitalCategory(data: any) {
    return http.post(`api/v2/hospital_category`, data);
  }
}
export default new HospitalCategoryService();
