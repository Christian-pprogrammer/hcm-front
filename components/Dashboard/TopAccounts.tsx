import Image from 'next/image'
import React from 'react'

const TopAccounts = () => {
  return (
    <div className=" bg-backG min-w-[20vw] h-[85vh] hidden lg:block relative  rounded-lg">
                    <div className='text-center gap-2 py-10 flex justify-center text-white place-items-center flex-col'>
                        <h1 className='font-bold text-white '>Account Management - Top Active</h1>
                        <p>The Statistics of the system are as follows including different logged in account feel free to check their recent activities </p>
                    </div>
                    <div className=' px-2'>
                    <div className='text-center  hover:bg-inputG group duration-300  hover:cursor-pointer w-full bg-white  rounded-lg flex py-10 md:py-8 flex-row justify-center gap-6 place-items-center'>
                        <div className='flex flex-col justify-center place-items-center'>
                            <h1 className='font-bold'>RWANDA Health Ministry (Minisante)</h1>
                            <p className='text-slate-400'>Admin : Dr Daniel Ngamije</p>
                        </div>
                    </div> 
                    </div>
                    <div className='absolute bottom-0 gap-4 flex flex-col h-1/2 w-full px-2 bg-inputG'>
                    <div className='text-center  hover:bg-backG group duration-300 hover:text-white group hover:cursor-pointer w-full bg-white  rounded-lg flex py-10 md:py-8 flex-row justify-center gap-6 place-items-center'>
                        <div className='flex flex-col justify-center place-items-center'>
                            <h1 className='font-bold'>UGANDAN Health Ministry (Minisante)</h1>
                            <p className='text-slate-400 group-hover:text-white'>Admin : Dr Nkweso Emmanuel</p>
                        </div>
                    </div> 
                    <div className='text-center  hover:bg-backG group duration-300 hover:text-white group hover:cursor-pointer w-full bg-white  rounded-lg flex py-10 md:py-8 flex-row justify-center gap-6 place-items-center'>
                        <div className='flex flex-col justify-center place-items-center'>
                        <h1 className='font-bold'>Private Hospitals (Minisante)</h1>
                            <p className='text-slate-400 group-hover:text-white'>Admin : Dr Nkweso Emmanuel</p>
                        </div>
                    </div> 
                    </div>
                </div>
  )
}

export default TopAccounts