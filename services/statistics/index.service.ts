import http from '../http-common';

class StatisticsService {

  getSuperAdminStats() {
    return http.get(`/statistics/super-admin`);
  }

  getHospitalAdminStats(hospitalId: string) {
    return http.get(`/statistics/hospital-admin/${hospitalId}`);
  }
}
export default new StatisticsService();
