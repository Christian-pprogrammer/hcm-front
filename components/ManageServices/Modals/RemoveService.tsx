import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import servicesService from '../../../services/services/services.service';
import { notifyError, notifySuccess } from '../../alert';

const RemoveService = ({ showModal, onClose ,id } : {showModal: Boolean, onClose: any,id:string}) => {
  const [isBrowser, setBrowser] = useState<Boolean>(false)
  useEffect(() => {
    setBrowser(true)
  }, [])
  const handleClose = () => {
    onClose() 
  }
  const handleClick = async (e :any) => {
    e.preventDefault();
    try{
      let result = await servicesService.removeServiceFromHospital("adfa",id);
      if(result.status === 200){
        notifySuccess("Successfully deleted the service");
        handleClose();
      }
    }catch(error:any){
      const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Created, try again!" : error.error;
      notifyError(ERROR_MESSAGE);
    }
  }
  const ModalContent = showModal ? (
    <div className="modal-portal bg-modalG h-screen w-screen flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
    <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-[30vw]">
      <div className="modal-content">
        <div className="modal-header py-10 flex justify-between">
          <h5 className="modal-title font-bold">Remove Service</h5>
          <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-bod py-10 text-center">
          <p>Would you like to remove access the account will remove permanent access to the system.The system will remove the access to the system details and functionalities !!Are you sure you want to delete your account?</p>
        </div>
        <div className="modal-footer flex py-10 justify-between">
          <button type="button" className="btn bg-slate-500 text-white px-10 py-4 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
          <button type="button" className="btn bg-backG text-white px-10 py-4 btn-secondary" data-dismiss="modal" onClick={handleClick}>Confirm</button>
        </div>
      </div>
    </div>
    </div>
  ) : null
  if (isBrowser) {
    return ReactDOM.createPortal(ModalContent, document.getElementById('modal-root') as HTMLElement)
  } else {
    return null
  }

}

export default RemoveService