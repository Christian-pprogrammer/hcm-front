import { IHospital, IServiceHospitalMap } from "../../utils/ModalTypes";
import { INewService, IService } from "../../utils/Prices";
import http from "../http-common";

class ManageServicesService {
  createService(data: INewService) {
    return http.post(`/services`, data);
  }

  getAllServices() {
    return http.get(`/services`);
  }
  getGroupServices(groupId: string) {
    return http.get(`/services/group/${groupId}`);
  }

  getHospitalServices(hospitalId: string) {
    return http.get(`/services/hospital/${hospitalId}`)
  }

  addServiceToGroup(data: IService) {
    return http.post(`/services/group/add-service`, data);
  }

  addServiceToHospital(hospitalId: string, data: any) {
    return http.post(`/services/hospital/${hospitalId}`, data);
  }

  removeAllServicesFromHospital(hospitalId: string) {
    return http.delete(`/services/hospital/${hospitalId}/remove-all`);
  }

  removeServiceFromHospital(hospitalId: string, serviceId: string) {
    return http.delete(`/services/hospital/${hospitalId}/remove/${serviceId}`);
  }

}
export default new ManageServicesService();
