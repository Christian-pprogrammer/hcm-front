import { GetServerSideProps } from 'next';
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import appointmentService from '../../services/appointments/appointment.service';
import groupAdminService from '../../services/users/group-admin.service';
import { notifyError, notifySuccess } from '../alert';
import RequestAppointment from './Modals/RequestAppointment';

//Landing Page Appointment

const AppointmentPage = (data:any) => {
    const [searchtext, setSearchText] = useState<string>('');
    const [showModal, setShowModal] = useState<Boolean>(false)
    const STATUS = 'Active';

    return (
            <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
                <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                    <div className='flex gap-10'>
                        <h1 className="pt-3 font-bold text-[1.1em]">Patient Requests</h1>
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
                    </div>
                </div>
                <div className=' w-full overflow-x-auto'>
                    <table className=' table-auto w-full  '>
                        <thead>
                            <tr>
                                <th className='py-5 text-[#000000c8] text-sm '>Working Hrs</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Hospital Name</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Telephone</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Date</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Appointment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-inputG hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                                <td className='py-2  text-center flex place-items-center  whitespace-nowrap justify-center lg:px-5 '>
                                    <input type="checkbox" className="h-4 w-4 bg-inputG" onClick={() => setShowModal(true)} />
                                    <span className='text-[#00000043] pl-2  font-bold'>08.00am - 08.30am</span>
                                </td>
                                <RequestAppointment showModal={showModal} onClose={() => setShowModal(false)} />
                                <td className='py-2  whitespace-nowrap lg:px-5 text-center'>
                                    <span className='text-black font-bold'>FAISAL</span>
                                </td>
                                <td className='px-10 whitespace-nowrap text-center'>
                                    <span className='text-[#00000043]'>0780918379</span>
                                </td>
                                <td className='px-10 whitespace-nowrap text-center'>
                                    <span className='text-[#00000043]'>12/12/2021</span>
                                </td>
                                <td className='px-10  whitespace-nowrap py-2 text-center flex justify-center place-items-center '>
                                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}
export const getServerSideProps: GetServerSideProps = async ({
    res
  }) => {
    try{
        const data = await groupAdminService.getAllGroupsAdmins();
        notifySuccess('Success Call');
        return {
            props : {data}
        }
    }catch(error:any){
        res.statusCode = 404;
        const Error_Message = error.message;
        reportError(Error_Message);
        notifyError(Error_Message);
        return {
            props : {}
        }
    }
  };
export default AppointmentPage
