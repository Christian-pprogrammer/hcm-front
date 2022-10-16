export interface AddAccountFormStructure{
    username: string;
    email:string;
    password:string;
    NewLicenseDate:string;
    uploadFile:string;
}
export const AddAccountData: AddAccountFormStructure = {
    username: "",
    email:"",
    password : "",
    NewLicenseDate : "",
    uploadFile: ""
}
export interface AddHospitalStructure{
    hospitalName : string,
    email:string,
    newlicenseDate: string,
    location:string,
    category:string,
    district:string,
    sector:string,
    service:Object[];
}
export const AddHospitalData : AddHospitalStructure = {
    hospitalName : "",
    email:"",
    newlicenseDate: "",
    location:"",
    category: "",
    district:"",
    sector:"",
    service:[{}],
}
export interface NewService {
    NewService : string;
    NewServiceAbbr : string;
    newlicenseDate:string;
}
export const NewServiceData : NewService = {
    NewService : "",
    NewServiceAbbr : "",
    newlicenseDate: "",
}
export interface MapInterface {
    hospitalName:string;
    status:string;
}
export const MapInterfaceData : MapInterface = {
    hospitalName: "",
    status: "",
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
export interface NewPriceInterface {
    serviceName:string;
    fee:number;
    newfee:number;
}
export const NewPriceData:NewPriceInterface = {
    serviceName: "",
    fee: 0,
    newfee: 0,
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