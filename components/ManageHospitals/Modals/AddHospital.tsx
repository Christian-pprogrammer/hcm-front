import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import hospitalService from '../../../services/hospital/hospital.service';
import { notifyError, notifySuccess } from '../../alert';
import AdvancedInfo from './AdvancedInfo';
import BasicInfo from './BasicInfo';
import { IHospital, IHospitalDummy } from '../../../utils/ModalTypes';

const AddHospital = ({ showModal, onClose }: { showModal: Boolean, onClose: () => void }) => {

    const [isBrowser, setBrowser] = useState<Boolean>(false)
    useEffect(() => {
        setBrowser(true)
    }, [])
    const [FormData, setFormData] = useState<IHospital>(IHospitalDummy);
    const [FormPageNumber, setFormPageNumber] = useState<number>(0);
    const [isValid, setIsValid] = useState<boolean>(false)
    const PageDisplayForm = () => {
        if (FormPageNumber == 0) {
            return <BasicInfo FormData={FormData} setFormData={setFormData} setIsValid={setIsValid} />
        } else {
            return <AdvancedInfo FormData={FormData} setFormData={setFormData} setIsValid={setIsValid} />
        }
    }
    const handleClose = () => {
        onClose()
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log("the formdata:", FormData)
            let result = await hospitalService.createNewHospital(FormData);
            if (result.status === 200) {
                notifySuccess("Successfully Created the Hospital");
                setFormData(IHospitalDummy);
                handleClose();
            }
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Created, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
            setFormData(IHospitalDummy);
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
                        {PageDisplayForm()}
                        {FormPageNumber == 0 &&
                            <div className="modal-footer flex py-2 gap-2 text-[14px] justify-between">
                                <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2 btn-secondary" data-dismiss="modal" onClick={handleClose}>Cancel</button>
                                <button type="button" className="btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg btn-secondary" onClick={() => setFormPageNumber(1)}>Next</button>
                            </div>
                        }
                        {FormPageNumber == 1 &&
                            <div className="modal-footer flex py-2 gap-2 text-[14px] justify-between">
                                <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2 btn-secondary" data-dismiss="modal" onClick={() => setFormPageNumber(0)}>Previous</button>
                                <button type="submit" disabled={!isValid ? true : false} className="btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg btn-secondary" data-dismiss="modal">Add Account</button>
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

export default AddHospital