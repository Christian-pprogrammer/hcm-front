import http from "../http-common";

class GroupAdmin{
    getAllGroupsAdmins(){
        return http.get(`api/v2/group-admin`);
    }
    createGroupAdmin(id:string){
        return http.post(`api/v2/group-admin/${id}`);
    }
}
export default new GroupAdmin();