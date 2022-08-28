import React from 'react'
import { FaCheck } from 'react-icons/fa'

const HospitalAdminTable = () => {
    const STATUS = 'Active'
    return (
        <table className=' table-auto w-full  '>
        <thead className=''>
            <tr>
            <th className='py-5 text-[#000000c8] text-sm '>Account Username</th>
            <th className='py-5 text-[#000000c8] text-sm '>Status</th>
            <th className='py-5 text-[#000000c8] text-sm '>Account Category</th>
            <th className='py-5 text-[#000000c8] text-sm '>Department</th>
            <th className='py-5 text-[#000000c8] text-sm '>Issued on</th>
            </tr>
        </thead>
        <tbody className=''>
            <tr className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap  lg:px-5 '>
                    <span className='text-[#00000043]'>Dr.Ngabonziza Abel</span>
                </td>
                <td className='px-10  whitespace-nowrap flex py-2  place-items-center align-middle justify-center'>
                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>Doctor Account</span>
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>Pediatry</span>
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>12. 02 .2022</span>
                </td>
            </tr>
           
        </tbody>
    </table>
    )
}

export default HospitalAdminTable