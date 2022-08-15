export interface FormStructure{
    email: string;
    password: string;
    telephone : number;
    nationality: string;
    cardID:number;
    province: string;
    sector: string;
    district: string;
    username: string;
}
export const FormDummy : FormStructure = {
    email: '',
    password : '',
    telephone : 0,
    nationality : '',
    cardID : 0,
    province : '',
    sector : '',
    district : '',
    username : ''
}
export interface FormLoginStructure{
    email: string;
    password: string;
}
export const LoginFormData : FormLoginStructure = {
    email: '',
    password : ''
}