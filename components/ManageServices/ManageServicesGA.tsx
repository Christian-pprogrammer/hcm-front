import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { FaCheck, FaGlobe, FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import FetchDataLoader from '../loaders/FetchDataLoader';
import servicesService from '../../services/services/services.service';
import NewServices from './Modals/NewServices';
import { IService } from '../../utils/Prices';
import ManageServiceFetch from './ManageServiceFetch';

const ManageServicesGA = () => {
    const [searchtext, setSearchText] = useState<string>('');
    const [NewServiceModal, setNewServiceModal] = useState<Boolean>(false)
    const [MapHospitalModal, setMapHospitalModal] = useState<Boolean>(false)
    let [manageServicesData, setManageServicesData] = useState<IService[]>([]);
    const [showAction, setShowActions] = useState<boolean>(false)
    const authUser = useSelector((state: any) => state.authUser);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await servicesService.getAllServices();
                setManageServicesData(data.data);
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Failure, try again!" : error.error;
                reportError(ERROR_MESSAGE);
            }
        }
        fetchData()
    }, []);
    return (
        <div className="px-2 bg-[#F7F7F7] ">
            <div className="content-link py-2 text-backG text-[12px] flex gap-4">
                <FaGlobe /><Link href='/HCM/Dashboard'>Manage Services / </Link>
            </div>
            <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
                <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                    <div className='flex gap-10'>
                        <h1 className="pt-3 font-bold text-[1.1em]">Services Statistics</h1>
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
                            <button onClick={() => setNewServiceModal(true)} className='ripple py-4 text-[14px] bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                                <FaPlus />
                                <span>New Service</span>
                            </button>
                            <NewServices showModal={NewServiceModal} onClose={() => setNewServiceModal(false)} />
                        </div>
                    </div>
                </div>
                <div className='w-full overflow-x-auto'>
                    <table className=' table-auto w-full  '>
                        <thead className="text-xs text-gray-700 bg-gray-100 uppercase">
                            <tr className='font-semibold text-left'>
                                <th scope="col" className="py-4 px-10">
                                    <div className="flex items-center">
                                        <input onChange={() => setShowActions((prev) => !prev)} id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-gray-50 bg-blue-600 rounded-full" />
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Hospital Services
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Mapped Status
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Issued/Created On
                                </th>
                                {showAction &&
                                    <th scope="col" className="py-3">
                                        Action
                                    </th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {manageServicesData ? manageServicesData.map((service: IService) => (
                                <ManageServiceFetch service={service} key={service.service_id} showModal={showAction} />
                            )) :
                                <tr>
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
export default ManageServicesGA
