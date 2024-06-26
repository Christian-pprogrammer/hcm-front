import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaCheck, FaHome, FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa'
import FetchDataLoader from '../loaders/FetchDataLoader'
import userService from '../../services/users/user.service'
import { notifyError } from '../alert'
import AddNewUser from './Modals/AddNewUser'
import ManageUsersFetch from './tables/manage-users-fetch'
import { IUser } from '../../utils/ModalTypes'
import { system_users } from '../../utils/constants'

const ManageUserAdmin = () => {
    const [AddUserModal, setAddUserModal] = useState<Boolean>(false)
    const [searchtext, setSearchText] = useState<string>('');
    let [manageUserData, setmanageUserData] = useState<IUser[]>([]);
    async function fetchData() {
        try {
            const data = await userService.getAll();
            // console.log(data.data);
            setmanageUserData(data.data?.filter((user: IUser) => (user.roles[0].role == system_users.SCHEDULE_MANAGER)));
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="px-2 bg-[#F7F7F7] ">
            <div className="content-link py-2 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard'>Manage Users / </Link>
            </div>
            <div className="bg-white border-2 h-[85vh] rounded-lg border-[#0000002]">
                <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                    <div className='flex gap-10'>
                        <h1 className="pt-3 font-bold text-[1.1em]">User Statistics</h1>
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
                            <button onClick={() => setAddUserModal(true)} className='py-4 ripple text-[14px] bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                                <FaPlus />
                                <span>New Sch manager</span>
                            </button>
                            <AddNewUser showModal={AddUserModal} onClose={() => setAddUserModal(false)} />
                        </div>
                    </div>
                </div>
                <div className=' w-full overflow-y-auto h-[65vh]'>
                    <table className=' table-auto w-full  '>
                        <thead>
                            <tr className='text-left'>
                                <th className='py-5 text-[#000000c8] text-sm px-10'>Account Username</th>
                                <th className='py-5 text-[#000000c8] text-sm px-10'>Status</th>
                                <th className='py-5 text-[#000000c8] text-sm px-10'>Account Category</th>
                                <th className='py-5 text-[#000000c8] text-sm px-10'>Issued on</th>
                                <th className='py-5 text-[#000000c8] text-sm px-10'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='overflow-y-auto'>
                            {manageUserData ? manageUserData.map((user: any) => (
                                <ManageUsersFetch user={user} key={user.id} />
                            )) :
                                <tr className="flex justify-center text-center gap-6 flex-col place-items-center bg-white w-full">
                                    <FetchDataLoader />
                                    <td>Fetching the data...</td>
                                </tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageUserAdmin;
