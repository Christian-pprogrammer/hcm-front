import Link from 'next/link'
import React, { useState } from 'react'
import { LineSvg  } from '../../icons'
import SignupInfo from './SignupInfo'

const SignupForm = () => {

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
                <div className='flex flex-col justify-center align-middle place-content-center  w-full text-center font-bold text-7xl place-items-center'>
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
                    <div className='flex flex-col justify-center font-semibold place-items-center'>
                        <h1>The HCM Appointment System</h1>
                    </div>
                </div>
                <div className='flex py-2 justify-center place-items-center gap-6'>
                    <div className='fixed flex justify-center  place-items-center'>
                        <LineSvg />
                    </div>
                    <div className="z-20">
                        <button className='btn hover:scale-110 duration-300 btn-primary h-14 w-14 text-lg rounded-full bg-backG text-white font-bold'>1</button>
                    </div>
                    <div className="z-20">
                        <button className='btn hover:scale-110 hover:bg-backG hover:text-white duration-300 btn-primary h-14 w-14 text-lg rounded-full bg-inputG text-backG font-bold'>2</button>
                    </div>
                    <div className="z-20">
                        <button className='btn hover:scale-110 hover:bg-backG hover:text-white duration-300 btn-primary h-14 w-14 text-lg rounded-full bg-inputG text-backG font-bold'>3</button>
                    </div>

                </div>
                <div className='md:px-10 px-2'>
                    <h1 className='font-bold text-xl'>Sign Up</h1>
                </div>
                <form className={`px-2 md:px-10 `} method="post">
                    <SignupInfo />
                </form>
                <div className='px-2 md:px-10 py-2 text-left text-[12px]'>
                    <span>Already Have an Account?</span> <Link className='text-backG ' href='/auth/Login'>Login </Link>
                </div>
            </div>
        </div>
    )
}

export default SignupForm