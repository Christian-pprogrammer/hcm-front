import http from "../http-common";
class Role{
    generateRole(data:any){
        return http.post(`/roles`,data);
    }
    getAllRoles(){
        return http.get(`/roles`);
    }
}
export default new Role();