import http from "../http-common";

class GroupAdmin {
  getAllGroupsAdmins() {
    return http.get(`/group-admin`);
  }
  createGroupAdmin(groupId: string, data: any) {
    return http.post(`/group-admin/${groupId}`, data);
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
