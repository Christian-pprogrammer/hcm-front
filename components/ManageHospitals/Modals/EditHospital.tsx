import Multiselect from 'multiselect-react-dropdown';
import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { IService } from '../../../utils/Prices';
import servicesService from '../../../services/services/services.service';
import { notifyError } from '../../alert';

const EditHospital = ({ EditModal, onClose }: { EditModal: Boolean, onClose: () => void }) => {

    const [isBrowser, setBrowser] = useState<Boolean>(false)
    const [servicesArr, setServiceArr] = useState<IService[]>([]);
    useEffect(() => {
        setBrowser(true)
    }, [])
    interface SelectedData {
        SelectedServiceName: string;
    }
    const [selectData, setSelectData] = useState<SelectedData[]>([])
    async function fetchData() {
        try {
            const data = await servicesService.getAllServices();
            setServiceArr(data.data);
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
        }
    }
    fetchData()
    // const handleOnServiceSelect = (selectedServices: SelectedData[]) => {
    //     setSelectData(selectedServices);
    //     const serviceNames = selectedServices.map(service => service.SelectedServiceName);
    //     setFormData({ ...FormData, services: serviceNames });
    // }
    const handleClose = () => {
        onClose()

    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }
    const ModalContent = EditModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">

                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG ">Edit Hospital </h5>
                        <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Email
                                </label>
                                <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Services
                                </label>
                                <Multiselect loading={false} options={servicesArr} displayValue={"ServiceName"} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" placeholder="Select " />
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    New Services / Map Services
                                </label>
                                <Multiselect onSelect={(e) => setSelectData(e)} loading={false} options={servicesArr} displayValue={"ServiceName"} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" placeholder="Select " />
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    New License Expiration
                                </label>
                                <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date-image" type="date" placeholder="Date" />
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                        </div>
                        <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                            <button type="button" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleSubmit}>Save</button>
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

export default EditHospital