import Link from 'next/link'
import React, { useState } from 'react'
import { FaCheck, FaFileDownload, FaHome, FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa'

const ReportFile = () => {
    const [DeleteModal,setDeleteModal] = useState<Boolean>(false)
    const [AddUserModal,setAddUserModal] = useState<Boolean>(false)
    const [EditModal,setEditModal] = useState<Boolean>(false)
    const [searchtext,setSearchText] = useState<string>('');
  const STATUS ='Active';
  // Get the current year
  const currentYear = new Date().getFullYear();
  return (
    <div className="px-2 bg-[#F7F7F7] ">
        <div className="content-link py-2 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard'>Report Overview / </Link>
        </div>
        <div className="bg-white border-2 h-[85vh] px-5 rounded-lg border-[#0000002]">
            <div className='py-4'>
                <h5 className="font-bold">Download File</h5>
            </div>
            <div className="bg-inputG flex h-[25vh] flex-col w-full justify-center gap-4 place-items-center border-dashed border-2 rounded-lg border-[#0000004]">
                <p className='font-bold'>View and Download the report for the system</p>
                <button className="btn btn-primary gap-4 bg-backG text-white font-bold text-[12px] px-6 py-4 flex justify-center place-items-center"><FaFileDownload/>Download all Reports</button>
            </div>
            <div className='py-4'>
                <h5 className="font-bold">Your Recent File</h5>
            </div>
            <div className="bg-inputG flex flex-col justify-center place-items-center border-dashed border-[#0000002]">
                <table className="table-auto w-full">
                    <thead className="bg-inputG">
                        <tr className=" text-[#000000c8] font-bold text-sm">
                            <th className="py-5">No</th>
                            <th className="py-5">Report Name</th>
                            <th className="py-5">File Size</th>
                            <th className="py-5">Issue On:</th>
                        </tr>
                    </thead>
                        <tbody className="bg-white ">
                            <tr className=' py-5 border-y-2 border-opacity-30 '>
                                <td className='py-5 text-center'>1</td>
                                <td className='py-5 text-center'>Minisante Audit Status.pdf</td>
                                <td className='py-5 text-center'>1.23MB</td>
                                <td className='py-5 text-center'>12/02/{currentYear}</td>
                            </tr>
                            <tr className=' py-5 border-y-2 border-opacity-30 '>
                                <td className='py-5 text-center'>1</td>
                                <td className='py-5 text-center'>Minisante Audit Status.pdf</td>
                                <td className='py-5 text-center'>1.23MB</td>
                                <td className='py-5 text-center'>12/02/{currentYear}</td>
                            </tr>
                            <tr className=' py-5 border-y-2 border-opacity-30 '>
                                <td className='py-5 text-center'>1</td>
                                <td className='py-5 text-center'>Minisante Audit Status.pdf</td>
                                <td className='py-5 text-center'>1.23MB</td>
                                <td className='py-5 text-center'>12/02/{currentYear}</td>
                            </tr>
                        </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default ReportFile;
