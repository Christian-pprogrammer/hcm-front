import Link from 'next/link'
import React, { useState } from 'react'
import { FaCheck, FaGlobe, FaPlus } from 'react-icons/fa'
import MapHospital from './Modals/MapHospital';
import RemoveService from './Modals/RemoveService';

const ServicesList = () => {
    const [searchtext,setSearchText] = useState<string>(''); 
    const [RemoveServiceModal,setRemoveServiceModal] = useState<Boolean>(false)

    const STATUS ='Active'
  return (
    <div className="px-2 bg-[#F7F7F7] ">
        <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
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
                        <input type="text" onChange={(e)=>setSearchText(e.target.value)} value={searchtext} className="form-control rounded-lg outline-none border-none text-backG py-4 px-20 bg-inputG" placeholder="Search Account Name"/>
                    </div>
                    <div>
                        <button className='py-4 bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                            <FaPlus/>
                            <span className=''>Remove All</span>
                        </button>
                    </div>
                </div>
            </div>
        <div className=' w-full overflow-x-auto'>
        <table className=' table-auto w-full  '>
        <thead className=''>
            <tr>
            <th className='py-5 text-[#000000c8] text-sm '>Hospital Services</th>
            <th className='py-5 text-[#000000c8] text-sm '>Mapped Status</th>
            <th className='py-5 text-[#000000c8] text-sm '>Issued/Created On</th>
            <th className='py-5 text-[#000000c8] text-sm '>Active Hospitals</th>
            <th className='py-5 text-[#000000c8] text-sm '>Actions</th>
            </tr>
        </thead>
        <tbody className=''>
            <tr className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap text-center lg:px-5 '>
                    Pediatry Services
                </td>
                <td className='px-10  whitespace-nowrap flex py-2  place-items-center align-middle justify-center'>
                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                </td>
                <td className='px-10 whitespace-nowrap text-[#00000043] text-center'>
                    01.02.2020
                </td>  
                <td className='px-10 whitespace-nowrap text-[#00000043] text-center'>
                    32
                </td>  
                <td>
                    <button onClick={() => setRemoveServiceModal(true)} className='text-backG bg-linear w-32 h-10 border-2 border-backG flex justify-center place-items-center text-base rounded-lg font-bold '> Remove </button>
                    <RemoveService showModal={RemoveServiceModal} onClose={() => setRemoveServiceModal(false)} />
                </td>
            </tr>
            <tr className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap text-center lg:px-5 '>
                    Cardiology Services
                </td>
                <td className='px-10  whitespace-nowrap flex py-2  place-items-center align-middle justify-center'>
                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                </td>
                <td className='px-10 whitespace-nowrap text-[#00000043] text-center'>
                    01.02.2020
                </td>  
                <td className='px-10 whitespace-nowrap text-[#00000043] text-center'>
                    32
                </td>  
                <td>
                    <button onClick={() => setRemoveServiceModal(true)} className='text-backG bg-linear w-32 h-10 border-2 border-backG flex justify-center place-items-center text-base rounded-lg font-bold '> Remove </button>
                    <RemoveService showModal={RemoveServiceModal} onClose={() => setRemoveServiceModal(false)} />
                </td>
            </tr>
            
            <tr className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap text-center lg:px-5 '>
                    Dermatology Services
                </td>
                <td className='px-10  whitespace-nowrap flex py-2  place-items-center align-middle justify-center'>
                    {STATUS == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                </td>
                <td className='px-10 whitespace-nowrap text-[#00000043] text-center'>
                    01.02.2020
                </td>  
                <td className='px-10 whitespace-nowrap text-[#00000043] text-center'>
                    32
                </td>  
                <td>
                    <button onClick={() => setRemoveServiceModal(true)} className='text-backG bg-linear w-32 h-10 border-2 border-backG flex justify-center place-items-center text-base rounded-lg font-bold '> Remove </button>
                    <RemoveService showModal={RemoveServiceModal} onClose={() => setRemoveServiceModal(false)} />
                </td>
            </tr>
        </tbody>
    </table>
        </div>
        </div>
    </div>
  )
}

export default ServicesList