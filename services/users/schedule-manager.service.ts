import { IUser } from "../../utils/ModalTypes";
import http from "../http-common";

class ScheduleManagerService {
  createScheduleManager(data: IUser) {
    return http.post(`/schedule-manager`, data);
  }
}

export default new ScheduleManagerService();
