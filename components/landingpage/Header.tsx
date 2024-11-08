import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CloseToggle, MenuIcon } from '../../icons'
import { app_config } from '../../utils/constants';
import Image from 'next/image';

const Header = () => {
    const [ShowLinks, setShowLinks] = useState<Boolean>(false);
    const ChangeHeader = (path: string) => {
        const router = useRouter()
        if (router.asPath == path) {
            return "text-backG border-b-2 border-solid border-backG py-2 duration-700 "
        }
    }
    return (
        <header className={` ${ShowLinks && 'flex-col gap-6 origin-center duration-300 '} z-10 fixed top-0 left-0 right-0 bg-white duration-500 justify-between drop-shadow-xl px-2 flex md:px-2 lg:px-[4em]  min-h-[10vh]`}>
            <div className='flex  py-2  gap-4'>
                <div className=' flex justify-center place-items-center rounded-full bg-white'>
                    <Image className='h-12 w-12  object-contain' width='44' height='44' src={app_config.APP_LOGO} alt={app_config.APP_NAME_LOWER} />
                </div>
                <div className='flex flex-col justify-center place-items-center'>
                    <h1>The HCM Appointment System</h1>
                    <p className='text-[#000000b3] text-left text-[12px]'>HCM Corporations</p>
                </div>
            </div>
            <div className={`flex ${ShowLinks && 'flex flex-col  gap-6 justify-center'}  place-items-center justify-center  md:gap-[2em] lg:gap-[8em]`}>
                <ul className={`text-black text-[14px] font-normal ${ShowLinks ? 'flex flex-col gap-6 text-center justify-center' : 'hidden'}  md:flex gap-10`}>
                    <li className={`${ChangeHeader('/')} hover:border-b-2 hover:border-solid hover:border-backG py-2 hover:duration-700 hover:text-blue-500`}><Link href="/">Home</Link></li>
                    <li className={`${ChangeHeader('/#about')} hover:border-b-2 hover:border-solid hover:border-backG py-2 hover:duration-700 hover:text-blue-500`}><Link href="/#about">About Us</Link></li>
                    <li className={`${ChangeHeader('/#services')} hover:border-b-2 hover:border-solid hover:border-backG py-2 hover:duration-700 hover:text-blue-500`}><Link href="/#services">Showcase</Link></li>
                    <li className={`${ChangeHeader('/patient/landing-appointment-page')} hover:border-b-2 hover:border-solid hover:border-backG py-2 hover:duration-700 hover:text-blue-500`}><Link href="/patient/landing-appointment-page">Appointments</Link></li>
                </ul>
                <Link href='/auth/login' className={` ${ShowLinks ? 'flex flex-col gap-6 py-10 justify-center' : 'hidden'}  `}>
                    <button className={`btn lg:flex border-solid hover:bg-backG hover:text-white duration-600 border-backG border-2 rounded-md  justify-center  text-backG py-2 px-10 font-semibold  ${ShowLinks ? 'flex' : 'hidden'}  `}>Login</button>
                </Link>
                <div className={`flex absolute right-2 top-4 md:hidden`}>
                    <button className="btn duration-600" onClick={() => setShowLinks((prevLink) => !prevLink)}>{ShowLinks ? <CloseToggle /> : <MenuIcon />}</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
