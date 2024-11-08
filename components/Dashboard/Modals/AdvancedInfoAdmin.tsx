import React,{useEffect} from 'react'
import { GenderOptions } from '../../../utils/SelectOptions'
import { IUser } from '../../../utils/ModalTypes'

const AdvancedInfoAdmin = ({ FormDataAdmin, setFormDataAdmin, setIsValid }: { FormDataAdmin: IUser, setFormDataAdmin: React.Dispatch<React.SetStateAction<IUser>>, setIsValid: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const errors: string[] = [];

    if (!FormDataAdmin.fullName) {
        errors.push("The fullname is required!");
    }
    if (!FormDataAdmin.email) {
        errors.push("The email is required!");
    }
    if (!FormDataAdmin.mobile) {
        errors.push("The telephone is required");
    }
    if (!FormDataAdmin.gender) {
        errors.push("The gender is required");
    }
    useEffect(() => {
        if (errors.length > 0) {
            setIsValid(false)
        }
    }, [errors, setIsValid])

    return (
        <>
            <div className='py-1'>
                <label className="block text-gray-700 text-sm font-bold">
                    User Name
                </label>
                <input value={FormDataAdmin?.fullName} onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, fullName: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Email
                </label>
                <input value={FormDataAdmin?.email} onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, email: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
            </div>
            <div className='py-1'>
                <label className="block text-gray-700 text-sm font-bold">
                    Tel
                </label>
                <input onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, mobile: e.target.valueAsNumber })} value={FormDataAdmin?.mobile} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Telephone" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Gender Options
                </label>
                <select onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, gender: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                    {GenderOptions.map((option: any) => (
                        <option key={option.id} value={option.value}>{option.text}</option>
                    ))}
                </select>
            </div>
            {errors.length > 0 && (
                <div className='py-2'>
                    <ul>
                        {errors.map((error: string, index: number) => (
                            <li key={index+1} className='flex text-[10px] place-items-center gap-6 text-red-500'>
                                <span aria-hidden="true">&times;</span><span>{error}</span></li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}
export default AdvancedInfoAdmin
