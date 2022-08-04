import Image from 'next/image'
import React from 'react'
import { AccountDisplayName } from '../../../PageData.types'
const Accountsection = () => {
    return (
        <div className='md:mx-auto w-full lg:w-4/5 min-h-[20vh] absolute lg:left-40 font-semibold p-5 -translate-y-[6em] lg:rounded-lg bg-white '>
            <h1>Our Trusted Partner</h1>
            <div className='md:grid-cols-2 gap-10 lg:grid-cols-4 sm:grid-cols-2 grid grid-cols-1 py-10 sm:py-4 '>
                {AccountDisplayName.map((account)=>(
                <div key={account.id} className='flex gap-4'>
                    <img src={`${account.MinUrl}`} className="sm:w-24 w-10 h-10 sm:h-24 sm:p-5 object-cover" alt="" />
                    <div className=' py-0 sm:py-5'>
                        <h1 className='font-semibold text-[1em]'>{account.MinistryCountry}</h1>
                        <small className='text-[#00000070] text-[10px]'>{account.ShortMinDesc}</small>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Accountsection