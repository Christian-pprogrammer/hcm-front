import http from '../http-common'
class SuperAdminService{
    createSuperAdmin(data:any){
        return http.post(`/super-admin`,data);
    }
    //Route Not Yet Checked
    checkSuperAdminPass(password:string){
        return http.post(`/super-admin/password/verify`,password);
    }
    //Route Not Yet Checked
    deleteAccountSuperAdmin(id:string){
        return http.delete(`/super-admin/delete/account/${id}`);
    }
}
export default new SuperAdminService();