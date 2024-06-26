import Link from 'next/link'
import React, { useState } from 'react';
import { LineSvg } from '../../icons'
import { FormDummy, FormStructure } from '../../utils/FormData'
import AuthService from "../../services/auth/auth.service";
import { useRouter } from 'next/router';
import LoaderCache from '../../components/loaders/LoaderCache';
import { notifyError, notifySuccess } from '../../components/alert';
import SignupInfo from '../../components/Auth/SignupInfo';
import PersonalInfo from '../../components/Auth/PersonalInfo';
import LocalInfo from '../../components/Auth/LocalInfo';
import Image from 'next/image';
import { emailValidation } from '../../utils/functions';

const Signup = () => {
    const [FormPage, setFormPage] = useState<number>(0);
    const [FormData, setFormData] = useState<FormStructure>(FormDummy);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [enRegBtn, setEnRegBtn] = useState<boolean>(false);
    const router = useRouter();

    const PageDisplay = () => {
        if (FormPage == 0) {
            return <SignupInfo
            FormData={FormData}
            setFormData={setFormData}
            onValidityChange={handleValidity}
         />;
        }
        else if(FormPage == 1) {
            return <PersonalInfo
            FormData={FormData}
            setFormData={setFormData}
            onValidityChange={handleValidity}
              />
        }else{
            return <LocalInfo
                FormData={FormData}
                setFormData={setFormData}
                onValidityChange={handleValidity}
            />
        }

    }

    const handleValidity = (state: boolean) => {
      setIsValid(state);
      (!FormData.fullName || !FormData.password.match(/^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*()\-+=.,?])^.{8,30}$/) || !emailValidation(FormData.email) || FormData.mobile.length != 9 || !FormData.province || !FormData.district || !FormData.sector) ? setEnRegBtn(false) : setEnRegBtn(true);
    }

    const [loading, setLoading] = useState<Boolean>(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try{
            // console.log("The Formdata",FormData)
            const res = await AuthService.signup(FormData);

            // console.log(res.status);

            if(res.status == 200){
                notifySuccess(res.data.message || "Successfully Registered")
                localStorage.setItem('verification-email', FormData.email)
                router.push('/auth/verification');
                setLoading(false);
            }
        }catch(e:any){
            const ERROR_MESSAGE = e.response ? e.response?.data?.message : e.message;
            notifyError(ERROR_MESSAGE);
            if(ERROR_MESSAGE == "Email already registered") {
                setFormPage(0);
            }
        }
        setLoading(false);
        // console.log("form data after loading", FormData);
    }

    // Get the current year
  const currentYear = new Date().getFullYear();
    return (
        <>
        {loading ? <LoaderCache/> :
        <div className="bg-white h-screen flex-row-reverse flex ">
            <div className="relative overflow-y-hidden md:flex hidden  auth-image">
                <div className="absolute text-[12px] flex gap-4 top-0 p-5">
                    <div className=' flex justify-center place-items-center rounded-full '>
                    <Image className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="/favicon_io/logo.png" alt="" width="64" height="64"/>
                    </div>
                    <div className=' justify-center'>
                        <h1 className='text-xl font-semibold '>HCM Corp</h1>
                        <p className='text-[#ffffffb3] text-[12px]'>HCM Appointment Status</p>
                        <span className='text-[#ffffffb3] text-[12px]'>{currentYear}</span>
                    </div>
                </div>
                <div className='flex flex-col justify-center align-middle place-content-center  w-full text-center font-bold text-7xl place-items-center'>
                    <h1>HCM Appointment System</h1>
                </div>
                <div className='flex left-[25vw] absolute bottom-2 text-[white]'>
                    <p>Copyright @ {currentYear} - International UN </p>
                </div>
            </div>
            <div className="bg-white pt-10 md:pt-5 min-w-full md:px-0 px-[4em] md:min-w-[50vw] lg:min-w-1/2 lg:px-20 text-black p-5">
                <div className='flex py-5 md:py-2 flex-col justify-center gap-4 place-items-center'>
                    <div className=' flex justify-center place-items-center rounded-full bg-white'>
                    <Image className='h-12 w-12 rounded-full p-0 bg-white object-cover' src="/favicon_io/logo.png" alt="" width="64" height="64"/>
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
                        <button className={`btn hover:scale-110 duration-300 btn-primary h-14 w-14 text-lg rounded-full ${FormPage == 0 ? 'bg-backG text-white font-bold' : 'bg-inputG text-backG font-bold' } `} onClick={()=>setFormPage(0)}>1</button>
                    </div>
                    <div className="z-20">
                        <button className={`btn hover:scale-110 duration-300 btn-primary h-14 w-14 text-lg rounded-full ${FormPage == 1 ? 'bg-backG text-white font-bold' : 'bg-inputG text-backG font-bold' } `} onClick={()=>setFormPage(1)}>2</button>
                    </div>
                    <div className="z-20">
                        <button className={`btn hover:scale-110 duration-300 btn-primary h-14 w-14 text-lg rounded-full ${FormPage == 2 ? 'bg-backG text-white font-bold' : 'bg-inputG text-backG font-bold' } `} onClick={()=>setFormPage(2)}>3</button>
                    </div>
                </div>
                <div className='md:px-10 px-2 py-2 md:py-0'>
                    <h1 className='font-bold text-base'>Sign Up</h1>
                </div>
                <form className={`px-2 md:px-10 `} method="post" onSubmit={handleSubmit}>
                    {PageDisplay()}
                    {(FormPage == 0 || FormPage == 1)&&
                        <div className='flex gap-6 py-1'>
                            <button type="button" className='py-4 bg-zinc-600 text-white w-full ' onClick={() => { setFormPage((prev) => prev - 1) }}>Previous</button>
                            <button type="button" className='py-4 bg-backG text-white w-full ' onClick={() => { setFormPage((prev) => prev + 1) }}>Next</button>
                        </div>
                    }
                    {FormPage == 2 &&
                        <div className='flex gap-6 py-1'>
                          <button type="button" className='py-4 bg-zinc-600 text-white w-full ' onClick={() => { setFormPage((prev) => prev - 1) }}>Previous</button>
                            <button type='submit' className={`py-4 bg-backG text-white w-full ${!enRegBtn && 'opacity-50 cursor-not-allowed'}`} disabled={!enRegBtn}>Register</button>
                        </div>
                    }
                </form>
                <div className='px-2 md:px-10  text-left text-[12px]'>
                <Link className='text-backG ' href='/auth/login'>Already Have an Account? Login </Link>
                </div>
            </div>
        </div>
}
</>
    )
}

export default Signup
