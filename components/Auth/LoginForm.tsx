import Link from 'next/link';
import Head from "next/head";
import Router, { useRouter } from 'next/router';
import React, { useState,useEffect } from 'react';
import { useDispatch } from "react-redux";

import AuthService from "../../services/auth/auth.service";
import RouteService from "../../services/auth/routing";
import Alert from "../../components/alert";
import {app_config, system_users} from "../../utils/constants";
import { KeyIcon, LockIcon, PersonaIcon } from '../../icons';
import { FormLoginStructure, LoginFormData } from '../../utils/FormData';
import ForbiddenPage from '../../layouts/ForbiddenPage';
import { UrlObject } from 'url';

export default function LoginForm() {

    const [showPassword, setShowPasswords] = useState(false);
    const [FormData, setFormData] = useState<FormLoginStructure>(LoginFormData);
    const [isValid,setValid] = useState(true);

    const [loading, setLoading] = React.useState(false);
    const [alertData, setAlertData] = React.useState({
        alert: false,
        message: "",
        class: "",
    });

    const handleGoTo = (link: string | UrlObject) => {
        setTimeout(() => {
            setAlertData({alert: false, message: "", class: ""});
            Router.push(link);
        }, 1000);
    }

    useEffect(()=>{
        !FormData.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
         || FormData.password.match(/^(?=.*[A-Z])(?=.*[\\W])(?=.*[0-9])(?=.*[a-z]).{8,30}$/) ? setValid(false): setValid(true)
    },[FormData]);

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAlertData({alert: false, message: "", class: ""});
        setLoading(true);

        try {
            const res = await AuthService.login(FormData);
            AuthService.setToken(res.data.token);
            setAlertData({
                alert: true,
                message: "Logged In Successfully",
                class: "green"
            });

            if (RouteService.getPrevRoute()) {
                let link: any = RouteService.getPrevRoute();
                RouteService.removePrevRoute();
                handleGoTo(link);
            } else {
                if (res.data.role === system_users.SUPER_ADMIN)
                    handleGoTo("/super-admin");
                else if (res.data.role === system_users.GROUP_ADMIN)
                    handleGoTo("/group-admin");
                else if (res.data.role === system_users.GROUP_DIRECTOR)
                    handleGoTo("/group-director");
                else if (res.data.role === system_users.HOSPITAL_ADMIN)
                    handleGoTo("/hospital-admin");
                else if (res.data.role === system_users.HOSPITAL_DIRECTOR)
                    handleGoTo("/hospital-director");
                else if (res.data.role === system_users.SCHEDULE_MANAGER)
                    handleGoTo("/schedule-manager");
                else if (res.data.role === system_users.APPOINTMENT_MANAGER)
                    handleGoTo("/appointment-manager");
                else if (res.data.role === system_users.DOCTOR)
                    handleGoTo("/doctor");
                else if (res.data.role === system_users.PATIENT)
                    handleGoTo("/patient");
                else
                    handleGoTo("/404");
            }

        } catch (e: any) {
            // console.log("rr" ,e)
            const ERROR_MESSAGE = e.response ? e.response.data.message : e.message;
            setAlertData({
                alert: true,
                message: ERROR_MESSAGE,
                class: "red",
            });
        }

        setLoading(false);
    };

    return (
        <ForbiddenPage>
        <div className="bg-white h-screen flex-row-reverse flex ">
            <Head>
                    <title>Login | {app_config.APP_NAME_LOWER}</title>
                </Head>
            <div className="relative md:flex hidden auth-image">
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
            <div className="bg-white mx-auto md:min-w-[50vw] lg:min-w-1/2 lg:px-20 text-black p-5">
                <div className='flex py-5 flex-col justify-center gap-4 place-items-center'>
                    <div className=' flex justify-center place-items-center rounded-full bg-white'>
                        <img className='h-12 w-12  object-contain' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center  font-semibold place-items-center'>
                        <h1>HCM Appointment System</h1>
                    </div>
                </div>
                <form className={`px-2 md:px-10 py-5`} method="post" onSubmit={login}>
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
        </ForbiddenPage>
    )
}