import React from 'react'
import { IUser } from '../../../utils/ModalTypes'
import { FaCheck } from 'react-icons/fa'

const ManageHospitalAdminFetch = ({ user }: { user: IUser }) => {
    return (
        <tr className='bg-inputG text-[black] relative overflow-auto z-0 hover:cursor-pointer border-4 border-white'>
            <td className='py-4 whitespace-nowrap px-10'>
                <span>{user.fullName}</span>
            </td>
            <td className='py-2 px-10'>
                {user.status == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
            </td>
            <td className='py-2 whitespace-nowrap'>
                <span>{user.email}</span>
            </td>
            <td className='py-2 whitespace-nowrap'>
                <span>{user.createdAt}</span>
            </td>
        </tr>
    )
}

export default ManageHospitalAdminFetch