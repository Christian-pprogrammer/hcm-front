import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import servicesService from '../../../services/services/services.service';
import { NewService, NewServiceDummy } from '../../../utils/ModalTypes';
import { notifyError, notifySuccess } from '../../alert';

const NewServices = ({ showModal, onClose }: { showModal: Boolean, onClose: any }) => {
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    useEffect(() => {
        setBrowser(true)
    }, []);
    const [FormData, setFormData] = useState<NewService>(NewServiceDummy);
    const authUser = useSelector((state: any) => state.authUser)
    const handleClose = () => {
        onClose();
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            console.log("The Formdata",FormData);
            const groupId = authUser?.user?.group?.group_id;
            console.log("The GroupId:", groupId);
            let result = await servicesService.createService(FormData);
            if(result.status === 200){
              notifySuccess("Successfully Created the service");
              setFormData(NewServiceDummy);
              handleClose();
            }
          }catch(error:any){
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Created, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
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
                                    <input value={FormData?.service} onChange={(e) => setFormData({ ...FormData, service: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type={'text'} placeholder="Enter your service name " />
                                    {FormData?.service === "" ? <small className='text-[12px] text-red-500'>Enter Valid info</small> : ""}
                                </div>
                                <div className="py-1">
                                    <label className="block text-gray-700 text-sm font-bold">
                                        New Service Abbreviation
                                    </label>
                                    <input value={FormData?.serviceAbbr} onChange={(e) => setFormData({ ...FormData, serviceAbbr: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type={'text'} placeholder="Enter your service Abbr " />
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
