import Link from 'next/link'
import React, { useState } from 'react'
import { FaCheck, FaEllipsisH } from 'react-icons/fa'
import DeleteAcc from '../Modals/DeleteAcc'
import EditAccount from '../Modals/EditAccount'
import { IGroup } from '../../../utils/ModalTypes'

const ManageAdminsGA = ({ acc }: { acc: IGroup }) => {
    const [showModal, setModal] = useState<Boolean>(false)
    const [EditModal, setEditModal] = useState<Boolean>(false);
    const [showListActions, setshowListActions] = useState<Boolean>(false);
    return (
        <tr className='bg-inputG rlative overflow-auto z-0 hover:cursor-pointer hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white h-4'>
            <td className='py-2  whitespace-nowrap lg:px-5 flex px-2 gap-6 justify-center place-items-center text-center'>
                <h1 className='font-bold '>{acc.groupName}</h1>
            </td>
            <td className='px-10 whitespace-nowrap  py-2  place-items-center align-middle justify-center'>
                {acc.status == "ACTIVE" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
            </td>
            <td className='flex  whitespace-nowrap py-4 justify-center px-10 place-items-center '>
                <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-backG border-2 border-white'>KG</span>
                <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-pink-500 border-2 border-white'>KG</span>
                <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-indigo-500 border-2 border-white'>KG</span>
                <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-green-500 border-2 border-white'>KG</span>
                <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-red-500 border-2 border-white'>+248</span>
            </td>
            <td className='px-10 whitespace-nowrap '>
                <span className='text-[#00000043]'>{acc.updatedAt}</span>
            </td>
            <td className='px-10 whitespace-nowrap justify-center flex gap-10 text-backG'>
                <button onClick={() => setshowListActions((prev) => !prev)} className='hover:bg-slate-100 group-hover:bg-inputG p-3 bg-white rounded-lg'> <FaEllipsisH /></button>
            </td>
            {showListActions &&
                <td className="group absolute z-20 top-2 right-[8em] bg-white flex-col flex text-[12px]">
                    <button className="btn  py-2 px-4 bg-zinc-100 border-2 border-white" onClick={() => setEditModal(true)}>Edit Account</button>
                    <button className="btn  py-2 px-4 hover:bg-zinc-100 border-2 border-white hover:border-white duration-300" onClick={() => setModal(true)}>Delete Account</button>
                    <button className="btn  py-2 px-4 hover:bg-zinc-100 border-2 border-white hover:border-white duration-300">
                        <Link href={
                            {
                                pathname: `/super-admin/admindetail/${acc.group_id}`,
                                query: {
                                    groupName: acc.groupName
                                }
                            }
                        }>View Admin</Link>
                    </button>
                </td>
            }
            <DeleteAcc showModal={showModal} onClose={() => setModal(false)} id={acc.group_id} />
            <EditAccount EditModal={EditModal} onClose={() => setEditModal(false)} />
        </tr>
    )
}

export default ManageAdminsGA