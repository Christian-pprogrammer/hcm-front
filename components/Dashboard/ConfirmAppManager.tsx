import Link from 'next/link'
import React from 'react'

const ConfirmAppManager = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

    return (
        <div className=" bg-white min-w-[22vw] h-[40vh] hidden lg:block relative  rounded-lg overflow-y-auto">
            <div className='py-5 px-2 flex justify-between text-white place-items-center '>
                <h1 className='font-bold text-black '>Recent Reports</h1>
                <Link href='/'><span className='text-backG text-[10px]'>See all 145</span></Link>
            </div>
            <div className=' flex-col flex gap-4'>
                <div className='bg-inputG px-2'>
                    <span className='text-backG text-[10px]'>12/02/{currentYear}</span>
                    <div className='flex justify-between place-items-center py-1'>
                        <div className='text-sm'>
                            <h5 className='font-bold'>Patient Name</h5>
                            <p className='text-backG text-[12px]'>Department</p>
                        </div>
                        <div className='flex gap-2 py-4'>
                            <button className='text-backG px-1 py-2 text-[12px]'>
                                Ignore
                            </button>
                            <button className='text-white px-3 py-2 bg-backG rounded-full text-[12px]'>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-inputG px-2'>
                    <span className='text-backG text-[10px]'>12/02/{currentYear}</span>
                    <div className='flex justify-between place-items-center py-1'>
                        <div className='text-sm'>
                            <h5 className='font-bold'>Patient Name</h5>
                            <p className='text-backG text-[12px]'>Department</p>
                        </div>
                        <div className='flex gap-2 py-4'>
                            <button className='text-backG px-1 py-2 text-[12px]'>
                                Ignore
                            </button>
                            <button className='text-white px-3 py-2 bg-backG rounded-full text-[12px]'>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-inputG px-2'>
                    <span className='text-backG text-[10px]'>12/02/{currentYear}</span>
                    <div className='flex justify-between place-items-center py-1'>
                        <div className='text-sm'>
                            <h5 className='font-bold'>Patient Name</h5>
                            <p className='text-backG text-[12px]'>Department</p>
                        </div>
                        <div className='flex gap-2 py-4'>
                            <button className='text-backG px-1 py-2 text-[12px]'>
                                Ignore
                            </button>
                            <button className='text-white px-3 py-2 bg-backG rounded-full text-[12px]'>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-inputG px-2'>
                    <span className='text-backG text-[10px]'>12/02/{currentYear}</span>
                    <div className='flex justify-between place-items-center py-1'>
                        <div className='text-sm'>
                            <h5 className='font-bold'>Patient Name</h5>
                            <p className='text-backG text-[12px]'>Department</p>
                        </div>
                        <div className='flex gap-2 py-4'>
                            <button className='text-backG px-1 py-2 text-[12px]'>
                                Ignore
                            </button>
                            <button className='text-white px-3 py-2 bg-backG rounded-full text-[12px]'>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-inputG px-2'>
                    <span className='text-backG text-[10px]'>12/02/{currentYear}</span>
                    <div className='flex justify-between place-items-center py-1'>
                        <div className='text-sm'>
                            <h5 className='font-bold'>Patient Name</h5>
                            <p className='text-backG text-[12px]'>Department</p>
                        </div>
                        <div className='flex gap-2 py-4'>
                            <button className='text-backG px-1 py-2 text-[12px]'>
                                Ignore
                            </button>
                            <button className='text-white px-3 py-2 bg-backG rounded-full text-[12px]'>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmAppManager
