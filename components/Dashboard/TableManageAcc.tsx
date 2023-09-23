import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaHome, FaPlus } from 'react-icons/fa'
import AddAccount from './Modals/AddAccount'
import ManageAccountsFetchData from './tablesdata/manage-accounts'
import groupService from '../../services/group/group.service'
import FetchDataLoader from '../loaders/FetchDataLoader'
import { notifyError } from '../alert'
import { IGroup } from '../../utils/ModalTypes'

const TableManageAcc = () => {
    const [addAccount, setAddAccount] = useState<Boolean>(false)
    const [searchtext, setSearchText] = useState<string>('');
    let [manageAccData, setmanageAccData] = useState<IGroup[]>([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await groupService.getAllGroups();
                console.log("data...", data)
                setmanageAccData(data.data);
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Failure, try again!" : error.error;
                reportError(ERROR_MESSAGE);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="px-2 bg-[#F7F7F7] ">
            <div className="content-link py-2 text-backG text-[12px] flex gap-4"><FaHome /><Link href='/super-admin/manage-accounts'>Manage Accounts / </Link>
            </div>
            <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
                <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                    <div className='flex gap-10'>
                        <h1 className="pt-3 font-bold text-[1.1em]">Registered Accounts</h1>
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
                            <button onClick={() => setAddAccount(true)} className='py-4 ripple text-[14px] bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                                <FaPlus />
                                <span>Add Account</span>
                            </button>
                            <AddAccount showModal={addAccount} onClose={() => setAddAccount(false)} />
                        </div>
                    </div>
                </div>
                <div className=' w-full min-h-[60vh] overflow-auto'>
                    {manageAccData ?
                        <table className='w-full table-auto'>
                            <thead>
                                <tr>
                                    <th className='py-5 text-[#000000c8] text-sm'>Accounts</th>
                                    <th className='py-5 text-[#000000c8] text-sm'>Status</th>
                                    <th className='py-5 text-[#000000c8] text-sm'>Hospitals Registered</th>
                                    <th className='py-5 text-[#000000c8] text-sm'>License Date</th>
                                    <th className='py-5 text-[#000000c8] text-sm'>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {manageAccData ? manageAccData.map((acc: IGroup) => (
                                    <ManageAccountsFetchData key={acc.group_id} acc={acc} />
                                )) :
                                    <tr className="flex justify-center text-center gap-6 flex-col place-items-center bg-white w-full">
                                        <FetchDataLoader />
                                        <td>Fetching the data</td>
                                    </tr>
                                }
                            </tbody>

                        </table>
                        : <h1 className='text-center'>No accounts registered so far!</h1>}
                </div>
            </div>
        </div>
    )
}
export default TableManageAcc
