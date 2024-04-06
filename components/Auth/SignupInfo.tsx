import React, { useEffect, useRef, useState } from 'react'
import { EmailIcon, EyeNoShowIcon, EyeShowIcon, KeyIcon, LockIcon, UsernameIcon } from '../../icons'
import { FormStructure } from '../../utils/FormData'
import {emailValidation} from "../../utils/functions";

const SignupInfo = ({FormData,setFormData, onValidityChange} : {FormData:FormStructure , setFormData :any, onValidityChange: (newValidity: boolean) => void }) => {
    const [showPassword, setShowPasswords] = useState<Boolean>(false);
    const [isFullnameValid,setIsFullnameValid] = useState<Boolean>(false);
    const [isPasswordValid,setIsPasswordValid] = useState<Boolean>(false);
    const [isEmailValid,setIsEmailValid] = useState<Boolean>(false);
    const validityRef = useRef<boolean>(false);

    useEffect(()=>{
       !FormData.fullName ? setIsFullnameValid(false) : setIsFullnameValid(true);
       !FormData.password.match(/^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*()\-+=.,?])^.{8,30}$/) ? setIsPasswordValid(false) : setIsPasswordValid(true);
       emailValidation(FormData.email) ? setIsEmailValid(true): setIsEmailValid(false);


       const isValid = !!(isFullnameValid && isPasswordValid);
       validityRef.current = isValid;
       onValidityChange(validityRef.current);
    },[FormData, isEmailValid, isFullnameValid, isPasswordValid, onValidityChange]);
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
                <small className={`text-[10px] ${!isFullnameValid && 'text-red-500'}`}>{!isFullnameValid ? "Please Enter your full name" : ""}</small>
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
                <small className={`text-[10px] ${!isEmailValid && 'text-red-500'}`}>{!isEmailValid ? "Please Enter a valid email" : ""}</small>
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
                <small className={`text-[10px] ${!isPasswordValid && 'text-red-500'}`}>{!isPasswordValid ? "Please Enter a valid password" : ""}</small>
                </div>
                <div className='flex -translate-y-2 gap-4'>
                    <input type="checkbox" /><span className='text-[10px] '>Remember Password</span>
                </div>
            </div>


        </>
    )
}
export default SignupInfo
