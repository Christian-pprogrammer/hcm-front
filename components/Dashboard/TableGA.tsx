import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const TableGA = () => {
    const STATUS = 'Active'
    return (
        <table className=' table-auto w-full  '>
        <thead className=''>
            <tr>
            <th className='py-5 text-[#000000c8] text-sm '>Accounts</th>
            <th className='py-5 text-[#000000c8] text-sm '>Status</th>
            <th className='py-5 text-[#000000c8] text-sm '>Issued On</th>
            <th className='py-5 text-[#000000c8] text-sm '>License Date</th>
            </tr>
        </thead>
        <tbody className=''>
            <tr className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap lg:px-5 '>
                    <div className='flex px-2 gap-6'>
                    <Image className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="/favicon_io/logo.png" alt="" width="300" height="300"/>
                        <div>
                            <h1 className='font-bold '>CHUK</h1>
                            <span className='text-[#00000073]'>Kigali</span>
                        </div>
                    </div>
                </td>
                <td className='px-10  whitespace-nowrap flex py-2  place-items-center align-middle justify-center'>
                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>12/12/2021</span>
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>12/12/2021</span>
                </td>
            </tr>
            <tr className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap lg:px-5 '>
                    <div className='flex px-2 gap-6'>
                        <Image className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="/favicon_io/logo.png" alt="" width="300" height="300"/>
                        <div>
                            <h1 className='font-bold '>King Faisal</h1>
                            <span className='text-[#00000073]'>Kigali</span>
                        </div>
                    </div>
                </td>
                <td className='px-10  whitespace-nowrap flex py-2  place-items-center align-middle justify-center'>
                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>12/12/2021</span>
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>12/12/2021</span>
                </td>
            </tr>
            <tr className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap lg:px-5 '>
                    <div className='flex px-2 gap-6'>
                        <Image className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="/favicon_io/logo.png" alt="" width="300" height="300"/>
                        <div>
                            <h1 className='font-bold '>CHUB</h1>
                            <span className='text-[#00000073]'>Huye</span>
                        </div>
                    </div>
                </td>
                <td className='px-10  whitespace-nowrap flex py-2  place-items-center align-middle justify-center'>
                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>12/12/2021</span>
                </td>
                <td className='px-10 whitespace-nowrap text-center'>
                    <span className='text-[#00000043]'>12/12/2021</span>
                </td>
            </tr>
            
        </tbody>
    </table>
    )
}

export default TableGA