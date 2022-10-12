import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import LanguageService from '../../../services/users/Language.service';
import { LanguagesData, LanguagesType } from '../../../utils/ModalTypes';

const AddLanguage = ({ showModal, onClose }: { showModal: Boolean, onClose: any }) => {
    const [loading, setLoading] = React.useState(false);
    const [alertData, setAlertData] = React.useState({
        alert: false,
        message: "",
        class: "",
    });
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    const [FormData,setFormData] = useState<LanguagesType>(LanguagesData);
    useEffect(() => {
        setBrowser(true)
    }, [])
    
    const handleClose = () => {
        onClose()
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(FormData);
            setLoading(true);
            const res = await LanguageService.createLanguage(FormData);
            if (res.data.status === 200) {
                setAlertData({
                    alert: true,
                    message: res.data.message || "Successfuly Created the language",
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
                        <h5 className="modal-title font-bold text-backG ">New Language </h5>
                        <button onClick={handleClose} type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="modal-body"> 
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    New Language Name
                                </label>
                                <input value={FormData?.newlanguageName} onChange={(e)=>setFormData({...FormData,newlanguageName: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Language Name" />
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Standart Language Code
                                </label>
                                <input value={FormData?.standardCode} onChange={(e)=>setFormData({...FormData,standardCode: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Language Code" />
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Description
                                </label>
                                <textarea onChange={(e)=>setFormData({...FormData,description: e.target.value})} value={FormData?.description} className="shadow resize-none appearance-none bg-inputG border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Description Message"></textarea>
                                <small className='text-[12px] text-red-500'>Enter Valid info</small>
                            </div>
                        </div>
                        <div className="modal-footer flex py-2 gap-2 justify-between">
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                            <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">Add Language</button>
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

export default AddLanguage