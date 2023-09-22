export interface FormStructure{
    email: string;
    password: string;
    mobile : string;
    fullName: string;
    gender: string;
    confirmPassword: string;
    nationality: string[];
}
export const FormDummy : FormStructure = {
    email: '',
    password : '',
    mobile : '',
    fullName : '',
    gender: '',
    confirmPassword: '',
    nationality: []
}
export interface FormLoginStructure{
    email: string;
    password: string;
}
export const LoginFormData : FormLoginStructure = {
    email: '',
    password : ''
}
