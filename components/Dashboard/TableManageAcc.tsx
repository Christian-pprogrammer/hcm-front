import React from 'react'
import Link from 'next/link'
import { FaCheck,FaEdit,FaHome, FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa'

const TableManageAcc = () => {
    const STATUS = 'Active'
  return (
    <div className="px-2 ">
        <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/Dash/Dashboard' > Dasboard/ </Link> 
            </div>
        <div className="bg-white border-2 h-[85vh] w-full rounded-lg border-[#0000002]">
            <div className="flex px-5 place-items-center justify-between gap-6 py-10">
                <div className='flex gap-10'>
                    <h1 className="pt-3 font-bold">Registered Accounts</h1>
                    <div className="px-2 ">
                        <select name="" id="" className='bg-white border-2 border-[#00000020]  rounded-2xl outline-none px-2 py-2'>
                            <option value="today">Today</option>
                            <option value="today">Yesterday</option>
                            <option value="today">Week</option>
                            <option value="today">Month</option>
                            <select value="today">Year
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                            </select>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    <div>
                        <input type="text" className="form-control rounded-lg outline-none border-none text-backG py-4 px-20 bg-inputG" placeholder="Search Account Name"/>
                    </div>
                    <div>
                        <button className='py-4 bg-backG text-white flex place-items-center justify-center px-10 rounded-lg  gap-6'>
                            <FaPlus/>
                            <span>Add Account</span>
                        </button>
                    </div>
                </div>
            </div>
         <table className='w-full table-auto '>
            <thead className=''>
                <th className='py-5 text-[#0000006c] text-sm'>Accounts</th>
                <th className='py-5 text-[#0000006c] text-sm'>Status</th>
                <th className='py-5 text-[#0000006c] text-sm'>Hospitals Registered</th>
                <th className='py-5 text-[#0000006c] text-sm'>License Date</th>
                <th className='py-5 text-[#0000006c] text-sm'>Actions</th>
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
                    <td className='px-10 whitespace-nowrap flex gap-10 text-backG'>
                        <FaPencilAlt/>
                        <FaTrash/>
                    </td>
                </tr>
                <tr className='bg-inputG  hover:cursor-pointer hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                    <td className='py-2  whitespace-nowrap lg:px-5 '>
                        <div className='flex px-2 gap-4 '>
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
                    <td className='px-10 whitespace-nowrap flex gap-10 text-backG'>
                        <FaPencilAlt/>
                        <FaTrash/>
                    </td>
                </tr>
                <tr className='bg-inputG  hover:cursor-pointer hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                    <td className='py-2  whitespace-nowrap lg:px-5'>
                        <div className='flex lg:px-2 gap-4 '>
                            <img className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
                            <div>
                                <h1 className='font-bold '>Ugandan Health Ministry</h1>
                                <span className='text-[#00000073]'>Rwanda</span>
                            </div>
                        </div>
                    </td>
                    <td className='px-10 whitespace-nowrap    py-2  place-items-center align-middle justify-center'>
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
                    <td className='px-10 whitespace-nowrap flex gap-10 text-backG'>
                        <FaPencilAlt/>
                        <FaTrash/>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>

    </div>
  )
}

export default TableManageAcc