import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

import { NewPriceInt, NewPriceStructure, PriceArr } from '../../utils/Prices';

const SettingsNewPrice = ({ showModal , onClose}: { showModal: Boolean ,onClose: any}) => {
    
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    const [FormData, setFormData] = useState<NewPriceInt>(NewPriceStructure);
    useEffect(() => {
        setBrowser(true)
    }, [])
    const handleClose = () => {
        onClose() 
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }
    const ModalContent = showModal ? (
        <div className="modal-portal bg-[#0000007d] min-h-full w-full flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow  ">
                <div className="modal-content">

                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG">New Prices</h5>
                        <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className='py-1'>
                                <label className="block text-gray-700 text-sm font-bold">
                                    Select Service
                                </label>
                                <select onChange={(e)=>setFormData({...FormData,serviceName: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    {PriceArr.map((price, i) => (
                                        <option key={i} value={price.serviceName}>{price.serviceName} ${price.servicePrice}</option>
                                    ))}
                                </select>
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                            <div className='py-1'>
                                <label className="block text-gray-700 text-sm font-bold">
                                    New Fee
                                </label>
                                <input onChange={(e) => setFormData({...FormData,fee:e.target.valueAsNumber})} value={FormData?.fee} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Fee" />
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                        </div>
                        <div className="modal-footer flex py-2 gap-2  justify-between">
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose} >Close</button>
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

export default SettingsNewPrice