import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { FaCheck, FaGlobe, FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import FetchDataLoader from '../loaders/FetchDataLoader';
import servicesService from '../../services/services/services.service';
import { notifyError } from '../alert';
import MapHospital from './Modals/MapHospital';
import NewServices from './Modals/NewServices';

const ManageServicesGA = () => {
    const [searchtext, setSearchText] = useState<string>('');
    const [NewServiceModal, setNewServiceModal] = useState<Boolean>(false)
    const [MapHospitalModal, setMapHospitalModal] = useState<Boolean>(false)
    const [manageServicesData, setManageServicesData] = useState<any>(null);
    const [showAction, setShowActions] = useState<Boolean>(false)
    const authUser = useSelector((state: any) => state.authUser)
    useEffect(() => {
    async function fetchData() {
        try {
            const groupId = authUser?.user?.group?.group_id;
            const data = await servicesService.getAllServices();
            setManageServicesData(data.data);
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
        }
    }

    }, [authUser?.user?.group?.group_id, manageServicesData]);
    const STATUS = 'Active'
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
                            <button onClick={() => setNewServiceModal(true)} className='py-4 bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                                <FaPlus />
                                <span>New Service</span>
                            </button>
                            <NewServices showModal={NewServiceModal} onClose={() => setNewServiceModal(false)} />
                        </div>
                    </div>
                </div>
                <div className=' w-full overflow-x-auto'>
                    <table className=' table-auto w-full  '>
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input onChange={() => setShowActions((prev) => !prev)}  id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-gray-50 bg-blue-600 rounded-full" />
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
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
        }
                            </tr>
                        </thead>
                        <tbody>
                            {manageServicesData ? manageServicesData.map((service: any, index: number) => (
                                <tr key={index} className="bg-white hover:bg-inputG hover:cursor-pointer">
                                    <td className="p-4 w-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus: -blue-600 t-gray-800 focus:ring-2 0 y-600" />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <td scope="row" className="py-4 px-6 font-semibold text-center text-gray-900 whitespace-nowrap ">
                                        {service.service}
                                    </td>
                                    <td scope="row" className="py-4 px-6 text-center flex justify-center font-medium text-gray-900 whitespace-nowrap ">
                                        {(service.status == "Active") ? <div className='text-backG bg-linear w-10 h-10 border-2 border-backG flex justify-center place-items-center  rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] py-2 font-bold'>Inactive</span>}
                                    </td>
                                    <td className='px-6 text-center py-4'>
                                        {service.createdAt}
                                    </td>
                                    {showAction &&
                                        <td className='px-10 whitespace-nowrap text-[#00000043] flex py-2 items-center justify-center'>
                                            <button onClick={() => setMapHospitalModal(true)} className='text-backG bg-linear h-10 px-6 border-2 border-backG text-[14px] rounded-md font-bold '> Map </button>
                                        </td>
                                    }
                                    <MapHospital showModal={MapHospitalModal} onClose={() => setMapHospitalModal(false)} />
                                </tr>
                            )) :
                                <tr className="flex justify-center text-center gap-6 flex-col place-items-center bg-white w-full">
                                    <FetchDataLoader />
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
// export const getServerSideProps: GetServerSideProps = async ({
//     res
//   }) => {
//     try{
//         const data = await servicesService.getHospitalServices("askdfsadk21i3usdafaskldfjasdlf");
//         if(res.statusCode == 200){
//             notifySuccess("Successfully Pulled the Group Admin Services");
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
export default ManageServicesGA
