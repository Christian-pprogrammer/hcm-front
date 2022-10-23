import * as ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';

const WelcomeLoader = () => {
  const [isBrowser, setBrowser] = useState<Boolean>(false)
  useEffect(() => {
    setBrowser(true)
  }, [])
  
  return (
    <div className="modal-portal bg-modalG h-screen w-screen flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
    <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow  w-[30vw]">
      <div className="modal-content">
        <div className="modal-header py-10 flex justify-between">
          <h5 className="modal-title font-bold">Welcome To HCM System</h5>
          <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-bod py-10 text-center">
          <p>
            Welcome to the HCM Appointment System . Communities and health systems strengthening with advanced booking technologies. Feel free to explore different features around the system privilegse.
          </p>
        </div>
        <div className="modal-footer flex py-10 justify-between">
          <button type="button" className="btn bg-slate-500 text-white px-10 py-4 btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" className="btn bg-backG text-white px-10 py-4 btn-secondary" data-dismiss="modal">Continue</button>
        </div>
      </div>
    </div>
    </div>
  ) 
}

export default WelcomeLoader