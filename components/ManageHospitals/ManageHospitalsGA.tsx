import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaBan, FaCheck, FaEllipsisH, FaHome, FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa'
import AddHospital from './Modals/AddHospital'
import DeleteHospital from './Modals/DeleteHospital'
import EditHospital from './Modals/EditHospital'
import ManageAdminModal from './Modals/ManageAdminModal'
import hospitalService from '../../services/hospital/hospital.service'
import { notifyError, notifyInfo } from '../alert'
import FetchDataLoader from '../loaders/FetchDataLoader'
import { useSelector } from 'react-redux'

const ManageHospitalsGA = () => {
    const [DeleteModal, setDeleteModal] = useState<Boolean>(false)
    const [AddHospitalModal, setAddHospital] = useState<Boolean>(false)
    const [EditModal, setEditModal] = useState<Boolean>(false);
    const [showListActions, setshowListActions] = useState<Boolean>(false);
    const [showManageAdmin, setManageAdmin] = useState<Boolean>(false)
    const [searchtext, setSearchText] = useState<string>('');
    const [manageHospitalData, setmanageHospitalData] = useState<any>(null);
    const authUser = useSelector((state: any) => state.authUser)
    async function fetchData () {
        try {
            const groupId = authUser?.user?.group?.group_id;
            const data = await hospitalService.getGroupHospitals(groupId);
            setmanageHospitalData(data.data);
        }catch(error:any){
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
          }
    }
    useEffect(()=>{
        fetchData();
    },[manageHospitalData])
    return (
        <div className="px-2 bg-[#F7F7F7] ">
            <div className="content-link py-2 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard'>Manage Hospitals / </Link>
            </div>
            <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
                <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                    <div className='flex gap-10'>
                        <h1 className="pt-3 font-bold text-[1.1em]">Hospital Statistics</h1>
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
                        <div>
                            <button onClick={() => setAddHospital(true)} className='py-4 bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                                <FaPlus />
                                <span>New Hospital</span>
                            </button>
                            <AddHospital showModal={AddHospitalModal} onClose={() => setAddHospital(false)} />
                        </div>
                    </div>
                </div>
                <div className=' w-full overflow-x-auto'>
                    <table className=' table-auto w-full  '>
                        <thead>
                            <tr>
                                <th className='py-5 text-[#000000c8] text-sm '>Accounts</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Status</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Email</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Issued On</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manageHospitalData ? manageHospitalData.map((hospital:any)=>(
                            <tr key={hospital.hospitalId} className='bg-inputG relative hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                                <td className='py-2  whitespace-nowrap lg:px-5 '>
                                    <div className='flex px-2 gap-6'>
                                        <img className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
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
                                    <td className="group bg-white flex-col  flex text-[12px] absolute top-2 right-[14em]">
                                        <button className="btn  py-2 px-4 bg-zinc-100 border-2 border-white" onClick={() => setEditModal(true)}>Edit Hospital</button>
                                        <button className="btn  py-2 px-4 hover:bg-zinc-100 hover:border-2 border-2 border-white hover:border-white duration-300" onClick={() => setDeleteModal(true)}>Delete Hospital</button>
                                        <button className="btn  py-2 px-4 hover:bg-zinc-100 hover:border-2 border-2 border-white hover:border-white duration-300" onClick={() => setManageAdmin(true)}>Manage Director</button>
                                    </td>
                                }
                                <EditHospital EditModal={EditModal} onClose={() => setEditModal(false)} />
                                <DeleteHospital showModal={DeleteModal} onClose={() => setDeleteModal(false)} />
                                <ManageAdminModal showModal={showManageAdmin} onClose={() => setManageAdmin(false)} />
                            </tr>
                            )) : <tr className="flex justify-center text-center gap-6 flex-col place-items-center bg-white w-full">
                            <FetchDataLoader/>
                            <p>Fetching the data...</p>
                        </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
// export const getServerSideProps = async ({
//     res
//   }) => {
//     try{
//         const data = await hospitalService.getAllHospitals();
//         if(data){
//             notifySuccess(data.data.message || "Hospital Data Retrieved Successfully")
//         }
//         return {
//             props : {data}
//         }
//     }catch(error:any){
//         res.statusCode = 404;
//         const Error_Message = error.message;
//         reportError(Error_Message);
//         notifyError(Error_Message);
//         return {
//             props : {}
//         }
//     }
//   };
export default ManageHospitalsGA
