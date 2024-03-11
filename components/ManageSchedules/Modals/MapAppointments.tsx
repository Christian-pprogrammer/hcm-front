import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import appointmentService from '../../../services/appointments/appointment.service';
import { notifyError, notifySuccess } from '../../alert';

const MapAppointments = ({ MapModal, onClose, appointmentId }: { MapModal: Boolean, onClose: any, appointmentId: string }) => {

    const [isBrowser, setBrowser] = useState<Boolean>(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setBrowser(true)
    }, []);

    const handleClose = () => {
        onClose()

    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
          setLoading(true);
          const res = await appointmentService.bookAppintment(appointmentId);
          if (res.status === 200) {
              notifySuccess('Successfully booked an appointment.');
          }
      } catch (error: any) {
          const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Appointment booking failed, try again!" : error.error;
          notifyError(ERROR_MESSAGE);
      }
      onClose();
    }


    const ModalContent = MapModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">
                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG ">Book Appointment </h5>
                        <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                            <button type="button" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleSubmit}>Book Appointment</button>
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

export default MapAppointments
