import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { notifyError, notifySuccess } from '../../alert';
import groupAdminService from '../../../services/users/group-admin.service';
import BasicInfoAdmin from './BasicInfoAdmin';
import AdvancedInfoAdmin from './AdvancedInfoAdmin';
import { IUser, IUserImpl } from '../../../utils/ModalTypes';

const CreateAdminAcc = ({ createAdminModal, onClose, id }: { createAdminModal: Boolean, onClose: () => void, id: string }) => {
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    const [FormDataAdmin, setFormDataAdmin] = useState<IUser>(IUserImpl);
    const [FormPageNumber, setFormPageNumber] = useState<number>(0);
    const [isValid, setIsValid] = useState<boolean>(true)
    const PageDisplayForm = () => {
        if (FormPageNumber == 0) {
            return <AdvancedInfoAdmin FormDataAdmin={FormDataAdmin} setFormDataAdmin={setFormDataAdmin} setIsValid={setIsValid} />
        } else {
            return <BasicInfoAdmin FormDataAdmin={FormDataAdmin} setFormDataAdmin={setFormDataAdmin} />
        }
    }
    useEffect(() => {
        setBrowser(true)
    }, [])
    const handleClose = () => {
        onClose()
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let result = await groupAdminService.createGroupAdmin(id, FormDataAdmin);
            if (result.status === 200) {
                notifySuccess("Successfully Created the Hospitals Admin Holder");
                setFormDataAdmin(IUserImpl);
                handleClose();
            }
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Created, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
        }
    }
    const ModalContent = createAdminModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow min-w-[30vw] ">
                <div className="modal-content">
                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG">Create Group Admin</h5>
                        <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
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
                                <button type="submit" disabled={isValid ? true : false} className={`${isValid && ' cursor-not-allowed bg-slate-500'} btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg btn-secondary`} data-dismiss="modal">Create Admin</button>
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

export default CreateAdminAcc