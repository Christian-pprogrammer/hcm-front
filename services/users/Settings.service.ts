import http from "../http-common";
// Routes Not Checked from the swagger API documentation
class SettingsService{
    createFee(data:any){
        return http.post(`api/v2/fee/create`,data);
    }
    createTemplate(data:any){
        return http.post(`api/v2/template/create`,data);
    }
}
export default new SettingsService();