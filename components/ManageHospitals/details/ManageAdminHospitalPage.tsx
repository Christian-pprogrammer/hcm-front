import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaHome, FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import FetchDataLoader from '../../loaders/FetchDataLoader'
import ManageAdminModal from '../Modals/ManageAdminModal'
import { IUser } from '../../../utils/ModalTypes'
import hospitaladminService from '../../../services/hospital-admin/hospitaladmin.service'
import ManageHospitalAdminFetch from './ManageHospitalAdminFetch'

const ManageAdminHospitalPage = ({ id }: { id: any }) => {
    const [AddHospitalAdmin, setAddHospitalAdmin] = useState<boolean>(false)
    const [searchtext, setSearchText] = useState<string>('');
    const [manageHospitalAdmin, setmanageHospitalAdmin] = useState<IUser[]>([]);
    useEffect(() => {
        async function fetchData() {
            try {
              let data;
              if (id) {
                data = await hospitaladminService.getHospitalAdmins(id);
              } else {
                data = await hospitaladminService.getAllHospitalAdmins();
              }
                setmanageHospitalAdmin(data.data);
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
                reportError(ERROR_MESSAGE);
            }
        }
        fetchData();
    }, [id])
    return (
        <div className="px-2 bg-[#F7F7F7] ">
            <div className="content-link py-2 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/group-admin/manage-hospitals'>{`Manage Hospitals`}</Link>
            </div>
            <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
                <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                    <div className='flex gap-10'>
                        <h1 className="pt-3 font-bold text-[1.1em]">Manage Hospital Admin</h1>
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
                            <button onClick={() => setAddHospitalAdmin(true)} className='py-4 ripple text-[14px] bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
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
                            <tr className='text-left'>
                                <th className='py-5 text-[#000000c8] text-sm px-10'>Admin Name</th>
                                <th className='py-5 text-[#000000c8] text-sm px-10'>Status</th>
                                <th className='py-5 text-[#000000c8] text-sm'>Email</th>
                                <th className='py-5 text-[#000000c8] text-sm'>Issued On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manageHospitalAdmin ? manageHospitalAdmin.map((user: IUser) => (
                                <ManageHospitalAdminFetch user={user} key={user.id} />
                            )) : <tr className="w-full">
                                <td className='px-10 py-4'>
                                    <FetchDataLoader />
                                </td>
                                <td className='font-bold animate-pulse'>Fetching the data...</td>
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
