import http from "../http-common";

class ManageServicesService {
  createService(data: any) {
    return http.post(`/api/v2/services`, data);
  }

  getGroupServices(groupId: string) {
    return http.get(`/api/v2/services/group/${groupId}`);
  }

  getHospitalServices(hospitalId: string) {
    return http.get(`/api/v2/services/hospital/${hospitalId}`)
  }

  addServiceToGroup(groupId: string, data: any) {
    return http.post(`/api/v2/services/group/${groupId}/add-service`, data);
  }

  addServiceToHospital(hospitalId: string, data: any) {
    return http.post(`/api/v2/services/hospital/${hospitalId}`, data);
  }

  removeAllServicesFromHospital(hospitalId: string) {
    return http.delete(`/api/v2/services/hospital/${hospitalId}/remove-all`);
  }

  removeServiceFromHospital(hospitalId: string, serviceId: string) {
    return http.delete(`/api/v2/services/hospital/${hospitalId}/remove/${serviceId}`);
  }

}
export default new ManageServicesService();
