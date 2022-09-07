import React,{ useState } from 'react'

const TransactionModeInfo = () =>{
    const [showMailInput,setshowMailInput] = useState<Boolean>(false)
    const [showPhoneInput,setshowPhoneInput] = useState<Boolean>(false)
    return (
        <>
        <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Doctor Name
                </label>
                <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your hospital name" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
        </div>
        <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Notication Mode
                </label>
                <div className='flex justify-around py-2 '>
                    <div className='flex gap-2 justify-center place-items-center'>
                        <input  type="checkbox"  onClick={()=>setshowPhoneInput((prev)=>!prev)} className="shadow  bg-inputG border rounded w-4 h-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />       
                        <span className='text-[12px] font-bold'>Phone Number</span>
                    </div>
                    <div className='flex gap-2 justify-center place-items-center'>
                        <input type="checkbox"   onClick={()=>setshowMailInput((prev)=>!prev)} className="shadow  bg-inputG border rounded w-4 h-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />       
                        <span className='text-[12px] font-bold'>Email</span>
                    </div>
                </div>
                <div className={`flex gap-2`}>
                    <input className={`shadow ${showPhoneInput ? 'flex' : 'hidden'} appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type="number" placeholder="Enter your phone number" />
                    <input className={`shadow ${showMailInput ? 'flex' : 'hidden'} appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} type="email" placeholder="Enter your Email" />
                </div>
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
        </div>
        <div className='flex gap-1'>
            <input className="shadow  bg-inputG border rounded w-4 h-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={'checkbox'}/>       
            <p className='text-[#00000065] text-center text-[10px]'>By checking this box I satisfy that all,the information provided is true and accurate and up to date</p>
        </div>
        </>
    )
}
export default TransactionModeInfo