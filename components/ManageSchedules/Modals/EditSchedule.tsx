import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { unixTimeToUsualDate } from "../../../utils/functions";
import { notifyError, notifySuccess } from '../../alert';
import appointmentService from '../../../services/appointments/appointment.service';

interface Payload {
  schedule_id: string;
  date_id: string;
  message: string;
}

const PayloadDummy: Payload = {
  schedule_id: "",
  date_id: "",
  message: ""
}

const EditSchedule = ({ EditModal, onClose, dates, scheduleId }: { EditModal: Boolean, onClose: any, dates: any[], scheduleId: string }) => {
  const errors: string[] = [];
    const [isBrowser, setBrowser] = useState<Boolean>(false);
    const [data, setData] = useState<Payload>(PayloadDummy);

    data.schedule_id = scheduleId;
    if (!data.date_id) {
      errors.push("Select the date!");
    }
    if (!data.message) {
      errors.push("Message should be put!");
    }

    useEffect(() => {

        setBrowser(true)
    }, [errors])

    const handleClose = () => {
        onClose()

    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          let res = await appointmentService.composeMessageForPatients(data);
          if (res.status == 200) {
            notifySuccess("Successfully notified patients");
            setData(PayloadDummy);
            handleClose();
          }
        } catch (error: any) {
      const ERROR_MESSAGE = error.response
        ? error.response?.data?.error || "Messaging patients failed, try again!"
        : error.error;
        notifyError(ERROR_MESSAGE);
        setData(PayloadDummy);
      }
    }
    const ModalContent = EditModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">
                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG ">Compose message to patients </h5>
                        <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">

                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Message
                                </label>
                                <textarea
                                  value={data.message}
                                  onChange={(e) => setData({ ...data, message: e.target.value})}
                                  className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  placeholder="Enter the message to be sent to the patients"
                                ></textarea>
                                {!data.message &&
                                  <small className='text-[12px] text-red-500'>Message should be put!</small>
                                }
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Appointments of date:
                                </label>
                                <select
                                  className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  value={data.date_id}
                                  onChange={(e) => setData({ ...data, date_id: e.target.value })}
                                >
                                  <option value="">Select date</option>
                                  {dates.map((date, index) => (
                                    <option key={index + 1} value={date.date_id}>{unixTimeToUsualDate(date.date)}</option>
                                  ))}
                                </select>
                                {!data.date_id &&
                                  <small className='text-[12px] text-red-500'>Select the date!</small>
                                }
                            </div>

                        </div>
                        <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                            <button type="submit" disabled={errors.length > 0 ? true : false} className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">Send message</button>
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

export default EditSchedule
