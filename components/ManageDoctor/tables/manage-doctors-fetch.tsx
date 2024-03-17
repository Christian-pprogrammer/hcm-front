import React, { useState } from 'react'
import { FaCheck, FaEllipsisH, FaPencilAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import DeleteUserModal from '../Modals/DeleteDoctorModal';
import EditUserModal from '../Modals/EditDoctorModal';

const ManageUsersFetch = ({ user }: any) => {
    const [DeleteModal, setDeleteModal] = useState<Boolean>(false)
    const [EditModal, setEditModal] = useState<Boolean>(false)
    const authUser = useSelector((state: any) => state.authUser);
    const [showListActions, setshowListActions] = useState<Boolean>(false)
    return (
        <tr key={user.id} className='bg-inputG relative hover:cursor-pointer font-medium text-[14px] duration-300 border-4 border-white'>
            <td className='py-4 whitespace-nowrap px-10'>
                <span>{user.username || user.fullName}</span>
            </td>
            <td className='px-10 whitespace-nowrap py-2'>
                {!(user.status == "Active") ? <div className='text-backG bg-linear w-10 h-10 border-2 border-backG flex justify-center place-items-center rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
            </td>
            <td className='px-10 whitespace-nowrap'>
                <span>{user?.role?.role}</span>
            </td>
            <td className='px-10 whitespace-nowrap'>
                <span>{user.createdAt}</span>
            </td>
            <td className='px-10 whitespace-nowrap  gap-10 text-backG'>
                <button onClick={() => setshowListActions((prev) => !prev)} className='hover:bg-slate-100 group-hover:bg-inputG p-3 bg-white rounded-lg'> <FaEllipsisH /></button>
            </td>
            {showListActions &&
                <td className="group bg-white flex-col z-20 flex text-[12px] absolute top-2 right-[9em]">
                    <button className="btn  py-2 px-4 bg-zinc-100 border-2 border-white" onClick={() => setEditModal(true)}>Edit User</button>
                    <button className="btn  py-2 px-4 hover:bg-zinc-100 hover:border-2 border-2 border-white hover:border-white duration-300" onClick={() => setDeleteModal(true)}>Delete User</button>
                </td>
            }
            <EditUserModal showModal={EditModal} onClose={() => setEditModal(false)} />
            <DeleteUserModal showModal={DeleteModal} onClose={() => setDeleteModal(false)} />
        </tr>
    )
}

export default ManageUsersFetch
