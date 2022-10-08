import http from "../http-common";
class Role{
    generateRole(data:any){
        return http.post(`api/v2/roles`,data);
    }
    getAllRoles(){
        return http.get(`api/v2/roles`);
    }
}
export default new Role();