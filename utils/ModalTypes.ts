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