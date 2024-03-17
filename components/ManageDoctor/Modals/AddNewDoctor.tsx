import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { notifyError, notifySuccess } from '../../alert';
import { IUser, IUserImpl } from '../../../utils/ModalTypes';
import BasicUserInfo from './BasicDoctorInfo';
import AdvancedUserInfo from './AdvancedDoctorInfo';
import { useSelector } from 'react-redux';
import doctorService from '../../../services/users/doctor.service';

const AddNewDoctor = ({ showModal, onClose }: { showModal: Boolean, onClose: () => void }) => {
    const [isBrowser, setBrowser] = useState<Boolean>(false);
    const AuthUser = useSelector((state: any) => state.authUser);
    useEffect(() => {
        setBrowser(true)
    }, [])

    const [FormData, setFormData] = useState<IUser>(IUserImpl)
    const handleClose = () => {
        onClose()
    }
    const [FormPageNumber, setFormPageNumber] = useState<number>(0);
    const PageDisplayForm = () => {
        if (FormPageNumber == 0) {
            return <BasicUserInfo FormData={FormData} setFormData={setFormData} />
        } else {
            return <AdvancedUserInfo FormData={FormData} setFormData={setFormData} />
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
                FormData.hospitalId = AuthUser.user?.hospital?.hospitalId;
                FormData.confirmPassword = FormData.password;
                console.log(FormData);
                let result = await doctorService.createDoctor(FormData);
                if (result.status === 200) {
                    notifySuccess("Successfully created a new doctor");
                    setFormData(IUserImpl);
                    handleClose();
                }

        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.message || "Not Created, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
            console.log(error);
            setFormData(IUserImpl);
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
                        {FormPageNumber == 0 && <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2 text-[14px] btn-secondary" id='bt' data-dismiss="modal" onClick={handleClose}>Cancel</button>
                            <button type="button" className="btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg text-[14px] btn-secondary" id='bt' data-dismiss="modal" onClick={() => setFormPageNumber((prev) => prev + 1)}>Continue</button>
                        </div>
                        }
                        {FormPageNumber == 1 &&
                            <div className="modal-footer flex py-2 gap-2 text-[14px] justify-between">
                                <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2 btn-secondary" data-dismiss="modal" onClick={() => setFormPageNumber(0)}>Previous</button>
                                <button type="submit" className="btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg btn-secondary" data-dismiss="modal">Add Doctor</button>
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

export default AddNewDoctor;
