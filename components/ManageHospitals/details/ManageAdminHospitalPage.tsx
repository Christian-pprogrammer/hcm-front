import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import {  FaHome, FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import hospitalService from '../../../services/hospital/hospital.service'
import { notifyError } from '../../alert'
import FetchDataLoader from '../../loaders/FetchDataLoader'
import ManageAdminModal from '../Modals/ManageAdminModal'
import ManageHospitalsFetch from '../tables/manage-hospital-fetchdata'

const ManageAdminHospitalPage = ({name,id}:{name:string,id:any}) => {
    const [AddHospitalAdmin, setAddHospitalAdmin] = useState<Boolean>(false)
    const [searchtext, setSearchText] = useState<string>('');
    const [manageHospitalData, setmanageHospitalData] = useState<any>(null);
    const authUser = useSelector((state: any) => state.authUser)
    useEffect(()=>{
    async function fetchData () {
        try {
            const groupId = authUser?.user?.group?.group_id;
            console.log("The Group ID",groupId);
            const data = await hospitalService.getAllHospitals();
            // setmanageHospitalData(data.data);
        }catch(error:any){
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
          }
    }
        fetchData();
    },[authUser?.user?.group?.group_id, manageHospitalData])
    return (
        <div className="px-2 bg-[#F7F7F7] ">
            <div className="content-link py-2 text-backG text-[12px] flex gap-4">
            <FaHome /><Link href='/group-admin/manage-hospitals'>{`Manage Hospitals / ${name}`}</Link>
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
                            <button onClick={() => setAddHospitalAdmin(true)} className='py-4 bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                                <FaPlus />
                                <span>New Admin</span>
                            </button>
                            <ManageAdminModal id={id} showModal={AddHospitalAdmin} onClose={() => setAddHospitalAdmin(false)} />
                        </div>
                    </div>
                </div>
                <div className=' min-h-[60vh] w-full overflow-x-auto'>
                    <table className=' table-auto w-full  '>
                        <thead>
                            <tr>
                                <th className='py-5 text-[#000000c8] text-sm '>Admin Name</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Status</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Email</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Issued On</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manageHospitalData ? manageHospitalData.map((hospital:any)=>(
                                <ManageHospitalsFetch hospital={hospital} key={hospital.hospitalId}/>
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
export default ManageAdminHospitalPage