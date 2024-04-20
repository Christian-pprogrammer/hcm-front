export interface FormStructure{
    email: string;
    password: string;
    mobile : string;
    fullName: string;
    gender: string;
    confirmPassword: string;
    province: string;
    district: string;
    sector: string;
    nationality: String[]
}
export const FormDummy : FormStructure = {
    email: '',
    password : '',
    mobile : '',
    fullName : '',
    gender: 'MALE',
    confirmPassword: '',
    province: '',
    district: '',
    sector: '',
    nationality: ['+93']
}
export interface FormLoginStructure{
    email: string;
    password: string;
}
export const LoginFormData : FormLoginStructure = {
    email: '',
    password : ''
}

export interface FormVerificationStructure {
    code: string;
    emailOrPhone: string;
}

export const VerificationFormData: FormVerificationStructure = {
    code: '',
    emailOrPhone: ''
}

export interface AdminHospital {
  hospital: string;
  hospitalAdmin: string;
}
