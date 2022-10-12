import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import SettingsService from '../../../services/users/Settings.service';
import { NewTemplateArr, NewTemplateInterface } from '../../../utils/ModalTypes';
import { MessageType } from '../../../utils/SelectOptions';

const NewMessageTemplate = ({ NewMessageModal, onClose }: { NewMessageModal: Boolean, onClose: any }) => {
    const [FormData,setFormData] = useState<NewTemplateInterface>(NewTemplateArr);
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    const [loading, setLoading] = React.useState(false);
    const [alertData, setAlertData] = React.useState({
        alert: false,
        message: "",
        class: "",
    });
    useEffect(() => {
        setBrowser(true)
    }, [])
    const handleClose = () => {
        onClose()
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            console.log(FormData);
            const res = await SettingsService.createTemplate(FormData);
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
    const ModalContent = NewMessageModal ? (
        <div className="modal-portal bg-modalG min-h-full w-full px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">
                <div className="modal-content">

                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG ">New Message Template </h5>
                        <div className='flex'>
                            <select className='bg-slate-200 rounded-xl outline-none md:px-6 px-2 text-sm md:text-base py-2' name="international" id="">
                                <option value="EN"> EN</option>
                                <option value="FR"> FR</option>
                                <option value="DE"> DE</option>
                                <option value="RW_rw"> KI</option>
                            </select>
                        </div>
                    </div>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Type Of
                                </label>
                                <select onChange={(e)=>setFormData({...FormData,typeTemplate:e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                                    {MessageType.map((option) =>(
                                    <option key={option.id} value={option.value}>{option.text}</option>
                                    ))}
                                </select>
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Template Message
                                </label>
                                <textarea onChange={(e) =>setFormData({...FormData,description: e.target.value})} value={FormData.description} className="shadow resize-none appearance-none bg-inputG border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Template description Message"></textarea>
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                        </div>
                        <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                            <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">Save Template</button>
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

export default NewMessageTemplate