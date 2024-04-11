import React, { memo, useEffect } from 'react'
import { IHospital } from '../../../utils/ModalTypes';

const BasicInfo = ({ FormData, setFormData, setIsValid }: { FormData: IHospital, setFormData: React.Dispatch<React.SetStateAction<IHospital>>, setIsValid: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const errors: string[] = []
    if (!FormData.hospitalName) {
        errors.push("The Hospital Name is required!");
    }
    if (!FormData.email) {
        errors.push("The Hospital email is required!");
    }
    if (!FormData.mobile) {
        errors.push("The Hospital mobile is required!");
    }
    if (!FormData.paymentType) {
        errors.push("The Hospital's appointment type is required!");
    }
    useEffect(() => {
        if (errors.length > 0) {
            setIsValid(false)
        }
    }, [errors, setIsValid])
    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Hospital Name
                </label>
                <input value={FormData?.hospitalName} onChange={(e) => setFormData({ ...FormData, hospitalName: e.target.value })} className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your hospital name" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Email
                </label>
                <input value={FormData?.email} onChange={(e) => setFormData({ ...FormData, email: e.target.value })} className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Mobile
                </label>
                <input value={FormData?.mobile} onChange={(e) => setFormData({ ...FormData, mobile: e.target.value })} className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" placeholder="Mobile" />
            </div>
            <div className="py-1">
                <label htmlFor="paymentType" className="block text-gray-700 text-sm font-bold">
                    Appointment paid by:
                </label>
                <select value={FormData?.paymentType} onChange={(e) => setFormData({ ...FormData, paymentType: e.target.value })} className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="HOSPITAL">Hospital</option>
                  <option value="PATIENT">Patient</option>
                </select>
            </div>
            {errors.length > 0 && (
                <div className='py-2'>
                    <ul>
                        {errors.map((error: string, index: number) => (
                            <li key={index} className='flex text-[10px] place-items-center gap-6 text-red-500'>
                                <span aria-hidden="true">&times;</span><span>{error}</span></li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default memo(BasicInfo);
