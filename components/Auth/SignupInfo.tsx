import React, { useState } from 'react'
import { KeyIcon, LockIcon, PersonaIcon } from '../../icons'

const SignupInfo = () => {
    const [showPassword, setShowPasswords] = useState<Boolean>(false)

    return (
        <>
            <div className='pt-8'>
                <label className='font-normal'>Email <span className='text-red-500 pl-2'>*</span> </label>
                <div className='flex hover:border-solid my-4 hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <PersonaIcon />
                    </div>
                    <input className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="email" placeholder="Enter your email" />
                </div>
            </div>
            <div>
                <label className='font-normal'>Password <span className='text-red-500 pl-2'>*</span> </label>
                <div className='flex hover:border-solid my-4 hover:border-2 hover:rounded-md duration-500 rounded-md hover:border-backG border-2 border-white'>
                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                        <KeyIcon />
                    </div>
                    <input className={`place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md text-backG`} type={showPassword ? "password" : "text"} min={6} placeholder=" ***************** " />
                    <div className='flex rounded-r-md place-items-center justify-center bg-inputG p-2'>
                        <button type='button' onClick={() => setShowPasswords((prev) => !prev)}><LockIcon /></button>
                    </div>
                </div>
                <div className='flex -translate-y-2 gap-4'>
                    <input type="checkbox" /><span className='text-[10px] '>Remember Password</span>
                </div>
            </div>
            <div className='pt-10'>
                <button type='submit' className='py-5 bg-backG text-white w-full '>Register</button>
            </div>
        </>
    )
}
export default SignupInfo