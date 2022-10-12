import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { FaCross } from 'react-icons/fa';

const ViewMessage = ({ showMessage, onClose, children }: { showMessage: Boolean, onClose: any, children: any }) => {
    const [isBrowser, setBrowser] = useState<Boolean>(false)
    useEffect(() => {
        setBrowser(true)
    }, [])
    const handleClose = () => {
        onClose()
    }
    const handleClick = (e: any) => {
        e.preventDefault();
    }
    const ModalContent = showMessage ? (
        <div className="modal-portal bg-modalG min-h-full w-full px-5 flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw]">          
                <div className="modal-content">
                    <div className="modal-header py-10 flex justify-between">
                        <h5 className="modal-title font-bold">View Step</h5>
                        <div className='flex'>
                            <select className='bg-slate-200 rounded-xl outline-none md:px-6 px-2 text-sm md:text-base py-2' name="international" id="">
                                <option value="EN"> EN</option>
                                <option value="FR"> FR</option>
                                <option value="DE"> DE</option>
                                <option value="RW_rw"> KI</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-body py-5 text-center">
                        {children}
                    </div>
                    <div className="modal-footer flex justify-center py-10 ">
                        <button type="button" className="btn bg-backG text-white p-4 py-2 btn-secondary rounded-full duration-400 hover:bg-slate-500 hover:scale-125" data-dismiss="modal" onClick={handleClose}> <span aria-hidden="true">&times;</span></button>
                    </div>
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

export default ViewMessage