export interface GroupDtoForm{
    groupName: string;
    email:string;
}
export const GroupDtoDummy: GroupDtoForm = {
    groupName: "",
    email:"",
}
export interface HospitalAdminDto{
    confirmPassword:string;
    fullName : string, // required
    email:string,
    gender: string,
    hospitalId:string,
    mobile:string, // required
    password:string,
    role:string,
}
export const HospitalAdminDummy : HospitalAdminDto = {
    confirmPassword:"",
    fullName : "", // required
    email:"",
    gender: "",
    hospitalId:"",
    mobile:"", // required
    password:"",
    role:"",
}
export interface HospitalCategory{
    hospitalCategory : string, // required
    hospital_category_id:string,
}
export const HospitalCategoryDummy : HospitalCategory = {
    hospitalCategory : "", // required
    hospital_category_id:"",
}
export interface CreateHospitalDto{
    email:string;
    hospitalCategoryId:string;
    hospitalId:string;
    hospitalName:string;
    location:string;
    licensedDate : string;
}

export const CreateHospitalDummy : CreateHospitalDto = {
    email:"",
    hospitalCategoryId:"",
    hospitalId:"",
    hospitalName:"",
    location:"",
    licensedDate : "",
}
export interface AddServiceToHospitalDto {
    serviceId:string;
    groupId:string;
    fee:number;
    hospitalId:string;
    currency:string;
}
export const AddServiceToHospitalDummy : AddServiceToHospitalDto = {
    serviceId:"",
    groupId:"",
    hospitalId:"",
    fee:0,
    currency:"",
}
export interface AddServiceToGroupDto {
    service:string;
}
export const AddServiceToGroupDummy : AddServiceToGroupDto = {
    service :""
}

export interface NewService {
    service:string;
    serviceAbbr:string;
}
export const NewServiceDummy : NewService = {
    service :"",
    serviceAbbr:"",
}

export interface NewServiceCost {
    fee:number; // required
    currency:string; // required
    id:number;
}
export const NewServiceCostDummy : NewServiceCost = {
    fee:0, // required
    currency:"", // required
    id:0,
}

export interface LanguagesType {
    newlanguageName:string;
    standardCode:string;
    description:string;
}
export interface NewUserInterface{
    username:string;
    email:string;
    password:string;
    services:Object[];
    status:string;
    acctype:string;
}
export const LanguagesData : LanguagesType ={
    newlanguageName: "",
    standardCode: "",
    description: "",
}
export const NewUserData:NewUserInterface={
    username:"",
    acctype:"",
    email:"",
    password:"",
    services:[],
    status:""
}

export interface NewTemplateInterface {
    typeTemplate:string;
    description:string;
}
export const NewTemplateArr:NewTemplateInterface = {
    typeTemplate:"",
    description:""
}
export interface NewScheduleInterface{
    doctorName:string;
    doctorEmail:string;
    services:Object[];
    scheduleDate:string;
    startHour:string;
    endHour:string;
}
export const NewScheduleData:NewScheduleInterface = {
    doctorName: "",
    doctorEmail:"",
    services:[],
    scheduleDate: "",
    startHour:"",
    endHour:"",
}
export interface SendAppointmentInterface {
    patientName:string;
    services:Object[];
    scheduleDate:string;
    patientRecordNumber:string;
    appointmentHr:string;
    patientTel:number;
}
export const SendAppointmentDataArr : SendAppointmentInterface = {
    patientName:"",
    services:[],
    scheduleDate:"",
    patientRecordNumber:"",
    appointmentHr:"",
    patientTel:0
}
export interface PatientInterface {
    patientName:string;
    patientNumber:string;
    patientTel:number;
    doctorName:string;
    phoneNumber:string;
    email:string;
}
export const PatientInterfaceData:PatientInterface= {
    patientName :"",
    patientNumber:"",
    patientTel:0,
    doctorName:"",
    phoneNumber:"",
    email:""
}