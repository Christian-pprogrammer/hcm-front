import React from 'react'
import { HospitalAdminNew, NewUserInterface } from '../../../utils/ModalTypes'
import { GenderOptions } from '../../../utils/SelectOptions'

const BasicAdminInfo = ({ FormDataAdmin, setFormDataAdmin }: { FormDataAdmin: HospitalAdminNew, setFormDataAdmin: any }) => {

    return (
        <>
            <div className='py-1'>
                <label className="block text-gray-700 text-sm font-bold">
                    User Name
                </label>
                <input value={FormDataAdmin?.fullName} onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, fullName: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
                <small className='text-[12px] text-red-500'>{FormDataAdmin.fullName ? "" : "Valid info required"}</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Email
                </label>
                <input value={FormDataAdmin?.email} onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, email: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                <small className='text-[12px] text-red-500'>{FormDataAdmin.email ? "" : "Valid info required"}</small>
            </div>
            <div className='py-1'>
                <label className="block text-gray-700 text-sm font-bold">
                    Tel
                </label>
                <input onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, mobile: e.target.valueAsNumber })} value={FormDataAdmin?.mobile} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Telephone" />
                <small className='text-[12px] text-red-500'>{FormDataAdmin.mobile ? "" : "Valid info required"}</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Gender Options
                </label>
                <select onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, gender: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                    {GenderOptions.map((option: any) => (
                        <option key={option.id} value={option.value}>{option.text}</option>
                    ))}
                </select>
                <small className='text-[12px] text-red-500'>{FormDataAdmin.gender ? "" : ""}</small>
            </div>
        </>
    )
}
export default BasicAdminInfo