import React, { useState } from 'react'
import { PersonaIcon } from '../../icons'
import { FormStructure } from '../../utils/FormData'

const PersonalInfo = ({FormData,setFormData} : {FormData:FormStructure , setFormData :any}) => {
    return (
        <>
            <div className='pt-4'>
                <label className='text-[14px]'>Telephone <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>

                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <PersonaIcon />
                        </div>
                        <input value={FormData.telephone} onChange={(e)=>setFormData({...FormData,telephone:e.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="number" placeholder="Enter your Tel" />
                    </div>
                    <small className='text-[12px]'></small>
                </div>
            </div>
            <div className=''>
                <label className='text-[14px]'>Nationality <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <PersonaIcon />
                        </div>
                        <input value={FormData.nationality} onChange={(event)=>setFormData({...FormData,nationality:event.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' />
                    </div>
                    <small className='text-[12px]'></small>
                </div>
            </div>
            <div className=''>
                <label className='text-[14px]'>Nationality ID/Passport ID <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <PersonaIcon />
                        </div>
                        <input value={FormData.cardID} onChange={(e)=>setFormData({...FormData,cardID:e.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your nationality" />
                    </div>
                    <small className='text-[12px]'></small>
                </div>
            </div>

        </>
    )
}

export default PersonalInfo