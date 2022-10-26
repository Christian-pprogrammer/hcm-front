import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import hospitalService from '../../../services/hospital/hospital.service';
import servicesService from '../../../services/services/services.service';
import ManageServicesService from '../../../services/services/services.service';
import { AddServiceToHospitalDto, AddServiceToHospitalDummy } from '../../../utils/ModalTypes';
import { HospitalValues, MapStatus } from '../../../utils/SelectOptions';
import { notifyError, notifySuccess } from '../../alert';

const MapHospital = ({ showModal, onClose }: { showModal: Boolean, onClose: any }) => {

    const [isBrowser, setBrowser] = useState<Boolean>(false);
    const [FormData, setFormData] = useState<AddServiceToHospitalDto>(AddServiceToHospitalDummy);
    const [HospitalValues, setHospitalValues] = useState<any>(null);
    const authUser = useSelector((state: any) => state.authUser)
    useEffect(() => {
        setBrowser(true);
        async function fetchData() {
            try {
                const data = await hospitalService.getAllHospitals();
                setHospitalValues(data.data);
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
                notifyError(ERROR_MESSAGE);
            }
        }
        fetchData();
    }, [])

    const handleClose = () => {
        onClose();
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const groupId = authUser?.group?.group_id;
            FormData.groupId = groupId;
            console.log("The Formdata", FormData);
            let result = await servicesService.addServiceToHospital(FormData.hospitalId,FormData);
            if (result.status === 200) {
                notifySuccess("Successfully Created the service");
                setFormData(AddServiceToHospitalDummy);
                handleClose();
            }
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Created, try again!" : error.error;
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
                                <select onChange={(e) => setFormData({ ...FormData, hospitalId: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Select your Hospital Name">
                                    {HospitalValues.map((option: any) => (
                                        <option key={option.hospitalId} value={option.hospitalId}>{option.hospitalName}</option>
                                    ))}
                                </select>
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                            <div className='py-1'>
                                <label className="block text-gray-700 text-sm font-bold">
                                    Currency
                                </label>
                                <input onChange={(e) => setFormData({ ...FormData, currency: e.target.value })} value={FormData?.currency} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Current text" />
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                            <div className='py-1'>
                                <label className="block text-gray-700 text-sm font-bold">
                                    New Fee
                                </label>
                                <input onChange={(e) => setFormData({ ...FormData, fee: e.target.valueAsNumber })} value={FormData?.fee} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Fee" />
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                        </div>
                        <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                            <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">Map Hospital</button>
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
