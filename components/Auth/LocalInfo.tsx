import React, { useEffect, useState } from 'react'
import {  LocationIcon } from '../../icons'
import { FormStructure } from '../../utils/FormData'

const LocalInfo = ({ FormData, setFormData }: { FormData: FormStructure, setFormData: any }) => {
    const [isValid, setIsValid] = useState<Boolean>(true);
    useEffect(() => {
        !FormData.province || !FormData.district || !FormData.sector ? setIsValid(false) : setIsValid(true)
    }, [FormData]);
    return (
        <>
            <div className='pt-4'>
                <label className='font-bold text-[12px]'>Province  <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <LocationIcon />
                        </div>
                        <input value={FormData.province} onChange={(event) => setFormData({ ...FormData, province: event.target.value })} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your province/City" />
                    </div>
                    <small className={`text-[10px] text-green-500 ${!isValid && 'text-red-500'}`}>{!isValid ? "Please Enter a valid province" : "Optional"}</small>
                </div>
            </div>
            <div className=''>
                <label className='font-bold text-[12px]'>District <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <LocationIcon />
                        </div>
                        <input value={FormData.district} onChange={(e) => setFormData({ ...FormData, district: e.target.value })} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your district/area" />
                    </div>
                    <small className={`text-[10px] text-green-500 ${!isValid && 'text-red-500'}`}>{!isValid ? "Please Enter a valid district" : "Optional"}</small>
                </div>
            </div>
            <div className=''>
                <label className='font-bold text-[12px]'>Sector <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div
                            className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <LocationIcon />
                        </div>
                        <input value={FormData.sector} onChange={(e) => setFormData({ ...FormData, sector: e.target.value })} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your sector --location" />
                    </div>
                    <small className={`text-[10px] text-green-500 ${!isValid && 'text-red-500'}`}>{!isValid ? "Please Enter a valid sector" : "Optional"}</small>
                </div>
            </div>

        </>
    )
}

export default LocalInfo