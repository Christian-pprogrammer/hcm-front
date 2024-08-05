import Link from 'next/link';
import Head from "next/head";
import Router from 'next/router';
import React, { useState,useEffect } from 'react';

import AuthService from "../../services/auth/auth.service";
import RouteService from "../../services/auth/routing";
import {notifyError, notifySuccess} from "../../components/alert";
import {app_config, system_users} from "../../utils/constants";
import {KeyIcon, EyeNoShowIcon, EyeShowIcon, EmailIcon } from '../../icons';
import { FormDummy, FormLoginStructure, LoginFormData } from '../../utils/FormData';
import ForbiddenPage from '../../layouts/ForbiddenPage';
import { UrlObject } from 'url';
import jwtDecode from 'jwt-decode';
import LoaderCache from '../../components/loaders/LoaderCache';
import Image from 'next/image';
import PageLogo from '../../components/PageLogo';
import Modal from '../../components/Common/Modal';

export default function Login() {

    const [showPassword, setShowPasswords] = useState(false);
    const [FormData, setFormData] = useState<FormLoginStructure>(LoginFormData);
    const [isEmailValid,setEmailValid] = useState(true);
    const [isPassValid,setPassValid] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [availableRoles, setAvailableRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');

    const [loading, setLoading] = React.useState(false);

    const handleGoTo = (link: string | UrlObject) => {
        setTimeout(() => {
            Router.push(link);
        }, 1000);
    }

    useEffect(()=>{
        !FormData.email
          .toLowerCase()
          .match(
            /^(?:[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.[a-zA-Z]{2,})|^[\d]{10}$/
          )
          ? setEmailValid(false)
          : setEmailValid(true);
        !FormData.password.match(/^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*()\-+=.,?])^.{8,30}$/) ? setPassValid(false): setPassValid(true);
    },[FormData]);

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let submitData = {
                email: '',
                password: ''
            }
            if (FormData.email.startsWith("0") && /^\d{10}$/.test(FormData.email)) {
                submitData.email = FormData.email.slice(1)
                submitData.password = FormData.password
            }else{
                submitData.email = FormData.email
                submitData.password = FormData.password
            }
            setLoading(true);
            const res = await AuthService.login(submitData);
            AuthService.setToken(res.data.accessToken);
            const decodedToken: any = jwtDecode(res.data.accessToken);
            const roles = decodedToken.user.roles;
            let role = '';
            if(roles.length > 1) {
                setIsModalOpen(true);
                setAvailableRoles(roles);
            }else{
                role = roles[0]?.role;
                notifySuccess("Logged In Successful");
                if (RouteService.getPrevRoute()) {
                    let link: any = RouteService.getPrevRoute();
                    RouteService.removePrevRoute();
                    handleGoTo(link);
                } else {
                    setFormData(FormDummy);
                    if (role === system_users.SUPER_ADMIN)
                        handleGoTo("/super-admin/dashboard");
                    else if (role === system_users.GROUP_ADMIN)
                        handleGoTo("/group-admin/dashboard");
                    else if (role === system_users.GROUP_DIRECTOR)
                        handleGoTo("/group-director/dashboard");
                    else if (role === system_users.HOSPITAL_ADMIN)
                        handleGoTo("/hospital-admin/dashboard");
                    else if (role === system_users.HOSPITAL_DIRECTOR)
                        handleGoTo("/hospital-director/dashboard");
                    else if (role === system_users.SCHEDULE_MANAGER)
                        handleGoTo("/schedule-manager/dashboard");
                    else if (role === system_users.APPOINTMENT_MANAGER)
                        handleGoTo("/appointment-manager/dashboard");
                    else if (role === system_users.DOCTOR)
                        handleGoTo("/doctor/dashboard");
                    else if (role === system_users.PATIENT)
                        handleGoTo("/patient/schedules");
                    else
                        handleGoTo("/404");
                }
            setLoading(false);
            }

        } catch (e: any) {
            const ERROR_MESSAGE = e.response ? e.response?.data?.error || "Sorry, try again!" : e.error;
            notifyError(ERROR_MESSAGE);
            setFormData(FormDummy);
        }
        setLoading(false);

    };

    const continueLogin = () => {
        let role = selectedRole;
        notifySuccess("Logged In Successful");
        if (RouteService.getPrevRoute()) {
            let link: any = RouteService.getPrevRoute();
            RouteService.removePrevRoute();
            handleGoTo(link);
        } else {
            if (role === system_users.SUPER_ADMIN)
                handleGoTo("/super-admin/dashboard");
            else if (role === system_users.GROUP_ADMIN)
                handleGoTo("/group-admin/dashboard");
            else if (role === system_users.GROUP_DIRECTOR)
                handleGoTo("/group-director/dashboard");
            else if (role === system_users.HOSPITAL_ADMIN)
                handleGoTo("/hospital-admin/dashboard");
            else if (role === system_users.HOSPITAL_DIRECTOR)
                handleGoTo("/hospital-director/dashboard");
            else if (role === system_users.SCHEDULE_MANAGER)
                handleGoTo("/schedule-manager/dashboard");
            else if (role === system_users.APPOINTMENT_MANAGER)
                handleGoTo("/appointment-manager/dashboard");
            else if (role === system_users.DOCTOR)
                handleGoTo("/doctor/dashboard");
            else if (role === system_users.PATIENT)
                handleGoTo("/patient/appointment-dashboard");
            else
                handleGoTo("/404");
        }
        setFormData(FormDummy);
    }

    // Get the current year
  const currentYear = new Date().getFullYear();

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
                    {
                        isModalOpen && (
                            <Modal
                              onClose={()=>console.log('closee....')}
                                showModal={true}
                            >
                                <label>
                                    Which role do you want to login as? <br />
                                </label>
                                {
                                    availableRoles.map((role: any)=>(
                                        <div className='hover:cursor-pointer' key={role.role}>
                                            <input
                                                type='radio'
                                                name='role'
                                                value={role.role}
                                                onChange={(e)=>setSelectedRole(e.target.value)}
                                            /> <label htmlFor="role">{role.role}</label>
                                            <br />
                                        </div>
                                    ))
                                }

                                <button
                                    type='button'
                                    className='btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg btn-secondary'
                                    onClick={continueLogin}
                                >continue</button>

                            </Modal>
                        )
                    }
                    <form className={`px-2 md:px-10 py-5`} method="post" onSubmit={login}>
                        <h1 className='font-bold text-xl'>Login</h1>
                        <div className='pt-8'>
                            <label className='font-normal'>Email or phone <span className='text-red-500 pl-2'>*</span> </label>
                            <div className='py-4'>

                                <div className='flex hover:border-solid  hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                                        <EmailIcon />
                                    </div>
                                    <input value={FormData.email} onChange={(e)=>setFormData({...FormData,email:e.target.value})} className=' place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md  text-backG ' type="text" placeholder="Enter your email or phone" />
                                </div>
                                <small className={`text-[12px] ${!isEmailValid && 'text-red-500'}`}>{!isEmailValid ? "Please enter a valid email or phone" : ""}</small>
                            </div>
                        </div>
                        <div>
                            <label className='font-normal'>Password <span className='text-red-500 pl-2'>*</span> </label>
                            <div className='py-2'>
                                <div className='flex hover:border-solid my-4 hover:border-2 hover:rounded-md duration-500 rounded-md hover:border-backG border-2 border-white'>
                                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                                        <KeyIcon />
                                    </div>
                                    <input value={FormData.password} onChange={(e)=>setFormData({...FormData, password:e.target.value})} className={`place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md text-backG`} type={!showPassword ? "password" : "text"} min={6} placeholder="••••••••••••••••" />
                                    <div className='flex rounded-r-md place-items-center justify-center bg-inputG p-2'>
                                        <button type='button' onClick={() => setShowPasswords((prev) => !prev)}>{!showPassword ? <EyeShowIcon/> : <EyeNoShowIcon/>}</button>
                                    </div>
                                </div>
                                    <small className={`text-[12px] ${!isPassValid && 'text-red-500'}`}>{!isPassValid ? "Please enter a valid password" : ""}</small>
                            </div>
                            <div className='flex -translate-y-2 gap-4'>
                                <input type="checkbox" /><span className='text-[10px] '>Remember Password</span>
                            </div>
                        </div>
                        <div className='pt-6'>
                            <button type='submit' className='py-5 bg-backG text-white w-full font-bold btn ' disabled={!isEmailValid}>Login</button>
                        </div>
                    </form>
                    <div className='px-2 md:px-10 py-2 text-left text-[12px]'>
                        <span>Do not Have an Account?</span> <Link className='text-backG ' href='/auth/signup'>Sign Up </Link>
                    </div>
                </div>
            </div>
    }
        </ForbiddenPage>
    )
}
