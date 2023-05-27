import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import hospitalService from '../../../services/hospital/hospital.service';
import servicesService from '../../../services/services/services.service';
import { notifyError, notifySuccess } from '../../alert';
import { IHospital, IServiceHospitalMap } from '../../../utils/ModalTypes';

const MapHospital = ({ showModal, onClose, id }: { showModal: Boolean, onClose: () => void, id: string }) => {
    const errors: string[] = [];
    const [isBrowser, setBrowser] = useState<Boolean>(false);
    const [FormData, setFormData] = useState<IServiceHospitalMap>({
        hospitalId: '',
        serviceId: ''
    });
    const [HospitalsArr, setHospitalArr] = useState<IHospital[]>([]);
    const authUser = useSelector((state: any) => state.authUser);
    useEffect(() => {
        setBrowser(true);
        async function fetchData() {
            try {
                const data = await hospitalService.getAllHospitals();
                setHospitalArr(data.data);
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
                notifyError(ERROR_MESSAGE);
            }
        }
        fetchData();
    }, [])
    if (!FormData.hospitalId) {
        errors.push("The hospital name is required!");
    }
    if (!FormData.currency) {
        errors.push("The currency is required");
    }
    if (!FormData.fee) {
        errors.push("The fee is required");
    }
    const handleClose = () => {
        onClose();
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const groupId = authUser.user.group.group_id;
            FormData.groupId = groupId;
            FormData.serviceId = id;
            let result = await servicesService.addServiceToHospital(FormData.hospitalId, FormData);
            if (result.status === 200) {
                notifySuccess("Successfully mapped the service to hospital");
                setFormData({
                    hospitalId: '',
                    serviceId: ''
                });
                handleClose();
            }
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Failure, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
        }
    }
    const ModalContent = showModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">

                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG ">Map Hospital </h5>
                        <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} method="post">
                        <div className="modal-body">
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Hospital Name
                                </label>
                                <select onChange={(e) => setFormData({ ...FormData, hospitalId: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <option value=''>Select Hospital</option>
                                    {HospitalsArr && HospitalsArr.map((option: IHospital) => (
                                        <option key={option.hospitalId} value={option.hospitalId}>{option.hospitalName}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='py-1'>
                                <label className="block text-gray-700 text-sm font-bold">
                                    Currency
                                </label>
                                <input onChange={(e) => setFormData({ ...FormData, currency: e.target.value })} value={FormData?.currency} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Current text" />
                            </div>
                            <div className='py-1'>
                                <label className="block text-gray-700 text-sm font-bold">
                                    New Fee
                                </label>
                                <input onChange={(e) => setFormData({ ...FormData, fee: e.target.valueAsNumber })} value={FormData?.fee} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Fee" />
                            </div>
                            {errors.length > 0 && (
                                <div className='py-2'>
                                    <ul>
                                        {errors.map((error: string, index: number) => (
                                            <li key={index + 1} className='flex text-[10px] place-items-center gap-6 text-red-500'>
                                                <span aria-hidden="true">&times;</span><span>{error}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                            <button type="submit" disabled={errors.length > 0 ? true : false} className={`${errors.length > 0 && 'bg-slate-500 cursor-not-allowed'} btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg btn-secondary`} data-dismiss="modal">Map Hospital</button>
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

export default MapHospital
