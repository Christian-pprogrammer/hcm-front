import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import scheduleService from '../../../services/schedules/schedule.service';
import AdvancedScheduleInfo from './AdvancedScheduleInfo';
import BasicScheduleInfo from './BasicScheduleInfo';
import { ISchedule } from '../../../utils/ModalTypes';
import { notifyError, notifySuccess } from '../../alert';
import { useSelector } from 'react-redux';

const NewSchedule = ({ NewScheduleModal, onClose }: { NewScheduleModal: boolean, onClose: () => void }) => {
    const [loading, setLoading] = React.useState(false);
    const [isBrowser, setBrowser] = useState<boolean>(false);
    const [FormData, setFormData] = useState<ISchedule>({});
    const authUser = useSelector((state: any) => state.authUser);
    const hospitalId = authUser.user.hospital.hospitalId;
    useEffect(() => {
        setBrowser(true)
    }, [])

    const handleClose = () => {
        onClose();
    }
    const [FormPageNumber, setFormPageNumber] = useState<number>(0);
    const PageDisplayForm = () => {
        if (FormPageNumber == 0) {
            return <BasicScheduleInfo FormData={FormData} setFormData={setFormData} />
        } else {
            return <AdvancedScheduleInfo FormData={FormData} setFormData={setFormData} />
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            FormData.hospital_id = hospitalId;
            console.log(FormData);
            const res = await scheduleService.createSchedule(FormData);
            if (res.status === 200) {
                notifySuccess('Successfully created the schedule.')
                setFormData({});
            }
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Created, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
            setFormData({});
        }
        onClose();
    }
    const ModalContent = NewScheduleModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">
                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG ">New Schedule </h5>
                        <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form method="post" onSubmit={handleSubmit}>
                        {PageDisplayForm()}
                        {FormPageNumber == 0 && <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2 text-[14px] btn-secondary" id='bt' onClick={handleClose}>Cancel</button>
                            <button type="button" className="btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg text-[14px] btn-secondary" id='bt' onClick={() => setFormPageNumber((prev) => prev + 1)}>Continue</button>
                        </div>
                        }
                        {FormPageNumber == 1 &&
                            <div className="modal-footer flex py-2 gap-2 text-[14px] justify-between">
                                <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2 btn-secondary" onClick={() => setFormPageNumber(0)}>Previous</button>
                                <button type="submit" className="btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg btn-secondary">Create Schedule</button>
                            </div>
                        }
                    </form>
                </div>
            </div >
        </div >
    ) : null
    if (isBrowser) {
        return ReactDOM.createPortal(ModalContent, document.getElementById('modal-root') as HTMLElement)
    } else {
        return null
    }

}

export default NewSchedule
