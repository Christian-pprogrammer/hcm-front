import Link from 'next/link'
import React, { useState } from 'react'
import { FaBan, FaCheck, FaHome, FaMap, FaPaperPlane, FaPencilAlt, FaPlus, FaTrash, FaUserAlt } from 'react-icons/fa'

import MapAppointments from './Modals/MapAppointments'
import NewSchedule from './Modals/NewSchedule'
import SendAppointments from './Modals/SendAppointments'


const AppointmentList = ({ onClose }: { onClose: any }) => {
    const [MapModal, setMapModal] = useState<Boolean>(false)
    const [SendAppModal, setSendAppModal] = useState<Boolean>(false)
    const [searchtext, setSearchText] = useState<string>('');
    const [showAction, setShowActions] = useState<Boolean>(false)
    const STATUS = 'Active'
    const handleBackPage = () => {
        onClose()
    }
    return (
        <div className="px-2 bg-[#F7F7F7]">
            <div className="content-link py-2 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard'>Schedule /</Link><Link href='/'>Service</Link>
            </div>
            <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
                <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                    <span aria-hidden="true" className='text-backG hover:bg-slate-200 hover:scale-105 p-2 px-4 duration-500 hover:cursor-pointer rounded-full' onClick={handleBackPage}>&times;</span>
                    <div className='flex gap-10'>
                        <h1 className="pt-3 font-bold text-[1.1em]">Dermatology Services</h1>
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
                            <input type="text" onChange={(e) => setSearchText(e.target.value)} value={searchtext} className="form-control rounded-lg outline-none border-none text-backG py-4 px-20 bg-inputG" placeholder="Search Account Name" />
                        </div>
                        <div className='flex gap-2'>
                            <button disabled={showAction ? false : true} onClick={() => setMapModal(true)} className='py-4 bg-linear border-backG border-2 text-backG flex place-items-center justify-center px-4 gap-2 rounded-lg'>
                                <FaMap className='text-backG' />
                                <span>Map Appointment</span>
                            </button>
                            <button onClick={() => setSendAppModal(true)} className='py-4 bg-linear border-backG border-2 text-backG flex place-items-center justify-center px-4  rounded-lg  gap-6'>
                                <FaPaperPlane className='text-backG' />
                                <span>Send Appointment</span>
                            </button>
                            <SendAppointments SendAppModal={SendAppModal} onClose={() => setSendAppModal(false)} />
                            <MapAppointments MapModal={MapModal} onClose={() => setMapModal(false)} />
                        </div>
                    </div>
                </div>
                <div className=' w-full overflow-x-auto'>
                    <table className=' table-auto w-full  '>
                        <thead>
                            <tr>
                                <th className='py-5 text-[#000000c8] text-sm '>Time</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Patient Name</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Patient Telephone</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Patient RecordNumber</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Appointment Date</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Appointment Status</th>
                                {showAction &&
                                    <th className='py-5 text-[#000000c8] text-sm '>Actions</th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-inputG hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                                <td className='py-2  text-center flex place-items-center  whitespace-nowrap  lg:px-5 '>
                                    <input type="checkbox" className="h-4 w-4 bg-inputG" onClick={() => setShowActions((prev) => !prev)} />
                                    <span className='text-[#00000043] pl-2 font-bold'>08.00am - 08.30am</span>
                                </td>
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
                                    <span className='text-[#00000043]'>12/12/2021</span>
                                </td>
                                <td className='px-10  whitespace-nowrap py-2 text-center flex justify-center place-items-center '>
                                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                                </td>
                                {showAction &&
                                    <td className='px-10 whitespace-nowrap text-center gap-10 text-backG'>
                                        <button onClick={() => setMapModal(true)}> <FaUserAlt /></button> <MapAppointments MapModal={MapModal} onClose={() => setMapModal(false)} />
                                    </td>
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AppointmentList