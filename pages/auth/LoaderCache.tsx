import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import {PREV_LINK_LOCAL_STORAGE_KEY} from "../../utils/constants";
import RouteService from '../../services/auth/routing'
const LoaderCache = ({showModal,onClose}:{ showModal: Boolean, onClose: any}) => {
  const [isBrowser, setBrowser] = useState<Boolean>(false)
  useEffect(() => {
    setBrowser(true)
  }, [])
    const Router = useRouter();
    const handleClose = () => {
        console.log("Handle Log Out");
        onClose();
    }
    const SessionRedirect = async () => {
        if(sessionStorage.getItem(PREV_LINK_LOCAL_STORAGE_KEY)){
            const RouteRedirect = RouteService.getPrevRoute() || '/auth/signup';
            Router.push(`${RouteRedirect}`);
            console.log(RouteRedirect);
        }
    }
    useEffect(() => {
        if(sessionStorage.getItem(PREV_LINK_LOCAL_STORAGE_KEY)){
            SessionRedirect
        }else{
            return handleClose();
        };
    })
    const ModalContent = showModal ? (
<div className='h-screen w-scree flex place-items-center justify-center bg-slate-700 left-0 right-0 bottom-0 top-0'>
    <div className="spinner"></div>
</div> ): null;
  if (isBrowser) {
    return ReactDOM.createPortal(ModalContent,document.getElementById('modal-root') as HTMLElement)
  } else {
    return null
  }
}

export default LoaderCache