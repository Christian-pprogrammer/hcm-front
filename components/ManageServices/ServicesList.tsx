import { GetServerSideProps } from 'next';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaCheck, FaGlobe } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import FetchDataLoader from '../../pages/loaders/FetchDataLoader';
import servicesService from '../../services/services/services.service';
import { notifyError, notifySuccess } from '../alert';
import RemoveService from './Modals/RemoveService';

const ServicesList = () => {
    const [searchtext, setSearchText] = useState<string>('');
    const [RemoveServiceModal, setRemoveServiceModal] = useState<Boolean>(false)
    const authUser = useSelector((state: any) => state.authUser);
    const [showAction, setShowActions] = useState<Boolean>(false);
    const [manageHospitalServices, setmanageHospitalServices] = useState<any>(null);
    async function fetchData() {
        try {
            console.log("Auth User Hospital Admin", authUser);
            // const groupId = authUser?.user?.group?.group_id;
            const data = await servicesService.getHospitalServices("asdf");
            setmanageHospitalServices(data.data);
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
        }
    }
    useEffect(() => {
        fetchData();
    }, [manageHospitalServices]);

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
                            <button className='py-4 bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                                <span >Remove All</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' w-full overflow-x-auto'>
                    <table className=' table-auto w-full  '>
                        <thead>
                            <tr>
                                <th></th>
                                <th className='py-5 text-[#000000c8] text-sm '>Hospital Services</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Mapped Status</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Issued/Created On</th>
                                {showAction &&
                                    <th className='py-5 text-[#000000c8] text-sm '>Actions</th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {manageHospitalServices ? manageHospitalServices.map((service:any) => (
                                <tr key={service.service_id} className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                                    <td className='py-2 text-center flex place-items-center  whitespace-nowrap  lg:px-5 '>
                                        <input type="checkbox" className="h-4 w-4 bg-inputG" onClick={() => setShowActions((prev) => !prev)} />
                                    </td>
                                    <td className='py-2  whitespace-nowrap text-center lg:px-5 '>
                                        {service}
                                    </td>
                                    <td className='px-10  whitespace-nowrap flex py-2  place-items-center align-middle justify-center'>
                                        {service.status == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                                    </td>
                                    <td className='px-10 whitespace-nowrap text-[#00000043] text-center'>
                                        {service.createdAt}
                                    </td>
                                    {showAction &&
                                    <td>
                                        <button onClick={() => setRemoveServiceModal(true)} className='text-backG bg-linear w-32 h-10 border-2 border-backG flex justify-center place-items-center text-base rounded-lg font-bold '> Remove </button>
                                        <RemoveService id={service.service_id} showModal={RemoveServiceModal} onClose={() => setRemoveServiceModal(false)} />
                                    </td>
                                    }
                                </tr>
                            )) : <tr className="flex justify-center text-center gap-6 flex-col place-items-center bg-white w-full">
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
export const getServerSideProps: GetServerSideProps = async ({
    res
}) => {
    try {
        const data = await servicesService.getHospitalServices("askdfsadk21i3usdafaskldfjasdlf");
        if (res.statusCode == 200) {
            notifySuccess("Successfully Pulled the Services");
        }
        return {
            props: { data }
        }
    } catch (error: any) {
        res.statusCode = 404;
        const Error_Message = error.message;
        reportError(Error_Message);
        notifyError(Error_Message);
        return {
            props: {}
        }
    }
};
export default ServicesList