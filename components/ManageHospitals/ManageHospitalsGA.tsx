import Link from 'next/link'
import React, { useState } from 'react'
import { FaBan, FaCheck, FaHome, FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa'
import AddHospital from './Modals/AddHospital'
import DeleteHospital from './Modals/DeleteHospital'
import EditHospital from './Modals/EditHospital'
import ManageAdminModal from './Modals/ManageAdminModal'

const ManageHospitalsGA = () => {
  const [DeleteModal,setDeleteModal] = useState<Boolean>(false)
    const [AddHospitalModal,setAddHospital] = useState<Boolean>(false)
    const [EditModal,setEditModal] = useState<Boolean>(false)
    const [showManageAdmin,setManageAdmin] = useState<Boolean>(false)
    const [searchtext,setSearchText] = useState<string>(''); 
  const STATUS ='Active'
  return (
    <div className="px-2 bg-[#F7F7F7] ">
        <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard'>Manage Hospitals / </Link> 
        </div>
        <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
            <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                <div className='flex gap-10'>
                    <h1 className="pt-3 font-bold text-[1.1em]">Hospital Statistics</h1>
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
                        <button onClick={()=>setAddHospital(true)} className='py-4 bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                            <FaPlus/>
                            <span className=''>New Hospital</span>
                        </button>
                            <AddHospital showModal={AddHospitalModal} onClose={()=>setAddHospital(false)} />
                    </div>
                </div>
            </div>
        <div className=' w-full overflow-x-auto'>
        <table className=' table-auto w-full  '>
        <thead className=''>
            <tr>
            <th className='py-5 text-[#000000c8] text-sm '>Accounts</th>
            <th className='py-5 text-[#000000c8] text-sm '>Status</th>
            <th className='py-5 text-[#000000c8] text-sm '>Issued On</th>
            <th className='py-5 text-[#000000c8] text-sm '>License Date</th>
            <th className='py-5 text-[#000000c8] text-sm '>Actions</th>
            </tr>
        </thead>
        <tbody className=''>
            <tr className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap lg:px-5 '>
                    <div className='flex px-2 gap-6'>
                        <img className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
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
                <td className='px-10 whitespace-nowrap flex gap-10 text-backG'>
                        <button onClick={()=>setEditModal(true)}><FaPencilAlt /></button><EditHospital EditModal={EditModal} onClose={()=>setEditModal(false)}/>
                        <button onClick={()=>setDeleteModal(true)}> <FaTrash/></button> <DeleteHospital showModal={DeleteModal} onClose={()=>setDeleteModal(false)}/>
                        <button onClick={()=>setManageAdmin(true)}> <FaBan/></button> <ManageAdminModal showModal={showManageAdmin} onClose={()=>setManageAdmin(false)}/>
                </td>
            </tr>
            <tr className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap lg:px-5 '>
                    <div className='flex px-2 gap-6'>
                        <img className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
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
                <td className='px-10 whitespace-nowrap flex gap-10 text-backG'>
                        <button onClick={()=>setEditModal(true)}><FaPencilAlt /></button><EditHospital EditModal={EditModal} onClose={()=>setEditModal(false)}/>
                        <button onClick={()=>setDeleteModal(true)}> <FaTrash/></button> <DeleteHospital showModal={DeleteModal} onClose={()=>setDeleteModal(false)}/>
                        <button onClick={()=>setManageAdmin(true)}> <FaBan/></button> <ManageAdminModal showModal={showManageAdmin} onClose={()=>setManageAdmin(false)}/>
                </td>
            </tr>
            <tr className='bg-inputG  hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
                <td className='py-2  whitespace-nowrap lg:px-5 '>
                    <div className='flex px-2 gap-6'>
                        <img className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
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
                <td className='px-10 whitespace-nowrap flex gap-10 text-backG'>
                        <button onClick={()=>setEditModal(true)}><FaPencilAlt /></button><EditHospital EditModal={EditModal} onClose={()=>setEditModal(false)}/>
                        <button onClick={()=>setDeleteModal(true)}> <FaTrash/></button> <DeleteHospital showModal={DeleteModal} onClose={()=>setDeleteModal(false)}/>
                        <button onClick={()=>setManageAdmin(true)}> <FaBan/></button> <ManageAdminModal showModal={showManageAdmin} onClose={()=>setManageAdmin(false)}/>
                </td>
            </tr>
            
        </tbody>
    </table>
        </div>
        </div>
    </div>
  )
}

export default ManageHospitalsGA