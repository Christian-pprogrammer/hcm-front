import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import userService from '../../../services/users/user.service';
import { NewUserData, NewUserInterface } from '../../../utils/ModalTypes';
import { notifyError, notifySuccess } from '../../alert';
import AdvanceUserInfo from './AdvanceUserInfo';
import BasicUserInfo from './BasicUserInfo';

const AddNewUser = ({ showModal, onClose }: { showModal: Boolean, onClose: any }) => {
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    useEffect(() => {
        setBrowser(true)
    }, [])
  
    const [FormData, setFormData] = useState<NewUserInterface>(NewUserData)
    const handleClose = () => {
        onClose()
    }
    const [FormPageNumber,setFormPageNumber] = useState<number>(0);
    const PageDisplayForm = () => {
        if(FormPageNumber == 0){
            return <BasicUserInfo FormData={FormData} setFormData={setFormData} />
        }else{
            return <AdvanceUserInfo FormData={FormData} setFormData={setFormData} />
        }
    }
   
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            console.log("The Form Data: ",FormData);
            let result = await userService.create(FormData);
            console.log("The Result",result);
            if(result.status === 200){
              notifySuccess("Successfully Created the Hospital");
              setFormData(NewUserData);
              handleClose();
            }
          }catch(error:any){
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Created, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
            setFormData(NewUserData);
          }
    }
    const ModalContent = showModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">

                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG ">New User Account </h5>
                        <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form method="post" onSubmit={handleSubmit}>
                            {PageDisplayForm()}
                        {FormPageNumber == 0 ? <div className="modal-footer flex py-2 gap-2 justify-between">
                                <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Cancel</button>
                                <button type="button" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={()=>setFormPageNumber((prev)=>prev+1)}>Next</button>
                            </div>:
                            <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={()=>setFormPageNumber(0)}>Previous</button>
                            <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">Add User</button>
                            </div>
                            }
                    </form>
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

export default AddNewUser