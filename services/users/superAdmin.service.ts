import http from '../http-common'
class SuperAdminService{
    createSuperAdmin(data:any){
        return http.post(`/api/v2/super-admin`,data);
    }
    //Route Not Yet Checked
    checkSuperAdminPass(password:string){
        return http.post(`/api/v2/super-admin/password/verify`,password);
    }
    //Route Not Yet Checked
    deleteAccountSuperAdmin(id:string){
        return http.delete(`/api/v2/super-admin/delete/account/${id}`);
    }
}
export default new SuperAdminService();