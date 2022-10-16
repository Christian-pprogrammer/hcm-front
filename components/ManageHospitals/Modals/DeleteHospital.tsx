import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import GroupAdminService from '../../../services/users/group-admin.service';
import superAdminService from '../../../services/users/super-admin.service';

const DeleteHospital = ({ showModal, onClose }: { showModal: Boolean, onClose: any }) => {

    const [isBrowser, setBrowser] = useState<Boolean>(false);
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [alertData, setAlertData] = React.useState({
        alert: false,
        message: "",
        class: "",
    });
    useEffect(() => {
        setBrowser(true)
    }, [])
    const handleClose = () => {
        onClose()
    }

    const handleDeleteHospital = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await GroupAdminService.checkGroupAdminPass(password);
            if (res.data.status == 200) {
                try {
                    setLoading(true)
                    const resdelete = await GroupAdminService.deleteHospitalGroupAdmin("adadf923lasdkuwe");
                    setAlertData({
                        alert: true,
                        message: resdelete.data.message || "Successfuly Deleted the Hospital",
                        class: "green"
                    })
                    setLoading(false);
                    router.reload();
                } catch (error: any) {
                    reportError(error);
                }
            } else {
                setAlertData({
                    alert: true,
                    message: res.data.message || "Password Credential Incorrect",
                    class: "red"
                })
            }
        } catch (error: any) {
            reportError(error);
        }
    }
    const ModalContent = showModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">

                    <div className="modal-header py-10 flex justify-between">
                        <h5 className="modal-title font-bold">Delete Hospital</h5>
                        <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleDeleteHospital} method="post">
                    <div className="modal-bod py-10 text-center">
                        <div className="py-1">
                            <label className="block text-gray-700 text-sm font-bold">
                                Password
                            </label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Input password credentials" />
                            <small className='text-[12px] text-red-500'>Enter Valid info</small>
                        </div>
                        <p>Would you like to remove access the account will remove permanent access to the system.The system will remove the access to the system details and functionalities !!Are you sure you want to delete your account?</p>
                    </div>
                    <div className="modal-footer flex py-2 gap-2  justify-between">
                        <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose} >Close</button>
                        <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">Delete Hospital</button>
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

export default DeleteHospital
