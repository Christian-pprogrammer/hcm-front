import http from "../http-common";

class GroupService {
    getAllGroups(){
        return http.get(`/groups`)
    }
    createGroup(data:any){
        return http.post(`/groups`,data);
    }
}
export default new GroupService();
