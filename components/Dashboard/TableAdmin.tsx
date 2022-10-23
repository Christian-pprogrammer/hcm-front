import React from 'react'
import { FaCheck } from 'react-icons/fa'

const TableAdmin = () => {
    const STATUS = 'Active'
    return (
        <table className='w-full table-auto overflow-scroll'>
        <thead className=''>
            <tr>
            <th className='py-3 text-[#000000c8] text-sm'>Accounts</th>
            <th className='py-3 text-[#000000c8] text-sm'>Status</th>
            <th className='py-3 text-[#000000c8] text-sm'>Hospitals Registered</th>
            <th className='py-3 text-[#000000c8] text-sm'>License Date</th>
            </tr>
        </thead>
        <tbody className=''>
            <tr className='bg-inputG  hover:cursor-pointer hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap lg:px-5 '>
                    <div className='flex px-2 gap-6'>
                        <img className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
                        <div>
                            <h1 className='font-bold '>MINISANTE</h1>
                            <span className='text-[#00000073]'>Rwanda</span>
                        </div>
                    </div>
                </td>
                <td className='px-10 whitespace-nowrap  py-2  place-items-center align-middle justify-center'>
                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                </td>
                <td className='flex  whitespace-nowrap py-4 justify-center px-10 place-items-center '>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-backG border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-pink-500 border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-indigo-500 border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-green-500 border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-red-500 border-2 border-white'>+248</span>
                </td>
                <td className='px-10 whitespace-nowrap '>
                    <span className='text-[#00000043]'>12/12/2021</span>
                </td>

            </tr>
            <tr className='bg-inputG  hover:cursor-pointer hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap lg:px-5 '>
                    <div className='flex px-2 gap-6'>
                        <img className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
                        <div>
                            <h1 className='font-bold '>Ministry of Health Uganda</h1>
                            <span className='text-[#00000073]'>Uganda</span>
                        </div>
                    </div>
                </td>
                <td className='px-10 whitespace-nowrap  py-2  place-items-center align-middle justify-center'>
                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                </td>
                <td className='flex  whitespace-nowrap py-4 justify-center px-10 place-items-center '>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-backG border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-pink-500 border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-indigo-500 border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-green-500 border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-red-500 border-2 border-white'>+248</span>
                </td>
                <td className='px-10 whitespace-nowrap '>
                    <span className='text-[#00000043]'>12/12/2021</span>
                </td>

            </tr>
            <tr className='bg-inputG  hover:cursor-pointer hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap lg:px-5 '>
                    <div className='flex px-2 gap-6'>
                        <img className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
                        <div>
                            <h1 className='font-bold '>Private Accounts</h1>
                            <span className='text-[#00000073]'>Rwanda</span>
                        </div>
                    </div>
                </td>
                <td className='px-10 whitespace-nowrap  py-2  place-items-center align-middle justify-center'>
                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                </td>
                <td className='flex  whitespace-nowrap py-4 justify-center px-10 place-items-center '>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-backG border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-pink-500 border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-indigo-500 border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-green-500 border-2 border-white'>KG</span>
                    <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-red-500 border-2 border-white'>+248</span>
                </td>
                <td className='px-10 whitespace-nowrap '>
                    <span className='text-[#00000043]'>12/12/2021</span>
                </td>
            </tr>
        </tbody>
    </table>

    )
}

export default TableAdmin
