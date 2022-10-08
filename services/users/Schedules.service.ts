import http from "../http-common";

class Schedules{
    createScheduleManager(data: any){
        return http.post(`api/v2/schedule-manager`,data);
    }
    getAllSchedules(){
        return http.get(`api/v2/schedules`);
    }
    createSchedule(data: any){
        return http.post(`api/v2/schedules/create`,data);
    }
    updateSchedule(id:string,data: any){
        return http.put(`api/v2/schedules/${id}`,data);
    }
    deleteSchedule(id:string,userPassCode:string){
        return http.delete(`api/v2/schedules/${id}/${userPassCode}`);
    }
    getDoctorSchedules(doctorId:string,hospitalId:string){
        return http.get(`api/v2/schedules/${doctorId}/hospital/${hospitalId}`);
    }
    getHospitalSchedules(hospitalId: string){
        return http.get(`api/v2/schedules/hospital/${hospitalId}`);
    }
}
export default new Schedules();