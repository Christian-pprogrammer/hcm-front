import React from 'react'

const TransactionModeInfo = () =>{
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
                <div className='flex justify-between '>
                    <div className='flex gap-4'>
                        <input className="shadow appearance-none bg-inputG border rounded w-2 h-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="checkbox"/>       
                        <span>Phone Number</span>
                    </div>
                    <div className='flex gap-4'>
                        <input className="shadow appearance-none bg-inputG border rounded w-2 h-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="checkbox"/>       
                        <span>Email</span>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Enter your phone number" />
                    <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your Email" />
                </div>
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
        </div>
        <div className='flex gap-2'>
            <input className="shadow appearance-none bg-inputG border rounded w-2 h-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="checkbox"/>       
            <p className='text-[#0000002]'>By checking this box I satisfy that all,the information provided is true and accurate and up to date</p>
        </div>
        </>
    )
}
export default TransactionModeInfo