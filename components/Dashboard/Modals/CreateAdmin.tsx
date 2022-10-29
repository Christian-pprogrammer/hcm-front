import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { NewUserInterface, NewUserData } from '../../../utils/ModalTypes';
import { notifyError, notifySuccess } from '../../alert';
import groupAdminService from '../../../services/users/group-admin.service';
import { GenderOptions, GroupAdminCreate } from '../../../utils/SelectOptions';
import { EyeNoShowIcon, EyeShowIcon, KeyIcon } from '../../../icons';

const CreateAdminAcc = ({ createAdminModal, onClose ,id}: { createAdminModal: Boolean, onClose: any,id:any }) => {
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    const [FormDataAdmin, setFormDataAdmin] = useState<NewUserInterface>(NewUserData);
    const [showPassword,setShowPasswords] = useState<Boolean>(false);
    useEffect(() => {
        setBrowser(true)
    }, [])
    const handleClose = () => {
        onClose()
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(FormDataAdmin);
        try {
            let result = await groupAdminService.createGroupAdmin(id, FormDataAdmin);
            if (result.status === 200) {
                notifySuccess("Successfully Created the Hospitals Admin Holder");
                setFormDataAdmin(NewUserData);
                handleClose();
            }
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Created, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
        }
    }
    const ModalContent = createAdminModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow min-w-[30vw] ">
                <div className="modal-content">
                    <div className="modal-header py-2 flex justify-between">
                        <h5 className="modal-title font-bold text-backG">Create Group Admin</h5>
                        <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className='py-1'>
                                <label className="block text-gray-700 text-sm font-bold">
                                    User Name
                                </label>
                                <input value={FormDataAdmin?.fullName} onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, fullName: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
                                <small className='text-[12px] text-red-500'>{FormDataAdmin.fullName ? "":"Valid info required"}</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Email
                                </label>
                                <input value={FormDataAdmin?.email} onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, email: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                                <small className='text-[12px] text-red-500'>{FormDataAdmin.email ? "":"Valid info required"}</small>
                            </div>
                            <div className='py-1'>
                                <label className="block text-gray-700 text-sm font-bold">
                                    Tel
                                </label>
                                <input onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, mobile: e.target.valueAsNumber })} value={FormDataAdmin?.mobile} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Telephone" />
                                <small className='text-[12px] text-red-500'>{FormDataAdmin.mobile ? "":"Valid info required"}</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Gender Options
                                </label>
                                <select onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, gender: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                                    {GenderOptions.map((option) => (
                                        <option key={option.id} value={option.value}>{option.text}</option>
                                    ))}
                                </select>
                                <small className='text-[12px] text-red-500'>{FormDataAdmin.gender ? "":""}</small>
                            </div>
                            <div className='py-1'>
                            <label className="block text-gray-700 text-sm font-bold">
                                    Password
                                </label>
                                <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md hover:border-backG border-2 border-white'>
                                    <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                                        <KeyIcon />
                                    </div>
                                    <input value={FormDataAdmin.password} onChange={(e)=>setFormDataAdmin({...FormDataAdmin, password:e.target.value})} className={`place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md text-backG`} type={!showPassword ? "password" : "text"} min={6} placeholder="••••••••••••••••" />
                                    <div className='flex rounded-r-md place-items-center justify-center bg-inputG p-2'>
                                        <button type='button' onClick={() => setShowPasswords((prev) => !prev)}>{!showPassword ? <EyeShowIcon/> : <EyeNoShowIcon/>}</button>
                                    </div>
                                </div>
                                <small className='text-[12px] text-red-500'>{FormDataAdmin?.password ? "": "The Password should be provided "}</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Confirm Password
                                </label>
                                <input value={FormDataAdmin?.confirmPassword} onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, confirmPassword: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Input password credentials" />
                                <small className='text-[12px] text-red-500'>{!(FormDataAdmin.confirmPassword == FormDataAdmin.password) ? "The Password Should match the confirm password":""}</small>
                            </div>
                            <div className="py-1">
                                <label className="block text-gray-700 text-sm font-bold">
                                    Role
                                </label>
                                <select onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, role: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                                    {GroupAdminCreate.map((option) => (
                                        <option key={option.id} value={option.value}>{option.text}</option>
                                    ))}
                                </select>
                                <small className='text-[12px] text-red-500'>{FormDataAdmin.role ? "" : "The Role Should be provided"}</small>
                            </div>
                            
                        </div>
                        <div className="modal-footer flex py-2 gap-2  justify-between">
                            <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                            <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal">Create Admin</button>
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

export default CreateAdminAcc