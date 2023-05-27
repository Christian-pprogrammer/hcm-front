import { IGroup, IUser } from "../../utils/ModalTypes";
import http from "../http-common";

class GroupAdmin {
  getAllGroupsAdmins() {
    return http.get(`/group-admin`);
  }
  getGroupAdminsByGroup(groupId: string) {
    return http.get(`/group-admin/${groupId}`);
  }
  createGroupAdmin(groupId: string, data: IUser) {
    return http.post(`/group-admin/${groupId}`, data);
  }
  deleteGroupAdmin(groupAdminId: string){
    return http.delete(`/group-admin/${groupAdminId}`)
  }
  //Route Not Yet Checked
  checkGroupAdminPass(password: string) {
    return http.post(`/group-admin/password/verify/${password}`);
  }
  // Route Unchecked
  deleteHospitalGroupAdmin(id: string) {
    return http.post(`/group-admin/delete/${id}`);
  }
}
export default new GroupAdmin();
