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
  mobile: string;
  hospitalCategoryId: string;
  hospitalId?: string;
  hospitalName: string;
  location: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  paymentType: string;
  appointmentPrice: number;
}

export const IHospitalDummy: IHospital = {
  email: "",
  mobile: "7",
  hospitalCategoryId: "",
  hospitalId: "",
  hospitalName: "",
  location: "",
  paymentType: "",
  appointmentPrice: 0
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
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  status: string;
  mobile: number | string;
  role: string;
  roles: any[];
  gender: string;
  province: string;
  district: string;
  sector: string;
  type: string;
  servicesManaged?: string[];
  services?: string[];
  hospitalId?: string;
  createdAt?: string;
}
export interface PayAppointment {
  appointmentId: string;
  phoneNumber: string;
}
export const PayAppointmentImpl: PayAppointment = {
  appointmentId: "",
  phoneNumber: "2507",
}
export type TUserErrors = {
  [K in keyof IUser]: string;
};
export const IUserImpl: IUser = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  status: "",
  mobile: 0,
  gender: "",
  role: "",
  province: "",
  district: "",
  sector: "",
  type: "",
  servicesManaged: [],
  roles: []
}

export interface IHospitalAdmin {
  email: string;
  password: string;
  mobile: string;
  fullName: string;
  hospitalId: string;
  gender: string;
  province: string;
  district: string;
  sector: string;
}

export const IHospitalAdminDummy: IHospitalAdmin = {
  email: "",
  password: "",
  fullName: "",
  mobile: "",
  gender: "",
  hospitalId: "",
  province: "",
  district: "",
  sector: ""
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
  doctor_id?: string;
  appointmentNumber?: string;
  end_time?: string;
  hospital_id?: string;
  service_id?: string;
  dates?: any;
  start_time?: string;
  type?: string;
  mobile: string;
}

export const IScheduleDummy: ISchedule = {
  doctor_id: "",
  appointmentNumber: "",
  end_time: "",
  hospital_id: "",
  service_id: "",
  dates: "",
  start_time: "",
  type: "",
  mobile: ""
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
