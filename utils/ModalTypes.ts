export interface IGroup {
    groupName: string;
    groupEmail: string;
    group_id: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
}

enum hospital_category_enum {
    DISTRICTBASED, INTERNATIONAL, POSTEDESANTE, PRIVATE, REFERRAL
}
export interface ICategory {
    description: string;
    hospitalCategory: hospital_category_enum;
    hospital_category_id?: string,

}
export interface IHospital {
    email: string;
    hospitalCategoryId: string;
    hospitalId: string;
    hospitalName: string;
    location: string;
    licensedDate: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
}

export const IHospitalDummy: IHospital = {
    email: "",
    hospitalCategoryId: "",
    hospitalId: "",
    hospitalName: "",
    location: "",
    licensedDate: "",
}
export interface IServiceHospitalMap {
    serviceId: string;
    groupId?: string;
    fee?: number;
    hospitalId: string;
    currency?: string;
}

export interface AddServiceToGroupDto {
    service: string;
}
export const AddServiceToGroupDummy: AddServiceToGroupDto = {
    service: ""
}

export interface NewServiceCost {
    fee: number; // required
    currency: string; // required
    id: number;
}
export const NewServiceCostDummy: NewServiceCost = {
    fee: 0, // required
    currency: "", // required
    id: 0,
}

export interface ILanguage {
    language_name: string;
    language_id: string;
    language_description: string;
    status?: string;
    language_standard_code: string;
    createdAt?: string;
    updatedAt?: string;
}
export interface IUser {
    id?: string;
    confirmPassword: string;
    username: string;
    fullName: string;
    email: string;
    password: string;
    status: string;
    mobile: number | string;
    role: string;
    gender: string;
    services?: string[];
    hospitalId?: string;
    createdAt?: string;
}
export type TUserErrors = {
    [K in keyof IUser]: string;
};
export const IUserImpl: IUser = {
    confirmPassword: "",
    username: "",
    fullName: "",
    email: "",
    password: "",
    status: "",
    mobile: 0,
    gender: "",
    role: "",
    services: [],
}

export interface IHospitalAdmin {
    confirmPassword: string;
    username: string;
    fullName: string;
    email: string;
    password: string;
    status: string;
    mobile: number;
    role: string;
    gender: string;
    hospitalId: string;
}

export const IHospitalAdminDummy: IHospitalAdmin = {
    confirmPassword: "",
    username: "",
    fullName: "",
    email: "",
    password: "",
    status: "",
    mobile: 0,
    gender: "",
    role: "",
    hospitalId: "",
}

export interface IRole {
    description: string;
    role: string;
    role_id: string;
    createdAt?: string;
    updatedAt?: string;
}
export interface NewTemplateInterface {
    typeTemplate: string;
    description: string;
}
export const NewTemplateArr: NewTemplateInterface = {
    typeTemplate: "",
    description: ""
}
export interface ISchedule {
    doctorId?: string;
    end_date?: string;
    end_time?: string;
    hospital_id?: string;
    service_id?: string;
    start_date?: string;
    start_time?: string;
}
export interface SendAppointmentInterface {
    patientName: string;
    services: Object[];
    scheduleDate: string;
    patientRecordNumber: string;
    appointmentHr: string;
    patientTel: number;
}
export const SendAppointmentDataArr: SendAppointmentInterface = {
    patientName: "",
    services: [],
    scheduleDate: "",
    patientRecordNumber: "",
    appointmentHr: "",
    patientTel: 0
}
export interface PatientInterface {
    patientName: string;
    patientNumber: string;
    patientTel: number;
    doctorName: string;
    phoneNumber: string;
    email: string;
}
export const PatientInterfaceData: PatientInterface = {
    patientName: "",
    patientNumber: "",
    patientTel: 0,
    doctorName: "",
    phoneNumber: "",
    email: ""
}