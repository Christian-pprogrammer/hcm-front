import React, { useEffect, useState } from 'react'
import { EmailIcon, EyeNoShowIcon, EyeShowIcon, KeyIcon, LockIcon, UsernameIcon } from '../../icons'
import { FormStructure } from '../../utils/FormData'

const SignupInfo = ({FormData,setFormData} : {FormData:FormStructure , setFormData :any}) => {
    const [showPassword, setShowPasswords] = useState<Boolean>(false);
    const [isValid,setisValid] = useState<Boolean>(true);
    useEffect(()=>{
       !FormData.fullName || FormData.password.match(/^(?=.*[A-Z])(?=.*[\\W])(?=.*[0-9])(?=.*[a-z]).{8,30}$/) || !FormData.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? setisValid(false): setisValid(true)
    },[FormData]);
    return (
        <>
        <div className=''>
                <label className='text-[12px] font-bold'>Full name <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                <div className='flex hover:border-solid  hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <UsernameIcon />
                    </div>
                    <input value={FormData.fullName} onChange={(event)=>setFormData({...FormData,fullName:event.target.value})} className='place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your full name" />
                </div>
                <small className={`text-[10px] ${!isValid && 'text-red-500'}`}>{!isValid ? "Please Enter your full name" : ""}</small>
                </div>
            </div>
            <div className=''>
                <label className='text-[12px] font-bold '>Email <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                <div className='flex hover:border-solid  hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <EmailIcon />
                    </div>
                    <input value={FormData.email} onChange={(e) => setFormData({...FormData,email:e.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="email" placeholder="Enter your email" />
                </div>
                <small className={`text-[10px] ${!isValid && 'text-red-500'}`}>{!isValid ? "Please Enter a valid email" : ""}</small>
                </div>
            </div>
            <div>
                <label className='text-[12px] font-bold'>Password <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                <div className='flex hover:border-solid  hover:border-2 hover:rounded-md duration-500 rounded-md hover:border-backG border-2 border-white'>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <KeyIcon />
                    </div>
                    <input value={FormData.password} onChange={(e) => setFormData({...FormData,password:e.target.value, confirmPassword: e.target.value})} className={`place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md text-backG`} type={showPassword ? "password" : "text"} min={6} placeholder="••••••••••••••••" />
                    <div className='flex rounded-r-md place-items-center justify-center bg-inputG p-2'>
                        <button type='button' onClick={() => setShowPasswords((prev) => !prev)}>{!showPassword ? <EyeShowIcon/> : <EyeNoShowIcon/>}</button>
                    </div>
                </div>
                <small className={`text-[10px] ${!isValid && 'text-red-500'}`}>{!isValid ? "Please Enter a valid password" : ""}</small>
                </div>
                <div className='flex -translate-y-2 gap-4'>
                    <input type="checkbox" /><span className='text-[10px] '>Remember Password</span>
                </div>
            </div>


        </>
    )
}
export default SignupInfo
