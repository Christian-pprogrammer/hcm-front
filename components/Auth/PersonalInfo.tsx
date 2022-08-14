import React from 'react'
import { PersonaIcon } from '../../icons'

const PersonalInfo = () => {
    return (
        <>
            <div className='pt-8'>
                <label className='font-normal'>Telephone <span className='text-red-500 pl-2'>*</span> </label>
                <div className='flex hover:border-solid my-4 hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <PersonaIcon />
                    </div>
                    <input className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="number" placeholder="Enter your Tel" />
                </div>
            </div>
            <div className=''>
                <label className='font-normal'>Nationality <span className='text-red-500 pl-2'>*</span> </label>
                <div className='flex hover:border-solid my-4 hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <PersonaIcon />
                    </div>
                    <input className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your nationality" />
                </div>
            </div>
            <div className=''>
                <label className='font-normal'>Nationality ID/Passport ID <span className='text-red-500 pl-2'>*</span> </label>
                <div className='flex hover:border-solid my-4 hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <PersonaIcon />
                    </div>
                    <input className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your nationality" />
                </div>
            </div>
            
        </>
    )
}

export default PersonalInfo