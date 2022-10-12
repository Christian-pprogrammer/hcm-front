import React from 'react'
import { NewUserInterface } from '../../../utils/ModalTypes'

const AdvanceUserInfo = ({ FormData, setFormData }: { FormData: NewUserInterface, setFormData: any }) => {
    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Username
                </label>
                <input value={FormData?.username} onChange={(e) => setFormData({ ...FormData, username: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Email
                </label>
                <input value={FormData?.email} onChange={(e) => setFormData({ ...FormData, email: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Enter your email" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Password
                </label>
                <input value={FormData?.password} onChange={(e) => setFormData({ ...FormData, password: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter password" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
        </>
    )
}

export default AdvanceUserInfo