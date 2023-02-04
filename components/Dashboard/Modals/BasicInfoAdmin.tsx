import React,{ useState} from 'react';
import { EyeNoShowIcon, EyeShowIcon, KeyIcon } from '../../../icons';
import { NewUserInterface } from '../../../utils/ModalTypes';
import { GroupAdminCreate } from '../../../utils/SelectOptions';

const BasicInfoAdmin =  ({FormDataAdmin, setFormDataAdmin}:{FormDataAdmin:NewUserInterface,setFormDataAdmin: any})  => {
    const [showPassword,setShowPasswords] = useState<Boolean>(false);

    return (
        <>
            <div className='py-1'>
                <label className="block text-gray-700 text-sm font-bold">
                    Password
                </label>
                <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md hover:border-backG border-2 border-white'>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <KeyIcon />
                    </div>
                    <input value={FormDataAdmin.password} onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, password: e.target.value })} className={`place-items-center w-full px-2 py-4 bg-inputG outline-none rounded-r-md text-backG`} type={!showPassword ? "password" : "text"} min={6} placeholder="••••••••••••••••" />
                    <div className='flex rounded-r-md place-items-center justify-center bg-inputG p-2'>
                        <button type='button' onClick={() => setShowPasswords((prev) => !prev)}>{!showPassword ? <EyeShowIcon /> : <EyeNoShowIcon />}</button>
                    </div>
                </div>
                <small className='text-[12px] text-red-500'>{FormDataAdmin?.password ? "" : "The Password should be provided "}</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Confirm Password
                </label>
                <input value={FormDataAdmin?.confirmPassword} onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, confirmPassword: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Input password credentials" />
                <small className='text-[12px] text-red-500'>{!(FormDataAdmin.confirmPassword == FormDataAdmin.password) ? "The Password Should match the confirm password" : ""}</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Role
                </label>
                <select onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, role: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                    {GroupAdminCreate.map((option) => (
                        <option key={option.id} value={option.value}>{option.text}</option>
                    ))}
                </select>
                <small className='text-[12px] text-red-500'>{FormDataAdmin.role ? "" : "The Role Should be provided"}</small>
            </div>
        </>
    )
}
export default BasicInfoAdmin