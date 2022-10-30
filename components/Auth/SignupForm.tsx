import Link from 'next/link'
import React, { useState } from 'react';
import { LineSvg } from '../../icons'
import LocalInfo from './LocalInfo'
import PersonalInfo from './PersonalInfo'
import SignupInfo from './SignupInfo'
import { FormDummy, FormStructure } from '../../utils/FormData'
import AuthService from "../../services/auth/auth.service";
import { useRouter } from 'next/router';
import LoaderCache from '../../pages/loaders/LoaderCache';
import { notifyError, notifySuccess } from '../alert';

const SignupForm = () => {
    const [FormPage, setFormPage] = useState<number>(0);
    const [FormData, setFormData] = useState<FormStructure>(FormDummy);
    const router = useRouter();
    const PageDisplay = () => {
        if (FormPage == 0) {
            return <SignupInfo 
            FormData={FormData}
            setFormData={setFormData}
         />;
        }
        else if (FormPage == 1) {
            return <PersonalInfo 
            FormData={FormData}
            setFormData={setFormData}/>
        }
        else {
            return <LocalInfo  FormData={FormData}
            setFormData={setFormData} />;
        }

    }
    const [loading, setLoading] = useState<Boolean>(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try{
            console.log("The Formdata",FormData)
            const res = await AuthService.signup(FormData);
            if(res.data.status == 200){
                notifySuccess(res.data.message || "Successfully Registered")
                router.push('/auth/login');
                setLoading(false);
            }else{
                notifyError(res.data.message || "Credentials Failed")
                router.reload();
                setFormData(FormDummy);
            }
        }catch(e:any){
            const ERROR_MESSAGE = e.response ? 'Response Error' : e.message;
            setFormData(FormDummy);
            notifyError(ERROR_MESSAGE);
        }
        setLoading(false);
    }
    return (
        <>
        {loading ? <LoaderCache/> : 
        <div className="bg-white h-screen flex-row-reverse flex ">
            <div className="relative overflow-y-hidden md:flex hidden  auth-image">
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
            <div className="bg-white pt-10 md:pt-5 min-w-full md:px-0 px-[4em] md:min-w-[50vw] lg:min-w-1/2 lg:px-20 text-black p-5">
                <div className='flex py-5 md:py-2 flex-col justify-center gap-4 place-items-center'>
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
                        <button className='btn hover:scale-110 duration-300 btn-primary h-14 w-14 text-lg rounded-full bg-backG text-white font-bold' onClick={()=>setFormPage(0)}>1</button>
                    </div>
                    <div className="z-20">
                        <button className={`btn ${FormPage >= 1 && 'bg-backG text-white'} hover:scale-110 hover:bg-backG hover:text-white duration-300 btn-primary h-14 w-14 text-lg rounded-full bg-inputG text-backG font-bold`} onClick={()=>setFormPage(1)}>2</button>
                    </div>
                    <div className="z-20">
                        <button className={`btn hover:scale-110 hover:bg-backG hover:text-white duration-300 btn-primary h-14 w-14 text-lg rounded-full bg-inputG text-backG font-bold1 ${FormPage == 2 && 'bg-backG text-white'}`} onClick={()=>setFormPage(2)}>3</button>
                    </div>
                </div>
                <div className='md:px-10 px-2 py-2 md:py-0'>
                    <h1 className='font-bold text-base'>Sign Up</h1>
                </div>
                <form className={`px-2 md:px-10 `} method="post" onSubmit={handleSubmit}>
                    {PageDisplay()}
                    {FormPage == 0 &&
                        <div className='pt-4'>
                            <button type="button" className='py-5 bg-backG text-white w-full' onClick={() => { setFormPage((prev) => prev + 1) }}>Register</button>
                        </div>
                    }
                    {FormPage == 1 &&
                        <div className='flex gap-6 py-1'>
                            <button type="button" className='py-4 bg-zinc-600 text-white w-full ' onClick={() => { setFormPage((prev) => prev - 1) }}>Previous</button>
                            <button type="button" className='py-4 bg-backG text-white w-full ' onClick={() => { setFormPage((prev) => prev + 1) }}>Next</button>
                        </div>
                    }
                    {FormPage == 2 &&
                        <div className='pt-2'>
                            <button type='submit' className='py-5 bg-backG text-white w-full'>Register</button>
                        </div>
                    }
                </form>
                <div className='px-2 md:px-10  text-left text-[12px]'>
                    <span>Already Have an Account?</span> <Link className='text-backG ' href='/auth/login'>Login </Link>
                </div>
            </div>
        </div>
}
</>
    )
}

export default SignupForm