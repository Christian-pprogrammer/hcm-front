import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import hospitaladminService from '../../../services/hospital-admin/hospitaladmin.service';
import { IHospitalAdmin, IHospitalAdminDummy } from '../../../utils/ModalTypes';
import { notifyError, notifySuccess } from '../../alert';
import AdvancedInfoAdmin from './AdvancedAdminInfo';
import BasicAdminInfo from './BasicAdminInfo';

const ManageAdminModal = ({ showModal, onClose, id }: { showModal: Boolean, onClose: () => void, id: string }) => {
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    const [FormDataAdmin, setFormDataAdmin] = useState<IHospitalAdmin>(IHospitalAdminDummy);
    const [FormPageNumber, setFormPageNumber] = useState<number>(0);
    const [isValid, setIsValid] = useState<boolean>();

    useEffect(() => {
        setBrowser(true);
    }, [])

    const PageDisplayForm = () => {
      if (FormPageNumber == 0) {
          return <BasicAdminInfo FormDataAdmin={FormDataAdmin} setFormDataAdmin={setFormDataAdmin} />
      } else {
          return <AdvancedInfoAdmin hospId={id} FormDataAdmin={FormDataAdmin} setFormDataAdmin={setFormDataAdmin} />
      }
  }

    const handleClose = () => {
        onClose()
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
          console.log(FormDataAdmin);
            let result = await hospitaladminService.createHospitalAdmin(FormDataAdmin);
            console.log("The result", result)
            if (result.status === 200) {
                notifySuccess("Successfully Created the Hospital Admin");
                setFormDataAdmin(IHospitalAdminDummy);
                handleClose();
            }
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Admin creation failed, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
        }
    }
    const ModalContent = showModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">

                    <div className="modal-header py-5 flex justify-between">
                        <h5 className="modal-title font-bold">New Hospital Admin</h5>
                        <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close" onClick={handleClose}>
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
                                <button type="submit" className="btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg btn-secondary" data-dismiss="modal">Create Admin</button>
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

export default ManageAdminModal
