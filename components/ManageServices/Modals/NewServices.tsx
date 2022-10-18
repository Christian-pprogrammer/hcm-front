import Multiselect from 'multiselect-react-dropdown';
import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import ManageService from '../../../pages/group-admin/manage-service';
import ManageServicesService from '../../../services/services/services.service';
import { NewService, NewServiceData } from '../../../utils/ModalTypes';
import { ServicesArr, ServiceStructure } from '../../../utils/Prices';

const NewServices = ({ showModal, onClose }: { showModal: Boolean, onClose: any }) => {
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
    interface SelectedData {
        SelectedService: ServiceStructure;
    }
    const [FormData, setFormData] = useState<NewService>(NewServiceData);
    const handleClose = () => {
        onClose();
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(FormData);
            setLoading(true);
            const res = await ManageServicesService.createService(FormData);
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
                            <h5 className="modal-title font-bold text-backG ">New Services </h5>
                            <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="py-1">
                                    <label className="block text-gray-700 text-sm font-bold">
                                        Services
                                    </label>
                                    <div className="shadow appearance-none bg-inputG gap-1 border flex rounded w-full h-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email">
                                        <div className="bg-backG max-h-6 max-w-2xl px-2 text-white flex flex-col justify-center place-items-center text-[10px] ">
                                            <span>Pediatry</span>
                                        </div>
                                        <div className="bg-backG max-h-6 max-w-2xl px-2 text-white flex flex-col justify-center place-items-center text-[10px] ">
                                            <span>Pediatry</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-1">
                                    <label className="block text-gray-700 text-sm font-bold">
                                        New Services Name
                                    </label>
                                    <input value={FormData?.NewService} onChange={(e) => setFormData({ ...FormData, NewService: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type={'text'} placeholder="Enter your service name " />
                                    <small className='text-[12px] text-red-500'>Enter Valid info</small>
                                </div>
                                <div className="py-1">
                                    <label className="block text-gray-700 text-sm font-bold">
                                        New Service Abbreviation
                                    </label>
                                    <input value={FormData?.NewServiceAbbr} onChange={(e) => setFormData({ ...FormData, NewServiceAbbr: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type={'text'} placeholder="Enter your service Abbr " />
                                    <small className='text-[12px] text-red-500'>Enter Valid info</small>
                                </div>
                                <div className="py-1">
                                    <label className="block text-gray-700 text-sm font-bold">
                                        Issued On
                                    </label>
                                    <input value={FormData?.newlicenseDate} onChange={(e) => setFormData({ ...FormData, newlicenseDate: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date-image" type="date" placeholder="Date" />
                                    <small className='text-[12px] text-red-500'>Enter Valid info</small>
                                </div>
                            </div>
                            <div className="modal-footer flex py-2 gap-2 justify-between">
                                <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                                <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">New Service</button>
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

    export default NewServices
