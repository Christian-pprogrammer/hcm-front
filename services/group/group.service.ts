import http from "../http-common";

class GroupService {
  getAllGroups() {
    return http.get(`/groups`);
  }

  createGroup(data: any) {
    return http.post(`/groups`, data);
  }

  editGroup(groupId: string, data: any) {
    return http.put(`/groups/${groupId}`, data);
  }

  getGroupById(groupId: string) {
    return http.get(`/groups/${groupId}`);
  }

  deleteGroup(groupId: string) {
    return http.delete(`/groups/${groupId}`);
  }
}
export default new GroupService();
