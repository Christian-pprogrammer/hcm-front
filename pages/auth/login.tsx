import React, {useState, useEffect} from 'react'
import LoginForm from '../../components/Auth/LoginForm'
import {
  DEVICE_DETAILS_LOCAL_STORAGE_KEY,
} from "../../utils/constants";

import LoaderCache from './LoaderCache';

const Login = () => {
  const [showLoaderModal,setShowLoaderModal] = useState(false);
  const [storageKey, setStorageKey]:any = useState();
  useEffect(()=>{
    setStorageKey(sessionStorage.getItem(DEVICE_DETAILS_LOCAL_STORAGE_KEY));
    setShowLoaderModal(true);
  }, [])
  return (
    <>
    {!storageKey
        ? 
         <LoginForm/>
         :
         <LoaderCache showModal={showLoaderModal} onClose={()=>{setShowLoaderModal(false)}}/>
         }
    </>
  )
}

export default Login