import Link from 'next/link'
import React, { useState } from 'react'
import { FaBan, FaCheck, FaHome, FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa'
import DeleteSchedule from './Modals/DeleteSchedule'
import EditSchedule from './Modals/EditSchedule'
import NewSchedule from './Modals/NewSchedule'

const ManageSchedulesTable = ({showAppFunc}:{ showAppFunc :any}) => {
    const [DeleteModal,setDeleteModal] = useState<Boolean>(false)
    const [EditModal,setEditModal] = useState<Boolean>(false)
    const [NewScheduleModal,setNewScheduleModal] = useState<Boolean>(false)
    const [searchtext,setSearchText] = useState<string>(''); 
  const STATUS ='Active'
  const handleShowApp = () => {
    showAppFunc();
  }
  return (
    <div className="px-2 bg-[#F7F7F7] ">
        <div className="content-link py-2 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard'>Manage Schedules / </Link> 
        </div>
        <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
            <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                <div className='flex gap-10'>
                    <h1 className="pt-3 font-bold text-[1.1em]">Schedule Analysis</h1>
                    <div className="px-2 ">
                        <select name="" id="" className='bg-white border-2 border-[#00000020]  rounded-2xl outline-none px-2 py-2'>
                            <option defaultValue="today">Today</option>
                            <option defaultValue="today">Yesterday</option>
                            <option defaultValue="today">Week</option>
                            <option defaultValue="today">Month</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex hidden justify-end gap-4">
                    <div>
                        <input type="text" onChange={(e)=>setSearchText(e.target.value)} value={searchtext} className="form-control rounded-lg outline-none border-none text-backG py-4 px-20 bg-inputG" placeholder="Search Account Name"/>
                    </div>
                    <div>
                        <button onClick={()=>setNewScheduleModal(true)} className='py-4 bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                            <FaPlus/>
                            <span className=''>New Schedule</span>
                        </button>
                        <NewSchedule NewScheduleModal={NewScheduleModal} onClose={()=>setNewScheduleModal(false)} />
                    </div>
                </div>
            </div>
        <div className=' w-full overflow-x-auto'>
        <table className=' table-auto w-full  '>
        <thead>
            <tr>
            <th className='py-5 text-[#000000c8] text-sm '>Services</th>
            <th className='py-5 text-[#000000c8] text-sm '>Status</th>
            <th className='py-5 text-[#000000c8] text-sm '>Appointment Date</th>
            <th className='py-5 text-[#000000c8] text-sm '>Waiting Appointments</th>
            <th className='py-5 text-[#000000c8] text-sm '>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr onClick={handleShowApp} className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap lg:px-5 text-center'>
                    <span className='text-black font-bold'>Dermatology Services</span>
                </td>
                <td className='px-10  whitespace-nowrap flex py-2  place-items-center align-middle justify-center'>
                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>12/12/2021</span>
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>12</span>
                </td>
                <td className='px-10 whitespace-nowrap flex gap-10 place-items-center text-center justify-center text-backG'>
                    <button onClick={()=>setEditModal(true)}><FaPencilAlt /></button><EditSchedule EditModal={EditModal} onClose={()=>setEditModal(false)}/>
                    <button onClick={()=>setDeleteModal(true)}> <FaTrash/></button> <DeleteSchedule showModal={DeleteModal} onClose={()=>setDeleteModal(false)}/>
                </td>
            </tr>
            
        </tbody>
    </table>
        </div>
        </div>
    </div>
  )
}

export default ManageSchedulesTable