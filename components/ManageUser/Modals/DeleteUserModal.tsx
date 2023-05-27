import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

const DeleteUserModal = ({ showModal, onClose }: { showModal: Boolean, onClose: () => void }) => {

    const [isBrowser, setBrowser] = useState<Boolean>(false)
    useEffect(() => {
        setBrowser(true)
    }, [])
    const handleClose = () => {
        onClose()
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const ModalContent = showModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">
                    <div className="modal-header pt-4 flex justify-between">
                        <h5 className="modal-title font-bold">Restrict User</h5>
                        <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="modal-body text-[#000000b3] py-5 font-bold text-center">
                            <p>Would you like to remove access the account will remove permanent access to the system.The system will remove the access to the system details and functionalities !!Are you sure you want to delete your account?</p>
                        </div>
                    </form>
                    <div className="modal-footer flex py-2 gap-2  justify-between">
                        <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2 btn-secondary" data-dismiss="modal" onClick={handleClose} >Close</button>
                        <button type="submit" className="btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg btn-secondary" data-dismiss="modal">Restrict User</button>
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

export default DeleteUserModal