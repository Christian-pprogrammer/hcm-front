import { ILanguage } from "../../utils/ModalTypes";
import http from "../http-common";

class LanguageService {
  // Check All Routers ----
  createLanguage(data: ILanguage) {
    return http.post(`/languages/create`, data);
  }
  getAllLanguage() {
    return http.get(`/languages/all`);
  }
  editLanguage(id: string, data: ILanguage) {
    return http.put(`/languages/edit/${id}`, data);
  }
  getSingleLanguage(id: string) {
    return http.get(`/languages/${id}`);
  }
}
export default new LanguageService();
