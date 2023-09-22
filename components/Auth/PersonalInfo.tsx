import React, { useEffect, useState } from 'react'
import { FaceIdIcon, NationalityIcon, TelephoneIcon } from '../../icons'
import { FormStructure } from '../../utils/FormData'
import { CountrieListArr } from '../../utils/SelectOptions';


const PersonalInfo = ({ FormData, setFormData }: { FormData: FormStructure, setFormData: any }) => {
    const [isValid, setIsValid] = useState(true);
    useEffect(() => {
        !FormData.mobile || !FormData.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? setIsValid(false) : setIsValid(true)
    }, [FormData]);
    return (
        <>
            <div>
                <label className='text-[12px] font-bold'>Nationality <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <NationalityIcon />
                        </div>
                        <select onChange={(e) => setFormData({ ...FormData, nationality: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                            {CountrieListArr.map((option,i) => (
                                <option key={i} value={option.phone}>{option.name}</option>
                            ))}
                        </select>
                    </div>
                  </div>
            </div>
            <div className='pt-4'>
                <label className='text-[12px] font-bold'>Telephone <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div className='flex rounded-l-md place-items-center justify-center bg-white rounded-lg border-2 border-slate-200 p-2'>
                            <span>{FormData.nationality}</span>
                        </div>
                        <input value={FormData.mobile} onChange={(e) => setFormData({ ...FormData, mobile: e.target.value })} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' placeholder="Enter your Tel" />
                    </div>
                    <small className={`text-[10px] ${!isValid && 'text-red-500'}`}>{!isValid ? "Please Enter a valid telephone" : ""}</small>
                </div>
            </div>
            <div className=''>
                <label className='text-[12px] font-bold'>Gender <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <FaceIdIcon />
                        </div>
                        <select value={FormData.gender} onChange={(e) => {
                            alert(e.target.value)
                            setFormData({ ...FormData, gender: e.target.value })
                        }} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' placeholder="Select gender">
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                        </select>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PersonalInfo
