import Image from 'next/image';
import React,{ useState} from 'react'
import { FaCheck, FaEllipsisH } from 'react-icons/fa';
import DeleteHospital from '../Modals/DeleteHospital';
import EditHospital from '../Modals/EditHospital';
import ManageAdminModal from '../Modals/ManageAdminModal';

const ManageHospitalsFetch = ({hospital}:{hospital:any}) => {
    const [DeleteModal, setDeleteModal] = useState<Boolean>(false)
    const [EditModal, setEditModal] = useState<Boolean>(false);
    const [showListActions, setshowListActions] = useState<Boolean>(false);
    const [showManageAdmin, setManageAdmin] = useState<Boolean>(false);
    return (
    <tr key={hospital.hospitalId} className='bg-inputG relative hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
    <td className='py-2  whitespace-nowrap lg:px-5 '>
        <div className='flex px-2 gap-6'>
        <Image className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="/static/doctorsystem.jpg" alt="" width="300" height="300"/>
            <div>
                <h1 className='font-bold '>{hospital.hospitalName}</h1>
                <span className='text-[#00000073]'>{hospital.location}</span>
            </div>
        </div>
    </td>
    <td className='px-10  whitespace-nowrap flex py-2  place-items-center align-middle flex-col  justify-center'>
        {hospital.status == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold text-center'>Inactive</span>}
    </td>
    <td className='px-10 whitespace-nowrap text-center'>
        <span className='text-[#00000043]'>{hospital.email}</span>
    </td>
    <td className='px-10 whitespace-nowrap text-center'>
        <span className='text-[#00000043]'>{hospital.createdAt}</span>
    </td>
    <td className='px-10 whitespace-nowrap justify-center flex text-center place-items-center gap-10 text-backG'>
        <button onClick={() => setshowListActions((prev) => !prev)} className='hover:bg-slate-100 group-hover:bg-inputG p-3 bg-white rounded-lg'> <FaEllipsisH /></button>
    </td>
    {showListActions &&
        <td className="group bg-white flex-col flex text-[12px] absolute top-2 right-[9em]">
        <button className="btn  py-2 px-4 bg-zinc-100 border-2 border-white" onClick={()=>setEditModal(true)}>Edit Account</button>
        <button className="btn  py-2 px-4 hover:bg-zinc-100 hover:border-2 border-2 border-white hover:border-white duration-300" onClick={()=>setDeleteModal(true)}>Delete Hospital</button>
        <button className="btn  py-2 px-4 hover:bg-zinc-100 hover:border-2 border-2 border-white hover:border-white duration-300" onClick={()=>setManageAdmin(true)}>Create Admin</button>
    </td>
    }
    <EditHospital EditModal={EditModal} onClose={() => setEditModal(false)} />
    <DeleteHospital showModal={DeleteModal} onClose={() => setDeleteModal(false)} />
    <ManageAdminModal id={hospital.hospitalId} showModal={showManageAdmin} onClose={() => setManageAdmin(false)} />
</tr>
  )
}

export default ManageHospitalsFetch