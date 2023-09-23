import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import { FaCheck } from 'react-icons/fa'
import groupService from '../../services/group/group.service';
import FetchDataLoader from '../loaders/FetchDataLoader';

const TableAdmin = () => {
    let [manageAccData,setmanageAccData] = useState<any>([]);
    async function fetchData () {
        const data = await groupService.getAllGroups();
        setmanageAccData(data.data);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <>
        {manageAccData ?
         <table className='w-full table-auto'>
            <thead>
                <tr>
                <th className='py-5 text-[#000000c8] text-sm'>Accounts</th>
                <th className='py-5 text-[#000000c8] text-sm'>Status</th>
                <th className='py-5 text-[#000000c8] text-sm'>Hospitals Registered</th>
                <th className='py-5 text-[#000000c8] text-sm'>License Date</th>
                </tr>
            </thead>

            <tbody>
                {manageAccData ? manageAccData.map((acc:any)=>(
                       <tr key={acc.group_id} className='bg-inputG relative overflow-auto z-0 hover:cursor-pointer hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white h-4'>
                       <td className='py-2  whitespace-nowrap lg:px-5 flex px-2 gap-6 justify-center place-items-center text-center'>
                           <h1 className='font-bold '>{acc.groupName}</h1>
                       </td>
                       <td className='px-10 whitespace-nowrap  py-2  place-items-center align-middle justify-center'>
                           {acc.status == "Active" ? <div className='text-backG bg-linear w-14 h-14 border-2 border-backG flex justify-center place-items-center text-xl rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
                       </td>
                       <td className='flex  whitespace-nowrap py-4 justify-center px-10 place-items-center '>
                           <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-backG border-2 border-white'>KG</span>
                           <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-pink-500 border-2 border-white'>KG</span>
                           <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-indigo-500 border-2 border-white'>KG</span>
                           <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-green-500 border-2 border-white'>KG</span>
                           <span className='text-white rounded-full text-[14px] font-bold w-12 h-12 flex place-items-center justify-center bg-red-500 border-2 border-white'>+248</span>
                       </td>
                       <td className='px-10 whitespace-nowrap '>
                           <span className='text-[#00000043]'>{acc.updatedAt}</span>
                       </td>
                   </tr>
                )):
                <tr className="flex justify-center text-center gap-6 flex-col place-items-center bg-white w-full">
                    <FetchDataLoader/>
                    <p>Fetching the data...</p>
                </tr>
                }
            </tbody>

        </table>
        : <h1 className='text-center'>No accounts registered so far!</h1>}</>

    )
}

export default TableAdmin
