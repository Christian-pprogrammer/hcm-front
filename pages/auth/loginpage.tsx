import React from 'react'
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
  //     const RouteRedirect = await RouteService.getPrevRoute();
  //     if(RouteRedirect == null){
  //       Router.push('/auth/loginpage');
  //     }
  //     return Router.push(`${RouteRedirect}`);
  //   }
  // }
  return (
    <>
    {/* {!sessionStorage.getItem(DEVICE_DETAILS_LOCAL_STORAGE_KEY) */}
        {/* ?  */}
         <LoginForm/> 
         {/* : SessionRedirect()} */}
    </>
  )
}

export default Login