import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { KeyIcon, LockIcon, PersonaIcon } from '../../icons'
import { FormLoginStructure, LoginFormData } from '../../utils/FormData'

const LoginForm = () => {
    const [showPassword, setShowPasswords] = useState<Boolean>(false)
    const [FormData, setFormData] = useState<FormLoginStructure>(LoginFormData)
    const [isValid,setValid] = useState<Boolean>(true)
    const navigate = useRouter()
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        FormData.email === '' || FormData.password === '' ? setValid(false): setValid(true)    
        navigate.push('/Dash/Dashboard')
    }
    return (
        <div className="bg-white h-screen flex ">
            <div className="relative md:flex hidden  auth-image">
                <div className="absolute text-[12px] flex gap-4 top-0 p-5">
                    <div className=' flex justify-center place-items-center rounded-full '>
                        <img className='h-14 w-14 bg-white rounded-full p-2  object-contain' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
                    </div>
                    <div className=' justify-center'>
                        <h1 className='text-xl font-semibold '>HCM Corp</h1>
                        <p className='text-[#ffffffb3] text-[12px]'>HCM Appointment Status</p>
                        <span className='text-[#ffffffb3] text-[12px]'>2022</span>
                    </div>
                </div>
                <div className='flex flex-col justify-center align-middle place-content-center  w-full text-center font-extrabold text-[5em] place-items-center'>
                    <h1>HCM Appointment System</h1>
                </div>
                <div className='flex left-[25vw] absolute bottom-2 text-[white]'>
                    <p>Copyright @ 2022 - International UN </p>
                </div>
            </div>
            <div className="bg-white overflow-y-auto sm:mx-auto md:min-w-[50vw] lg:min-w-[30vw] text-black p-5">
                <div className='flex py-5 flex-col justify-center gap-4 place-items-center'>
                    <div className=' flex justify-center place-items-center rounded-full bg-white'>
                        <img className='h-12 w-12  object-contain' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center  font-semibold place-items-center'>
                        <h1>The HCM Appointment System</h1>
                    </div>
                </div>
                <form className={`px-2 md:px-10 py-5`} method="post" onSubmit={handleOnSubmit}>
                    <h1 className='font-bold text-xl'>Login</h1>

                    <div className='pt-8'>
                        <label className='font-normal'>Email <span className='text-red-500 pl-2'>*</span> </label>
                        <div className='py-4'>

                            <div className='flex hover:border-solid  hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                                <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                                    <PersonaIcon />
                                </div>
                                <input value={FormData.email} onChange={(e)=>setFormData({...FormData,email:e.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="email" placeholder="Enter your email" />
                            </div>
                            <small className={`text-[12px] ${!isValid && 'text-red-500'}`}>{!isValid ? "Please enter a valid email" : ""}</small>
                        </div>
                    </div>
                    <div>
                        <label className='font-normal'>Password <span className='text-red-500 pl-2'>*</span> </label>
                        <div className='py-2'>
                            <div className='flex hover:border-solid my-4 hover:border-2 hover:rounded-md duration-500 rounded-md hover:border-backG border-2 border-white'>
                                <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                                    <KeyIcon />
                                </div>
                                <input value={FormData.password} onChange={(e)=>setFormData({...FormData, password:e.target.value})} className={`place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md text-backG`} type={showPassword ? "password" : "text"} min={6} placeholder=" ***************** " />
                                <div className='flex rounded-r-md place-items-center justify-center bg-inputG p-2'>
                                    <button type='button' onClick={() => setShowPasswords((prev) => !prev)}><LockIcon /></button>
                                </div>
                            </div>
                                <small className={`text-[12px] ${!isValid && 'text-red-500'}`}>{!isValid ? "Please enter a valid password" : ""}</small>
                        </div>
                        <div className='flex -translate-y-2 gap-4'>
                            <input type="checkbox" /><span className='text-[10px] '>Remember Password</span>
                        </div>
                    </div>
                    <div className='pt-6'>
                        <button type='submit' className='py-5 bg-backG text-white w-full font-bold btn '>Login</button>
                    </div>
                </form>
                <div className='px-2 md:px-10 py-2 text-left text-[12px]'>
                    <span>Do not Have an Account?</span> <Link className='text-backG ' href='/auth/Signup'>Sign Up </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginForm