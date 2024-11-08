import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import SettingsService from '../../../services/settings/Settings.service';
import { NewPriceInt, NewPriceStructure, PriceArr, PriceStructure } from '../../../utils/Prices';

const ChangeServiceFee = ({ showModal, onClose }: { showModal: Boolean, onClose: any }) => {

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
        SelectedService: PriceStructure;
    }
    const [FormData, setFormData] = useState<NewPriceInt>(NewPriceStructure);
    const handleClose = () => {
        onClose();
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            // console.log(FormData);
            const res = await SettingsService.createFee(FormData);
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
        <div className="modal-portal bg-modalG min-h-full w-full px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">

                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG ">Modify Fee </h5>
                        <div className='flex'>
                            <select className='bg-slate-200 rounded-xl outline-none md:px-6 px-2 text-sm md:text-base py-2' name="international" id="">
                                <option value="EN"> EN</option>
                                <option value="FR"> FR</option>
                                <option value="DE"> DE</option>
                                <option value="RW_rw"> KI</option>
                            </select>
                        </div>
                    </div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className="modal-body">
                        <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Service
                                </label>
                                <select onChange={(e)=>setFormData({...FormData,serviceName: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    {PriceArr.map((price, i) => (
                                        <option key={i} value={price.serviceName}>{price.serviceName} ${price.servicePrice}</option>
                                    ))}
                                </select>
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Cost
                                </label>
                                <input onChange={(e) => setFormData({...FormData,fee:e.target.valueAsNumber})} value={FormData?.fee} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="USD" />
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    New Cost
                                </label>
                                <input onChange={(e) => setFormData({...FormData,newfee:e.target.valueAsNumber})} value={FormData?.newfee} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="USD" />
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                        </div>
                        <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                            <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">Change Fee</button>
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

export default ChangeServiceFee
