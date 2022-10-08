import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

const ConfirmStep = ({ showConfirm, onClose , children } : {showConfirm: Boolean, onClose: any , children: any}) => {
  const [isBrowser, setBrowser] = useState<Boolean>(false)
  useEffect(() => {
    setBrowser(true)
  }, [])
  const handleClose = () => {
    onClose() 
  }
  const handleClick = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    
  }
  const ModalContent = showConfirm ? (
    <div className="modal-portal bg-modalG h-screen w-screen flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
    <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow  w-[30vw]">
      <div className="modal-content">
        <div className="modal-header py-10 flex justify-between">
          <h5 className="modal-title font-bold">Confirm Step</h5>
          <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-bod py-10 text-center">
          {children}
        </div>
        <div className="modal-footer flex py-10 justify-between">
          <button type="button" className="btn bg-slate-500 text-white px-10 py-4 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
          <button type="button" className="btn bg-backG text-white px-10 py-4 btn-secondary" data-dismiss="modal" onClick={(e)=>handleClick}>Confirm</button>
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

export default ConfirmStep