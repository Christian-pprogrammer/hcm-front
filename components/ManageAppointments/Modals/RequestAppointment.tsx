import Multiselect from 'multiselect-react-dropdown';
import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { LineSvg } from '../../../icons';
import AppointmentService from '../../../services/appointments/appointment.service';
import { PatientInterface, PatientInterfaceData } from '../../../utils/ModalTypes';
import ConfirmRequestModal from './ConfirmRequestModal';
import PersonalInfo from './PersonalInfo'
import TransactionModeInfo from './TransactionModeInfo'

const RequestAppointment = ({ showModal, onClose }: { showModal: Boolean, onClose: any }) => {
    const [loading, setLoading] = React.useState(false);
    const [alertData, setAlertData] = React.useState({
        alert: false,
        message: "",
        class: "",
    });
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    useEffect(() => {
        setBrowser(true)
    }, []);
    const [FormData,setFormData] = useState<PatientInterface>(PatientInterfaceData);
    const [FormPageNumber,setFormPageNumber] = useState<number>(0)
    const PageDisplayForm = () => {
        if(FormPageNumber == 0){
            return <PersonalInfo  FormData={FormData} setFormData={setFormData}/>
        }else if(FormPageNumber == 1){
            return <TransactionModeInfo FormData={FormData} setFormData={setFormData}/>
        }
        else{
            return <ConfirmRequestModal/>
        }
    }
    const handleClose = () => {
        onClose()

    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await AppointmentService.createAppointment("kjadh129aklsd12k" /* this should be changed into real appointment id */,FormData);
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
    const ModalContent = showModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">

                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG ">Request Appointment </h5>
                        <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className='flex py-2 justify-center place-items-center gap-6'>
                    <div className='fixed flex justify-center  place-items-center'>
                        <LineSvg />
                    </div>
                    <div className="z-20">
                        <button className='btn hover:scale-110 duration-300 btn-primary h-14 w-14 text-lg rounded-full bg-backG text-white font-bold' onClick={()=>setFormPageNumber(0)}>1</button>
                    </div>
                    <div className="z-20">
                        <button className={`btn ${FormPageNumber >= 1 && 'bg-backG text-white'} hover:scale-110 hover:bg-backG hover:text-white duration-300 btn-primary h-14 w-14 text-lg rounded-full bg-inputG text-backG font-bold`} onClick={()=>setFormPageNumber(1)}>2</button>
                    </div>
                    <div className="z-20">
                        <button className={`btn hover:scale-110 hover:bg-backG hover:text-white duration-300 btn-primary h-14 w-14 text-lg rounded-full bg-inputG text-backG font-bold1 ${FormPageNumber == 2 && 'bg-backG text-white'}`} onClick={()=>setFormPageNumber(2)}>3</button>
                    </div>
                </div>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="modal-body">
                            {PageDisplayForm()}
                        </div>
                        <div className="modal-footer flex py-2 gap-2 justify-between">
                            {FormPageNumber == 0 && <>
                                <button  type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Cancel</button>
                                <button type="button" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={()=>setFormPageNumber((prev)=>prev+1)}>Next</button>
                            </>
                            }
                            {FormPageNumber == 1 &&
                            <>
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={()=>setFormPageNumber(0)}>Previous</button>
                            <button type="button" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={()=>setFormPageNumber((prev)=>prev+1)}>Next</button>
                            </>
                            }
                            {FormPageNumber ==2 &&
                            <>
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={()=>setFormPageNumber((prev)=>prev-1)}>Previous</button>
                            <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">Confirm</button>
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

export default RequestAppointment
