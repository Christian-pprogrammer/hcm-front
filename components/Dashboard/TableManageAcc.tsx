import React,{ useState } from 'react'
import Link from 'next/link'
import DeleteAcc from './Modals/DeleteAcc'
import { FaCheck,FaEllipsisH,FaHome, FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa'
import AddAccount from './Modals/AddAccount'
import EditAccount from './Modals/EditAccount'
import { GetServerSideProps } from 'next'

const TableManageAcc = (data:any) => {
    const [showModal,setModal] = useState<Boolean>(false)
    const [addAccount,setAddAccount] = useState<Boolean>(false)
    const [EditModal,setEditModal] = useState<Boolean>(false);
    const [showListActions,setshowListActions] = useState<Boolean>(false);
    const [searchtext,setSearchText] = useState<string>('');
    const toggleModal = () =>{
        setModal(!showModal)
    }
    const toggleAddAccount = () =>{
        setAddAccount(!addAccount)
    }
    const toggleEditAccount = () =>{
        setEditModal(!EditModal)
    }
    const STATUS = 'Active';
    console.log("The manage group table fetch data:",data)
  return (
    <div className="px-2 bg-[#F7F7F7] ">
        <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard'>Manage Accounts / </Link> 
        </div>
        <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
            <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                <div className='flex gap-10'>
                    <h1 className="pt-3 font-bold text-[1.1em]">Registered Accounts</h1>
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
                        <button onClick={toggleAddAccount} className='py-4 bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                            <FaPlus/>
                            <span>Add Account</span>
                        </button>
                        <AddAccount addAccount={addAccount} onClose={()=>setAddAccount(false)} />
                    </div>
                </div>
            </div>
        <div className=' w-full overflow-x-auto'>
         <table className='w-full table-auto '>
            <thead>
                <tr>
                <th className='py-5 text-[#000000c8] text-sm'>Accounts</th>
                <th className='py-5 text-[#000000c8] text-sm'>Status</th>
                <th className='py-5 text-[#000000c8] text-sm'>Hospitals Registered</th>
                <th className='py-5 text-[#000000c8] text-sm'>License Date</th>
                <th className='py-5 text-[#000000c8] text-sm'>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-inputG relative  hover:cursor-pointer hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'>
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
                    <td className='px-10 whitespace-nowrap justify-center flex gap-10 text-backG'>
                        <button onClick={() => setshowListActions((prev)=>!prev)} className='hover:bg-slate-100 group-hover:bg-inputG p-3 bg-white rounded-lg'> <FaEllipsisH /></button> 
                    </td>
                    {showListActions && 
                    <div className="group bg-white flex-col flex text-[12px] absolute top-2 right-[9em]">
                        <button className="btn  py-2 px-4 bg-zinc-100 border-2 border-white" onClick={toggleEditAccount}>Edit Account</button>
                        <button className="btn  py-2 px-4 hover:bg-zinc-100 hover:border-2 border-2 border-white hover:border-white duration-300" onClick={toggleModal}>Delete Account</button>
                    </div>
                    }
                    <DeleteAcc showModal={showModal} onClose={toggleModal}/>
                    <EditAccount EditModal={EditModal} onClose={toggleEditAccount}/>
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
                    <td className='px-10 whitespace-nowrap flex gap-10 text-backG'>
                        <button onClick={toggleEditAccount}><FaPencilAlt /><EditAccount EditModal={EditModal} onClose={toggleEditAccount}/></button>
                        <button onClick={toggleModal}><FaTrash /><DeleteAcc showModal={showModal} onClose={toggleModal}/></button>
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
                    <td className='px-10 whitespace-nowrap flex gap-10 text-backG'>
                        <button onClick={toggleEditAccount}><FaPencilAlt /><EditAccount EditModal={EditModal} onClose={toggleEditAccount}/></button>
                        <button onClick={toggleModal}><FaTrash /><DeleteAcc showModal={showModal} onClose={toggleModal}/></button>
                    </td>
                </tr>
                
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
    try{
        const data = await groupAdminService.getAllGroupsAdmins();
        return {
            props : {data}
        }
    }catch(error:any){
        res.statusCode = 404;
        const Error_Message = error.message;
        reportError(Error_Message);
        notifyError(Error_Message);
        return {
            props : {}
        }
    }
  };
export default TableManageAcc