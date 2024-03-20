import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import servicesService from '../../../services/services/services.service';
import { notifyError, notifySuccess } from '../../alert';
import { INewService, IService } from '../../../utils/Prices';

const NewServices = ({ showModal, onClose }: { showModal: Boolean, onClose: () => void }) => {
    const [isBrowser, setBrowser] = useState<Boolean>(false);
    const [serviceArr, setServiceArr] = useState<IService[]>([]);
    useEffect(() => {
        setBrowser(true)
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
    }, [serviceArr]);
    const [FormData, setFormData] = useState<INewService>({
        serviceName: '',
        service_id: ''
    });
    const authUser = useSelector((state: any) => state.authUser)
    const handleClose = () => {
        onClose();
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let result = await servicesService.createService(FormData);
            console.log("The result:", result);
            if (result.status === 200) {
                notifySuccess("Successfully created the service");
                setFormData({
                    serviceName: '',
                    service_id: ''
                });
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
                                <div className="shadow appearance-none bg-inputG gap-1 border flex rounded w-full h-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    {serviceArr && serviceArr.map((service: IService) => (
                                        <div key={service.service_id} className="bg-backG max-h-6 max-w-2xl px-2 text-white flex flex-col justify-center place-items-center text-[10px] ">
                                            <span>{service.service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    New Services Name
                                </label>
                                <input value={FormData?.serviceName} onChange={(e) => setFormData({ ...FormData, serviceName: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type={'text'} placeholder="Enter your service name " />
                                {FormData?.serviceName === '' ? <small className='text-[12px] text-red-500'>Enter Valid info</small> : ''}
                            </div>
                        </div>
                        <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                            <button type="submit" disabled={!FormData.serviceName ? true : false} className={`${!FormData.serviceName && 'bg-slate-500 cursor-not-allowed'} btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg btn-secondary`} data-dismiss="modal">New Service</button>
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
