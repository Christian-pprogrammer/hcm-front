import React, { useState } from 'react'
import { KeyIcon, LockIcon, PersonaIcon } from '../../icons'
import { FormStructure } from '../../utils/FormData'

const SignupInfo = ({FormData,setFormData} : {FormData:FormStructure , setFormData :any}) => {
    const [showPassword, setShowPasswords] = useState<Boolean>(false)
    return (
        <>
        <div className='pt-2'>
                <label className='text-[14px]'>Username <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                <div className='flex hover:border-solid  hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <PersonaIcon />
                    </div>
                    <input value={FormData.username} onChange={(event)=>setFormData({...FormData,username:event.target.value})} className='place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your username" />
                </div>
                <small className="text-[12px]"></small>
                </div>
            </div>
            <div className=''>
                <label className='text-[14px] '>Email <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                <div className='flex hover:border-solid  hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <PersonaIcon />
                    </div>
                    <input value={FormData.email} onChange={(e) => setFormData({...FormData,email:e.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="email" placeholder="Enter your email" />
                </div>
                <small className='text-[12px]'></small>
                </div>
            </div>
            <div>
                <label className='text-[14px]'>Password <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                <div className='flex hover:border-solid  hover:border-2 hover:rounded-md duration-500 rounded-md hover:border-backG border-2 border-white'>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <KeyIcon />
                    </div>
                    <input value={FormData.password} onChange={(e) => setFormData({...FormData,password:e.target.value})} className={`place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md text-backG`} type={showPassword ? "password" : "text"} min={6} placeholder=" ***************** " />
                    <div className='flex rounded-r-md place-items-center justify-center bg-inputG p-2'>
                        <button type='button' onClick={() => setShowPasswords((prev) => !prev)}><LockIcon /></button>
                    </div>
                </div>
                <small className='text-[12px]'></small>
                </div>
                <div className='flex -translate-y-2 gap-4'>
                    <input type="checkbox" /><span className='text-[10px] '>Remember Password</span>
                </div>
            </div>
           
        </>
    )
}
export default SignupInfo