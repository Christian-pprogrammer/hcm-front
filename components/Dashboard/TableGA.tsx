import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import hospitalService from '../../services/hospital/hospital.service'

const TableGA = () => {
    const STATUS = 'Active'
    const [manageHospitalData, setmanageHospitalData] = useState<any>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await hospitalService.getAllHospitals();
                setmanageHospitalData(data.data);
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
            }
        }
        fetchData()
    }, [])

    return (
        <table className=' table-auto w-full'>
            <thead className=''>
                <tr>
                    <th className='py-5 text-[#000000c8] text-sm '>Accounts</th>
                    <th className='py-5 text-[#000000c8] text-sm '>Email</th>
                    <th className='py-5 text-[#000000c8] text-sm '>Status</th>
                    <th className='py-5 text-[#000000c8] text-sm '>Issued On</th>
                </tr>
            </thead>
            <tbody>
                {manageHospitalData.map((hospital: any) => (
                    <tr key={hospital.hospitalId} className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                        <td className='py-2  whitespace-nowrap lg:px-5 '>
                            <div className='flex px-2 gap-6'>
                                <div>
                                    <h1 className='font-bold'>{hospital.hospitalName}</h1>
                                    <span className='text-[#00000073]'>{hospital.location}</span>
                                </div>
                            </div>
                        </td>
                        <td className='px-10 whitespace-nowrap text-center'>
                            <span className='text-[#00000043]'>{hospital.email}</span>
                        </td>
                        <td className='px-10  whitespace-nowrap flex py-2 place-items-center align-middle justify-center'>
                            {hospital.status == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] place-items-center font-bold'>Inactive</span>}
                        </td>
                        <td className='px-10 whitespace-nowrap text-center'>
                            <span className='text-[#00000043]'>{hospital.createdAt}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableGA