import Link from 'next/link';
import Head from "next/head";
import Router from 'next/router';
import React, { useState,useEffect } from 'react';

import AuthService from "../../services/auth/auth.service";
import RouteService from "../../services/auth/routing";
import {notifyError, notifySuccess} from "../../components/alert";
import {app_config, system_users} from "../../utils/constants";
import {KeyIcon, EyeNoShowIcon, EyeShowIcon, EmailIcon } from '../../icons';
import { FormDummy, FormVerificationStructure, VerificationFormData } from '../../utils/FormData';
import ForbiddenPage from '../../layouts/ForbiddenPage';
import { UrlObject } from 'url';
import jwtDecode from 'jwt-decode';
import LoaderCache from '../../components/loaders/LoaderCache';
import Image from 'next/image';
import PageLogo from '../../components/PageLogo';

export default function Verification() {

    const [FormData, setFormData] = useState<FormVerificationStructure>(VerificationFormData);
    const [isCodeVarid,setIsCodeVarid] = useState(true);

    const [loading, setLoading] = React.useState(false);

    const handleGoTo = (link: string | UrlObject) => {
        setTimeout(() => {
            Router.push(link);
        }, 1000);
    }

    const verifyAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await AuthService.verifyEmail(FormData);
            notifySuccess(res.data?.message);            
            setLoading(false);
            Router.push('/auth/login')
        } catch (e: any) {
            // console.log("rr" ,e)
            const ERROR_MESSAGE = e.response ? e.response?.data?.error || "Sorry, try again!" : e.error;
            notifyError(ERROR_MESSAGE);
        }
        setLoading(false);

    };

    return (
        <ForbiddenPage>
            {loading ?
            <LoaderCache/>
            :
            <div className="bg-white h-screen flex-row-reverse flex ">
                <Head>
                        <title>{`Login | ${app_config.APP_NAME_LOWER}`}</title>
                    </Head>
                <div className="relative md:flex hidden auth-image bg-backG">
                    <div className="absolute text-[12px] flex gap-4 top-0 p-5">
                        <div className=' flex bg-white justify-center place-items-center w-16 h-16 shadow-md'>
                            <PageLogo/>
                        </div>
                        <div className=' justify-center'>
                            <h1 className='text-xl font-semibold '>HCM Corp</h1>
                            <p className='text-[#ffffffb3] text-[12px]'>HCM Appointment Status</p>
                            <span className='text-[#ffffffb3] text-[12px]'>2022</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center align-middle place-content-center   w-full text-center font-extrabold text-[3em] place-items-center'>
                        <h1>HCM Appointment System</h1>
                    </div>
                    <div className='flex left-[25vw] absolute bottom-2 text-[white]'>
                        <p>Copyright @ 2022 - International UN </p>
                    </div>
                </div>
                <div className="bg-white mx-auto w-full sm:px-10 md:min-w-[50vw] lg:min-w-1/2 lg:px-20 text-black p-5">
                    <div className='flex py-5 flex-col justify-center gap-4 place-items-center'>
                        <div className=' flex justify-center place-items-center rounded-full '>
                            <PageLogo/>
                        </div>
                        <div className='flex flex-col justify-center  font-semibold place-items-center'>
                            <h1>HCM Appointment System</h1>
                        </div>
                    </div>
                    <form className={`px-2 md:px-10 py-5`} method="post" onSubmit={verifyAccount}>
                        <h1 className='font-bold text-xl'>Email verification</h1>

                        <div className='pt-8'>
                            <label className='font-normal'>Verification Code <span className='text-red-500 pl-2'>*</span> </label>
                            <div className='py-4'>

                                <div className='flex hover:border-solid  hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                                        <EmailIcon />
                                    </div>
                                    <input value={FormData.code} onChange={(e)=>setFormData({...FormData,code:e.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter code sent on your email" />
                                </div>
                                <small className={`text-[12px] ${!isCodeVarid && 'text-red-500'}`}>{!isCodeVarid ? "Please enter a valid code" : ""}</small>
                            </div>
                        </div>
                        
                        <div className='pt-6'>
                            <button type='submit' className='py-5 bg-backG text-white w-full font-bold btn '>Verify</button>
                        </div>
                    </form>
                    <div className='px-2 md:px-10 py-2 text-left text-[12px]'>
                        <span>Did not get the code?</span> <Link className='text-backG ' href='#'>Contact us </Link>
                    </div>
                </div>
            </div>
    }
        </ForbiddenPage>
    )
}