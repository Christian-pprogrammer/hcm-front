import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import appointmentService from "../../../services/appointments/appointment.service";
import { notifyError, notifySuccess } from "../../alert";
import { PayAppointment, PayAppointmentImpl } from "../../../utils/ModalTypes";
import FetchDataLoader from "../../loaders/FetchDataLoader";

const MapAppointments = ({
  MapModal,
  onClose,
  appointmentId,
}: {
  MapModal: Boolean;
  onClose: any;
  appointmentId: string;
}) => {
  const [isBrowser, setBrowser] = useState<Boolean>(false);
  const [loading, setLoading] = useState(false);
  const [FormData, setFormData] = useState<PayAppointment>(PayAppointmentImpl);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const errors: string[] = [];

  if (!FormData.phoneNumber || !FormData.phoneNumber.match(/^2507[2389]\d{7}$/)) {
    errors.push("Please provide the real number in the 2507... format to process appointment payment!");
  }
  FormData.appointmentId = appointmentId;

  useEffect(() => {
    setBrowser(true);
  }, []);

  const handleClose = () => {
    if (intervalId) clearInterval(intervalId);
    onClose();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const bookAppintment = await appointmentService.bookAppintment(
        appointmentId
      );
      console.log("Response for booking the appointment", bookAppintment);
      const paymentCreds = await appointmentService.payForAppointment(FormData);
      console.log("Our form data", FormData);
      console.log("Paid for appointment", paymentCreds);

      if (paymentCreds.status === 200) {
        const id = setInterval(async () => {
          try {
            const res = await appointmentService.getPaymentStatus(
              paymentCreds.data.payment_id
            );
            console.log("Payment status: ", res);
            // Check if response is FAILED or SUCCESSFUL
            if (res.data == "FAILED") {
              clearInterval(id);
              setLoading(false); // Stop loading spinner
              notifyError("Booking appointment failed, try again!");
              onClose();
            }
            if (res.data == "SUCCESSFUL") {
              clearInterval(id);
              setLoading(false); // Stop loading spinner
              notifySuccess("Successfully booked an appointment.");
              onClose();
            }
          } catch (error) {
            console.error("Error while checking payment status, try again");
            clearInterval(id);
            setLoading(false);
          }
        }, 30000); // 30 seconds in milliseconds
        // Save interval ID to state
        setIntervalId(id);
      } else {
        notifyError("Booking appointment failed, try again!");
        onClose();
      }
    } catch (error: any) {
      const ERROR_MESSAGE = error.response
        ? error.response?.data?.error ||
          "Appointment booking failed, try again!"
        : error.error;
      notifyError(ERROR_MESSAGE);
      handleClose();
    }
  };

  const ModalContent = MapModal ? (
    <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
      {loading? <FetchDataLoader /> :
      <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
        <div className="modal-content">
          <div className="modal-header py-2 flex justify-between">
            <h5 className="modal-title font-bold text-backG ">
              Book Appointment{" "}
            </h5>
            <button
              onClick={handleClose}
              type="button"
              className="close text-backG hover:scale-125 duration-300 text-xl "
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="py-1">
            <label className="block text-gray-700 text-sm font-bold">
              Pay from mobile:
            </label>
            <input
              value={FormData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...FormData, phoneNumber: e.target.value })
              }
              className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter number to pay from"
            />
          </div>
          {errors.length > 0 && (
            <div className="py-2">
              <ul>
                {errors.map((error: string, index: number) => (
                  <li
                    key={index}
                    className="flex text-[10px] place-items-center gap-6 text-red-500"
                  >
                    <span aria-hidden="true">&times;</span>
                    <span>{error}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="modal-footer flex py-2 gap-2 justify-between">
              <button
                type="button"
                className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary"
                data-dismiss="modal"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="button"
                className={`${errors.length > 0 && ' cursor-not-allowed bg-blue-300'} btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary`}
                data-dismiss="modal"
                onClick={handleSubmit}
                disabled={errors.length > 0}
              >
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
}
    </div>
  ) : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      ModalContent,
      document.getElementById("modal-root") as HTMLElement
    );
  } else {
    return null;
  }
};

export default MapAppointments;
