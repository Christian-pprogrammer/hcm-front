import React,{ useState } from 'react'
import Link from 'next/link'
import DeleteAcc from './Modals/DeleteAcc'
import { FaCheck,FaEye,FaFileImport,FaHome, FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa'
import AddAccount from './Modals/AddAccount'
import EditAccount from './Modals/EditAccount'
import ViewAudit from './Modals/ViewAudit'
import ConfirmStep from './Modals/ConfirmStep'

const AuditStatus = () => {
    const [showModal,setModal] = useState<Boolean>(false)
    const [showConfirm,setShowConfirm] = useState<Boolean>(false)
    const [searchtext,setSearchText] = useState<string>('');
    const toggleModal = () =>{
        setModal(!showModal)
    }
    const toggleShowConfirm = () =>{
        setShowConfirm(!showConfirm)
    }
    const STATUS = 'Active'
  return (
    <div className="px-2 bg-[#F7F7F7] ">
        <div className="content-link py-2 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/SuperAdmin/Dashboard'>Audit Status / </Link> 
        </div>
        <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
            <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                <div className='flex gap-10'>
                    <h1 className="pt-3 font-bold text-[1.1em]">Audit Statistics</h1>
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
                        <button onClick={toggleShowConfirm} className='py-4 bg-backG text-white flex place-items-center justify-center px-10 rounded-lg  gap-6'>
                            <FaFileImport/>
                            <span>Download Report</span>
                            <ConfirmStep showConfirm={showConfirm} onClose={()=>setShowConfirm(false)}>
                            <div className=" flex justify-center place-items-center text-slate-500 text-[12px] flex-col gap-4">
                                <p>Accept that all appointment request are added to their prescribed and requested schedules at once. This is an irreversible action.Confirm the process to run at once.</p>
                                <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> 
                            </div>
                            </ConfirmStep>
                        </button>
                    </div>
                </div>
            </div>
        <div className='overflow-x-auto w-full'>
         <table className='table-auto w-full '>
            <thead className=''>
                <tr>
                <th className='py-5 text-[#000000c8] text-sm'>Account Category </th>
                <th className='py-5 text-[#000000c8] text-sm'>Date</th>
                <th className='py-5 text-[#000000c8] text-sm'>Account Status</th>
                <th className='py-5 text-[#000000c8] text-sm'>Description </th>
                <th className='py-5 text-[#000000c8] text-sm'>Changed By</th>
                <th className='py-5 text-[#000000c8] text-sm'>View</th>
                </tr>
            </thead>
            <tbody className=''>
                <tr className='bg-inputG group hover:cursor-pointer hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                    <td className='py-2 text-[#0000006c] whitespace-nowrap text-center lg:px-5'>
                        Doctor account
                    </td>
                    <td className='py-2 text-[#0000006c] whitespace-nowrap text-center lg:px-5'>
                        12/02/2021
                    </td>
                    <td className=' whitespace-nowrap  py-2  place-items-center lg:px-5 align-middle justify-center'>
                        {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                    </td>
                    <td className='py-2 text-[#0000006c] break-words whitespace-nowrap lg:px-5 text-center  '>
                        <p>Approved the schedules on 12/2/2022 </p>
                    </td>
                    <td className='py-2 text-[#0000006c] whitespace-nowrap text-center lg:px-5'>
                        <p>Dr.Sebatunzi Marcel </p>
                    </td>
                    <td className='py-2 lg:px-10 whitespace-nowrap flex justify-center gap-10 text-backG'>
                        <button onClick={toggleModal} className='p-4 bg-white flex group-hover:bg-inputG justify-center place-items-center'><FaEye /><ViewAudit showModal={showModal} onClose={toggleModal}> <div className='text-[12px] text-slate-500 '> <p>The Doctor Account registered under the names of Dr. Sebatunzi, performed the recent activities such as sending appointment to the patient account under the Names of Martin Uwera . </p> <p>The Doctor Account rescheduled the 02/02/2022 schedule creating and extending the schedule hours</p></div></ViewAudit></button>
                    </td>
                </tr>
                <tr className='bg-inputG group hover:cursor-pointer hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                    <td className='py-2 text-[#0000006c] whitespace-nowrap text-center lg:px-5'>
                        Doctor account
                    </td>
                    <td className='py-2 text-[#0000006c] whitespace-nowrap text-center lg:px-5'>
                        12/02/2021
                    </td>
                    <td className=' whitespace-nowrap  py-2  place-items-center lg:px-5 align-middle justify-center'>
                        {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                    </td>
                    <td className='py-2 text-[#0000006c] break-words text-center whitespace-nowrap '>
                        <p> Create a new application and connect to the server.</p>
                    </td>
                    <td className='py-2 text-[#0000006c] whitespace-nowrap text-center lg:px-5'>
                        <p>Dr.Sebatunzi Marcel </p>
                    </td>
                    <td className='py-2 lg:px-10 whitespace-nowrap flex place-items-center justify-center text-backG'>
                        <button onClick={toggleModal} className='p-4 bg-white flex group-hover:bg-inputG justify-center place-items-center'><FaEye /><ViewAudit showModal={showModal} onClose={toggleModal}> <div className='text-[12px] text-slate-500 '> <p>The Doctor Account registered under the names of Dr. Sebatunzi, performed the recent activities such as sending appointment to the patient account under the Names of Martin Uwera . </p> <p>The Doctor Account rescheduled the 02/02/2022 schedule creating and extending the schedule hours</p></div></ViewAudit></button>
                    </td>
                </tr>
                
            </tbody>
        </table>
        </div>
        </div>

    </div>
  )
}

export default AuditStatus