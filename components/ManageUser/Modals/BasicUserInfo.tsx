import React from 'react'
import { IUser } from '../../../utils/ModalTypes'

const BasicUserInfo = ({ FormData, setFormData }: { FormData: IUser, setFormData: React.Dispatch<React.SetStateAction<IUser>> }) => {
    const errors: string[] = [];

    if (!FormData.fullName) {
        errors.push("The full name should be provided");
    }
    if (!FormData.email) {
        errors.push("The email should be provided");
    }
    if (!FormData.mobile) {
        errors.push("The telephone should be provided");
    }
    if (!FormData.password) {
        errors.push("The Password should be provided");
    }
    if (!FormData.type) {
        errors.push("The manager type should be selected");
    }

    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Full Name
                </label>
                <input value={FormData?.fullName} onChange={(e) => setFormData({ ...FormData, fullName: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Email
                </label>
                <input value={FormData?.email} onChange={(e) => setFormData({ ...FormData, email: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Enter your email" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Telephone
                </label>
                <input value={FormData?.mobile} onChange={(e) => setFormData({ ...FormData, mobile: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your number" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Password
                </label>
                <input value={FormData?.password} onChange={(e) => setFormData({ ...FormData, password: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter password" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Manager type
                </label>
                <select value={FormData.type} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setFormData({...FormData, type: e.target.value})}>
                  <option value="">Select type</option>
                  <option value="SERVICE">Service</option>
                  <option value="OVERALL">Overall</option>
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

export default BasicUserInfo
