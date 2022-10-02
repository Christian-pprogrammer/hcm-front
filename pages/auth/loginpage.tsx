import React, {useState, useEffect} from 'react'
import LoginForm from '../../components/Auth/LoginForm'
import {
  DEVICE_DETAILS_LOCAL_STORAGE_KEY,
} from "../../utils/constants";
import RouteService from '../../services/auth/routing'
import { useRouter } from 'next/router';

const Login = () => {
  const Router = useRouter();
  // const SessionRedirect = async () => {
  //   if(sessionStorage.getItem(DEVICE_DETAILS_LOCAL_STORAGE_KEY)){
  //     const RouteRedirect = await RouteService.getPrevRoute() || '/auth/loginpage';
  //     return Router.push(`${RouteRedirect}`);
  //   }
  // }
  
  // const [storageKey, setStorageKey]:any = useState(null);
  // useEffect(()=>{
  //   setStorageKey(sessionStorage.getItem(DEVICE_DETAILS_LOCAL_STORAGE_KEY));
  // }, [])
  return (
    <>
    {/* {!storageKey */}
        {/* // ?  */}
         <LoginForm/>
        {/* //  : SessionRedirect()} */}
    </>
  )
}

export default Login