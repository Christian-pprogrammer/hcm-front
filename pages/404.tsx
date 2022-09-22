import Head from "next/head";
import { useRouter } from 'next/router';
import React from 'react';

import { ForbiddenPageIcon, RightArrow } from '../icons';
import {app_config} from "../utils/constants";
import Header from "../components/landingpage/Header";

export default function NotFound() {
    const router = useRouter()
    const Redirecting = () =>{
        router.push('/')
    }
    return(
        <>
        <Head>
            <title>Page not found | {app_config.APP_NAME_LOWER}</title>
            <link rel="icon" href={"/favicon.ico"} />
        </Head>
        <Header />
        <div className='flex min-h-screen place-items-center justify-center lg:justify-start gap-[4em] lg:px-20 md:px-10 px-5'>
            <div className='hidden lg:flex'>
                <ForbiddenPageIcon/>
            </div>
            <div className='flex flex-col place-items-center lg:place-items-start gap-8 '>
                <div>
                <h1 className=' font-black text-backG text-[10em] '>404</h1>
                <span className='font-bold text-[12px]'>Not Found Page !! Error Ahead !!</span>
                <p className='text-[#00000065] '>Page currently unavailable please. Retreat to the main home page or request for the help center!</p>
                </div>
                <div className='py-5'>
                <button onClick={Redirecting} className='btn animate-pulse hover:drop-shadow-xl duration-300 hover:scale-110 hover:bg-backG hover:text-white btn-primary py-5 px-10 rounded-full text-backG flex place-items-center gap-6'><span>Go Home</span><RightArrow/></button>
                </div>
            </div>
        </div>
        </>
    )
}