import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

const EditAccount = ({ EditModal, onClose } : {EditModal: Boolean, onClose: any}) => {
  const [isBrowser, setBrowser] = useState<Boolean>(false)
  useEffect(() => {
    setBrowser(true)
  }, [])
  const handleClose = () => {
    onClose() 
  }
  const handleSubmit = (e :any) => {
    e.preventDefault();
  }
  const ModalContent = EditModal ? (
    <div className="modal-portal bg-modalG h-screen w-screen flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
    <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow-lg">
      <div className="modal-content">
        <div className="modal-header py-2 flex justify-between">
          <h5 className="modal-title font-bold text-backG">Edit Account</h5>
          <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="modal-body">
          <div className='py-1'>
            <label className="block text-gray-700 text-sm font-bold">
                Username
            </label>
            <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            <small className='text-[12px] text-red-500'>Enter Valid info</small>
          </div>
          <div className="py-1">
            <label className="block text-gray-700 text-sm font-bold">
                Email
            </label>
            <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
            <small className='text-[12px] text-red-500'>Enter Valid info</small>
          </div>
          <div className="py-1">
            <label className="block text-gray-700 text-sm font-bold">
                Password
            </label>
            <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
            <small className='text-[12px] text-red-500'>Enter Valid info</small>
          </div>
          <div className="py-1">
            <label className="block text-gray-700 text-sm font-bold">
                New License Date
            </label>
            <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="Date" />
            <small className='text-[12px] text-red-500'>Enter Valid info</small>
          </div>
          <div className="py-1">
            <label className="block text-gray-700 text-sm font-bold">
                Profile Image
            </label>
            <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="file-image" type="file" placeholder="Password" />
            <small className='text-[12px] text-red-500'>Enter Valid info</small>
          </div>
        </div>
        <div className="modal-footer flex py-2  justify-between">
          <button type="button" className="btn bg-slate-500 text-white px-10 py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
          <button type="button" className="btn bg-backG text-white px-10 py-3 btn-secondary" data-dismiss="modal" onClick={handleSubmit}>Save</button>
        </div>
        </form>
      </div>
    </div>
    </div>
  ) : null
  if (isBrowser) {
    return ReactDOM.createPortal(ModalContent,document.getElementById('modal-root') as HTMLElement)
  } else {
    return null
  }

}

export default EditAccount