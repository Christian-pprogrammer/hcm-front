import http from "../http-common";

class Language{
    // Check All Routers ----
    createLanguage(data:any){
        return http.post(`api/v2/language/create`, data);
    }
    getAllLanguage(){
        return http.get(`api/v2/languages/all`);
    }
    editLanguage(id:string,data:any){
        return http.put(`api/v2/languages/edit/${id}`, data);
    }
    getSingleLanguage(id:string){
        return http.get(`api/v2/languages/all/${id}`);
    }
}
export default new Language();