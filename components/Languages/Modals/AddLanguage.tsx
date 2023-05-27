import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import LanguageService from '../../../services/users/language.service';
import { ILanguage } from '../../../utils/ModalTypes';
import { notifyError, notifySuccess } from '../../alert';

const AddLanguage = ({ showModal, onClose }: { showModal: boolean, onClose: () => void }) => {
    const [loading, setLoading] = React.useState(false);
    const [alertData, setAlertData] = React.useState({
        alert: false,
        message: "",
        class: "",
    });
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    const [FormData, setFormData] = useState<ILanguage>({
        language_description: '',
        language_name: '',
        language_id: '',
        language_standard_code: ''
    });
    useEffect(() => {
        setBrowser(true)
    }, [])
    const errors: string[] = []
    if (!FormData.language_name) {
        errors.push("The language is required!");
    }
    if (!FormData.language_description) {
        errors.push("The description is required!");
    }
    if (!FormData.language_standard_code) {
        errors.push("The standard code is required!");
    }
    const handleClose = () => {
        onClose()
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await LanguageService.createLanguage(FormData);
            if (res.status === 200) {
                notifySuccess('Successfully created the language.')
                setFormData({
                    language_description: '',
                    language_name: '',
                    language_id: '',
                    language_standard_code: ''
                });
            } else {
                notifyError('Failure check the data.')
                setAlertData({
                    alert: true,
                    message: res.data.error || "Failure Check Provided Credentials",
                    class: "red"
                })
            }
        } catch (error: any) {
            notifyError(error.message)
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
                                <input value={FormData?.language_name} onChange={(e) => setFormData({ ...FormData, language_name: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Language Name" />
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Standard Language Code
                                </label>
                                <input value={FormData?.language_standard_code} onChange={(e) => setFormData({ ...FormData, language_standard_code: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Language Code" />
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Description
                                </label>
                                <textarea onChange={(e) => setFormData({ ...FormData, language_description: e.target.value })} value={FormData?.language_description} className="shadow resize-none appearance-none bg-inputG border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Description Message"></textarea>
                            </div>
                            {errors.length > 0 && (
                                <div className='py-2'>
                                    <ul>
                                        {errors.map((error: string, index: number) => (
                                            <li key={index} className='flex text-[10px] place-items-center gap-6 text-red-500'>
                                                <span aria-hidden="true">&times;</span><span>{error}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="modal-footer flex py-2 text-[14px] gap-2 justify-between">
                            <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                            <button type="submit" className="btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg btn-secondary" data-dismiss="modal">Add Language</button>
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
