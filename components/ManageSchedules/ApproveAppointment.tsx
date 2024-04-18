import Link from 'next/link'
import React, { useState } from 'react'
import { FaCheck, FaHome} from 'react-icons/fa'
import AcceptAll from './Modals/AcceptAll'

import SendAppointments from './Modals/RescheduleAppointments'


const ApproveAppointments = () => {
  const [showModal,setShowModal] = useState<Boolean>(false)
  const [searchtext,setSearchText] = useState<string>('');
  const STATUS ='Active'
  return (
    <div className="px-2 bg-[#F7F7F7]">
        <div className="content-link py-2 text-backG text-[12px] flex gap-4">
            <FaHome /><Link href='/HCM/Dashboard'>Notification /</Link>
        </div>
        <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
            <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                <div className='flex gap-10'>
                    <h1 className="pt-3 font-bold text-[1.1em]">Ongoing Appointments</h1>
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
                        <button onClick={()=>setShowModal(true)} className='py-4 bg-backG border-backG border-2 text-white  px-6  rounded-lg'>
                            <span>Accept All</span>
                        </button>
                        <AcceptAll showModal={showModal} onClose={()=>setShowModal(false)} />
                    </div>
                </div>
            </div>
        <div className=' w-full overflow-x-auto'>
        <table className=' table-auto w-full  '>
        <thead>
            <tr>
            <th className='py-5 text-[#000000c8] text-sm '>Patient Name</th>
            <th className='py-5 text-[#000000c8] text-sm '>Patient Telephone</th>
            <th className='py-5 text-[#000000c8] text-sm '>Patient RecordNumber</th>
            <th className='py-5 text-[#000000c8] text-sm '>Patient Department</th>
            <th className='py-5 text-[#000000c8] text-sm '>Appointment Date</th>
            <th className='py-5 text-[#000000c8] text-sm '>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr className='bg-inputG hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap lg:px-5 text-center'>
                    <span className='text-black font-bold'>Albert Muraho</span>
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>0780918379</span>
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>99223</span>
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>Dermatology</span>
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>12/12/2021</span>
                </td>

                <td className='px-10 whitespace-nowrap text-center flex place-items-center justify-center py-2 h-16 gap-6'>
                    <button className='text-red-500 bg-redlinearG w-10 h-10 border-2 border-red-500 flex justify-center place-items-center rounded-full font-bold '><span aria-hidden="true" className='text-xl'>&times;</span></button>
                    <button className='text-backG bg-linear w-10 h-10 border-2 border-backG flex justify-center place-items-center rounded-full font-bold '><FaCheck /></button>
                </td>
            </tr>
        </tbody>
    </table>
        </div>
        </div>
    </div>
  )
}

export default ApproveAppointments
