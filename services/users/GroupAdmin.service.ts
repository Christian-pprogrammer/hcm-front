import http from "../http-common";

class GroupAdmin{
    getAllGroupsAdmins(){
        return http.get(`api/v2/group-admin`);
    }
    createGroupAdmin(id:string){
        return http.post(`api/v2/group-admin/${id}`);
    }
    //Route Not Yet Checked
    checkGroupAdminPass(password:string){
        return http.post(`api/v2/group-admin/password/verify/${password}`)
    }
    // Route Unchecked
    deleteHospitalGroupAdmin(id:string){
        return http.post(`api/v2/group-admin/delete/${id}`);
    }
}
export default new GroupAdmin();