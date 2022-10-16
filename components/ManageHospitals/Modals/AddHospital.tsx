import Multiselect from 'multiselect-react-dropdown';
import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { AddHospitalData, AddHospitalStructure } from '../../../utils/ModalTypes';
import AdvancedInfo from './AdvancedInfo';
import BasicInfo from './BasicInfo';

const AddHospital = ({ showModal, onClose }: { showModal: Boolean, onClose: any }) => {

    const [isBrowser, setBrowser] = useState<Boolean>(false)
    useEffect(() => {
        setBrowser(true)
    }, [])
    const [FormData,setFormData] = useState<AddHospitalStructure>(AddHospitalData);
    const [FormPageNumber,setFormPageNumber] = useState<number>(0);
    const PageDisplayForm = () => {
        if(FormPageNumber == 0){
            return <BasicInfo FormData={FormData} setFormData={setFormData} />
        }else{
            return <AdvancedInfo FormData={FormData} setFormData={setFormData} />
        }
    }
    const handleClose = () => {
        onClose()
      
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{ 
            
        }catch(e){
            reportError(e);
        }

    }
    const ModalContent = showModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">
                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG ">Add Hospital </h5>
                        <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="modal-body">
                            {PageDisplayForm()}
                        </div>
                        <div className="modal-footer flex py-2 gap-2 justify-between">
                            {FormPageNumber == 0 ? <>
                                <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Cancel</button>
                                <button type="button" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={()=>setFormPageNumber((prev)=>prev+1)}>Next</button>
                            </>:
                            <>
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={()=>setFormPageNumber(0)}>Previous</button>
                            <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">Add Account</button>
                            </>
                            }
                        </div>
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

export default AddHospital