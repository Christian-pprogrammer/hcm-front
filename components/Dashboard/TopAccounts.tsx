import React from 'react'

const TopAccounts = () => {
  return (
    <div className=" bg-backG min-w-[20vw] h-[85vh] hidden lg:block relative  rounded-lg">
                    <div className='text-center gap-2 py-10 flex justify-center text-white place-items-center flex-col'>
                        <h1 className='font-bold text-white '>Account Management - Top Active</h1>
                        <p>The Statistics of the system are as follows including different logged in account feel free to check their recent activities </p>
                    </div>
                    <div className=' px-2'>
                    <div className='text-center  hover:bg-backG group duration-300 hover:text-white hover:cursor-pointer w-full bg-white  rounded-lg flex py-10 md:py-8 flex-row justify-center gap-6 place-items-center'>
                        <div className=' flex justify-center place-items-center rounded-full bg-white'>
                            <img className='h-12 w-12  object-contain' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
                        </div>
                        <div className='flex flex-col justify-center place-items-center'>
                            <h1 className='font-bold'>RWANDA Health Ministry (Minisante)</h1>
                            <p className='text-slate-400'>Admin : Dr Daniel Ngamije</p>
                        </div>
                    </div> 
                    </div>
                    <div className='absolute bottom-0 gap-4 flex flex-col h-1/2 w-full px-2 bg-inputG'>
                    <div className='text-center  hover:bg-backG group duration-300 hover:text-white hover:cursor-pointer w-full bg-white  rounded-lg flex py-5 md:py-8 flex-row justify-center gap-6 place-items-center'>
                        <div className=' flex justify-center place-items-center rounded-full bg-white'>
                            <img className='h-12 w-12  object-contain' src="https://www.independent.co.ug/wp-content/uploads/2021/09/Coat-of-arms.jpg" alt="" />
                        </div>
                        <div className='flex flex-col justify-center place-items-center'>
                            <h1 className='font-bold'>UGANDAN Health Ministry </h1>
                            <p className='text-slate-400'>Admin : Dr Nkweso Emmanuel</p>
                        </div>
                    </div>
                    <div className='text-center hover:bg-backG group duration-300 hover:text-white hover:cursor-pointer w-full bg-white  rounded-lg flex py-5 md:py-8 flex-row justify-center gap-6 place-items-center'>
                        <div className=' flex justify-center place-items-center rounded-full bg-white'>
                            <img className='h-12 w-12  object-contain' src="https://www.independent.co.ug/wp-content/uploads/2021/09/Coat-of-arms.jpg" alt="" />
                        </div>
                        <div className='flex flex-col justify-center place-items-center'>
                            <h1 className='font-bold'>Private Administration (Rwanda) </h1>
                            <p className='text-slate-400 group-hover:text-[#ffffff45]'>Admin : Dr Nkweso Emmanuel</p>
                        </div>
                    </div> 
                    </div>
                </div>
  )
}

export default TopAccounts