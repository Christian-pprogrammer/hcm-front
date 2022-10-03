import http from "../http-common";

class ManageServices{
    createService(data: any){
        return http.post(`/api/v2/services`,data); 
    }
    addServiceToGroup(data: any){
        return http.post(`/api/v2/services/group/add-service`,data);
    }
    getHospitalServices(hospitalId:string){
        return http.get(`/api/v2/services/hospital/${hospitalId}`)
    }
    addServiceToHospital(hospitalId:string,data: any){
        return http.post(`/api/v2/services/hospital/${hospitalId}`,data);
    }   
}
export default new ManageServices();