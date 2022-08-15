import React from 'react'
import { PersonaIcon } from '../../icons'
import { FormStructure } from '../../utils/FormData'

const LocalInfo = ({FormData,setFormData } : {FormData:FormStructure , setFormData: any}) => {
    return (
        <>
            <div className='pt-4'>
                <label className='font-normal text-[14px]'>Province  <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>

                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <PersonaIcon />
                        </div>
                        <input value ={FormData.province} onChange={(event)=>setFormData({...FormData,province:event.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your Tel" />
                    </div>
                    <small className='text-[12px] text-green-600'>Optional </small>
                </div>
            </div>
            <div className=''>
                <label className='font-normal text-[14px]'>District <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <PersonaIcon />
                        </div>
                        <input value={FormData.district} onChange={(e)=>setFormData({FormData,district:e.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your nationality" />
                    </div>
                    <small className='text-[12px] text-green-600'>Optional </small>
                </div>
            </div>
            <div className=''>
                <label className='font-normal text-[14px]'>Sector <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div
                         className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <PersonaIcon />
                        </div>
                        <input value={FormData.sector} onChange={(e)=>setFormData({...FormData, sector: e.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your nationality" />
                    </div>
                    <small className='text-[12px] text-green-600'>Optional </small>
                </div>
            </div>

        </>
    )
}

export default LocalInfo