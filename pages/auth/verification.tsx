import Link from 'next/link';
import Head from "next/head";
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import AuthService from "../../services/auth/auth.service";
import {notifyError, notifySuccess} from "../../components/alert";
import {app_config} from "../../utils/constants";
import {KeyIcon, EmailIcon } from '../../icons';
import { FormVerificationStructure, VerificationFormData } from '../../utils/FormData';
import ForbiddenPage from '../../layouts/ForbiddenPage';
import { UrlObject } from 'url';
import LoaderCache from '../../components/loaders/LoaderCache';
import PageLogo from '../../components/PageLogo';

export default function Verification() {
  const router = useRouter();
    const [FormData, setFormData] = useState<FormVerificationStructure>(VerificationFormData);
    const [isCodeValid, setIsCodeValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const [loading, setLoading] = React.useState(false);
    const { email, code } = router.query;

    useEffect(() => {
      try{
        if (email && typeof email === "string") {
          setFormData((prevFormData) => ({
            ...prevFormData,
            email: email,
          }));
        }
        if (code && typeof code === "string") {
          setFormData((prevFormData) => ({
            ...prevFormData,
            code: code,
          }));
        }
        !FormData.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? setIsEmailValid(false): setIsEmailValid(true);
        FormData.code.length != 6 ? setIsCodeValid(false) : setIsCodeValid(true);
      } catch (error: any) {
        const ERROR_MESSAGE = error.response
          ? error.response?.data?.error || "An error occurred verifying, try again!"
          : error.error;
        notifyError(ERROR_MESSAGE);
      }
    }, [FormData.code.length, FormData.email, code, email])

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
            console.log("rr" ,e)
            const ERROR_MESSAGE = e.response ? e.response?.data?.message || "Sorry, try again!" : e.error;
            notifyError(ERROR_MESSAGE);
        }
        setLoading(false);

    };

    // Get the current year
  const currentYear = new Date().getFullYear();

    return (
        <ForbiddenPage>
            {loading ?
            <LoaderCache/>
            :
            <div className="bg-white h-screen flex-row-reverse flex ">
                <Head>
                        <title>{`Verify Email | ${app_config.APP_NAME_LOWER}`}</title>
                    </Head>
                <div className="relative md:flex hidden auth-image bg-backG">
                    <div className="absolute text-[12px] flex gap-4 top-0 p-5">
                        <div className=' flex bg-white justify-center place-items-center w-16 h-16 shadow-md'>
                            <PageLogo/>
                        </div>
                        <div className=' justify-center'>
                            <h1 className='text-xl font-semibold '>HCM Corp</h1>
                            <p className='text-[#ffffffb3] text-[12px]'>HCM Appointment Status</p>
                            <span className='text-[#ffffffb3] text-[12px]'>{currentYear}</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center align-middle place-content-center   w-full text-center font-extrabold text-[3em] place-items-center'>
                        <h1>HCM Appointment System</h1>
                    </div>
                    <div className='flex left-[25vw] absolute bottom-2 text-[white]'>
                        <p>Copyright @ {currentYear} - International UN </p>
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
                            <label className='font-normal'>Your Email <span className='text-red-500 pl-2'>*</span> </label>
                            <div className='py-4'>

                                <div className='flex hover:border-solid  hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                                        <EmailIcon />
                                    </div>
                                    <input value={FormData.email} onChange={(e)=>setFormData({...FormData,email:e.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your email" />
                                </div>
                                <small className={`text-[12px] ${!isEmailValid && 'text-red-500'}`}>{!isEmailValid ? "Please enter a valid email" : ""}</small>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <label className='font-normal'>Verification Code <span className='text-red-500 pl-2'>*</span> </label>
                            <div className='py-4'>

                                <div className='flex hover:border-solid  hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                                        <KeyIcon />
                                    </div>
                                    <input value={FormData.code} onChange={(e)=>setFormData({...FormData,code:e.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter code sent on your email" />
                                </div>
                                <small className={`text-[12px] ${!isCodeValid && 'text-red-500'}`}>{!isCodeValid ? "Please enter a valid code" : ""}</small>
                            </div>
                        </div>

                        <div className='pt-6'>
                            <button type='submit' className='py-5 bg-backG text-white w-full font-bold btn '>Verify</button>
                        </div>
                    </form>
                    <div className='px-2 md:px-10 py-2 text-left text-[12px]'>
                        <span>Did not get the code?</span> <Link className='text-backG ' href='mailto:DushimeBillBenon@gmail.com'>Contact us </Link>
                    </div>
                </div>
            </div>
    }
        </ForbiddenPage>
    )
}
