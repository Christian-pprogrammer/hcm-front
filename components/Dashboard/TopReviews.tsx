import React from 'react'

const TopReviews = () => {
    return (
        <div className='min-w-[20vw] relative rounded-lg border-2 h-[50vh] border-[#000000082] border-solid'>
            <div className='p-5'>
                <span>Reviews</span>
            </div>
            <div className='px-4 w-full flex-col flex py-10 md:py-1 flex-row justify-center gap-4 place-items-center'>
                <div className='text-[14px]'>
                    <h1 className='font-bold py-2'>MINISANTE</h1>
                    <p className='text-slate-400'>We had fantastic experience with the system due to an amazing controlling of appointements.We had fantastic experience with the system due to an amazing controlling of appointements</p>
                </div>
                <div className='text-[14px]'>
                    <h1 className='font-bold py-2'>Private Admin</h1>
                    <p className='text-slate-400'>We had fantastic experience with the system due to an amazing controlling of appointements.We had fantastic experience with the system due to an amazing controlling of appointements</p>
                </div>
            </div>
        </div>
    )
}

export default TopReviews