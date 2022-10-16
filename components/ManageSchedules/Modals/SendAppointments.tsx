import Multiselect from 'multiselect-react-dropdown';
import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import ManageAppointmentsService from '../../../services/users/ManageAppointments.service';
import { SendAppointmentDataArr, SendAppointmentInterface } from '../../../utils/ModalTypes';
import { ServicesArr, ServiceStructure } from '../../../utils/Prices';
import AdvancedSendInfo from './AdvancedSendInfo';
import BasicSendInfo from './BasicSendInfo';

const SendAppointments = ({ SendAppModal, onClose }: { SendAppModal: Boolean, onClose: any }) => {
    const [loading, setLoading] = React.useState(false);
    const [alertData, setAlertData] = React.useState({
        alert: false,
        message: "",
        class: "",
    });
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    useEffect(() => {
        setBrowser(true)
    }, [])
    interface SelectedData{
        SelectedService : ServiceStructure;
    }
    const [selectData,setSelectData] = useState<SelectedData[]>([])
    const [FormData,setFormData] = useState<SendAppointmentInterface>(SendAppointmentDataArr);
    const [FormPageNumber,setFormPageNumber] = useState<number>(0);
    const PageDisplayForm = () => {
        if(FormPageNumber == 0){
            return <BasicSendInfo FormData={FormData} setFormData={setFormData} />
        }else{
            return <AdvancedSendInfo FormData={FormData} setFormData={setFormData} />
        }
    }
    const handleClose = () => {
        onClose()
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(FormData);
            setLoading(true);
            const res = await ManageAppointmentsService.sendAppointments(FormData);
            if (res.data.status === 200) {
                setAlertData({
                    alert: true,
                    message: res.data.message || "Successfuly Created the service",
                    class: "green"
                });
            } else {
                setAlertData({
                    alert: true,
                    message: res.data.error || "Failure Check Provided Credentials",
                    class: "red"
                })
            }
        }catch(error) {
            reportError(error);
        }
    }
    const ModalContent = SendAppModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">
                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG ">Send Appointment</h5>
                        <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
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
                            <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">Send Appointment</button>
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

export default SendAppointments