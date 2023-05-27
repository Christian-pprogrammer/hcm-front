import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaCheck, FaEllipsisH } from 'react-icons/fa';
import DeleteHospital from '../Modals/DeleteHospital';
import EditHospital from '../Modals/EditHospital';
import { IHospital } from '../../../utils/ModalTypes';

const ManageHospitalsFetch = ({ hospital }: { hospital: IHospital }) => {
    const [DeleteModal, setDeleteModal] = useState<Boolean>(false)
    const [EditModal, setEditModal] = useState<Boolean>(false);
    const [showListActions, setshowListActions] = useState<Boolean>(false);
    return (
        <tr key={hospital.hospitalId} className='bg-inputG relative text-[14px] duration-300 border-4 border-white py-4'>
            <td className='py-2 text-[14px] whitespace-nowrap lg:px-10 '>
                <h1 className='font-bold '>{hospital.hospitalName}</h1>
                <span className='text-[#00000073]'>{hospital.location}</span>
            </td>
            <td className='px-10 whitespace-nowrap py-2'>
                {hospital.status == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold text-center'>Inactive</span>}
            </td>
            <td className='whitespace-nowrap'>
                <span className='text-[#00000043]'>{hospital.email}</span>
            </td>
            <td className='whitespace-nowrap'>
                <span className='text-[#00000043]'>{hospital.createdAt}</span>
            </td>
            <td className='px-10 whitespace-nowrap text-backG'>
                <button onClick={() => setshowListActions((prev) => !prev)} className='hover:bg-slate-100 group-hover:bg-inputG p-3 bg-white rounded-lg'> <FaEllipsisH /></button>
            </td>
            {showListActions &&
                <td className="group bg-white flex-col flex text-[12px] absolute top-2 z-20 right-[9em]">
                    <button className="btn  py-2 px-4 bg-zinc-100 border-2 border-white" onClick={() => setEditModal(true)}>Edit Account</button>
                    <button className="btn  py-2 px-4 hover:bg-zinc-100 hover:border-2 border-2 border-white hover:border-white duration-300" onClick={() => setDeleteModal(true)}>Delete Hospital</button>
                    <button className="btn  py-2 px-4 hover:bg-zinc-100 border-2 border-white hover:border-white duration-300">
                        <Link href={
                            {
                                pathname: `/group-admin/groupdetail/${hospital.hospitalId}`,
                                query: {
                                    hospitalName: hospital.hospitalName
                                }
                            }
                        }>View Admin</Link>
                    </button>                </td>
            }
            <EditHospital EditModal={EditModal} onClose={() => setEditModal(false)} />
            <DeleteHospital showModal={DeleteModal} onClose={() => setDeleteModal(false)} id={hospital.hospitalId} />
        </tr>
    )
}

export default ManageHospitalsFetch