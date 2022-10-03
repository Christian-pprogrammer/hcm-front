import http from '../http-common'
class SuperAdminService{
    createSuperAdmin(data:string){
        return http.post(`/api/v2/super-admin`,data);
    }
}
export default new SuperAdminService();