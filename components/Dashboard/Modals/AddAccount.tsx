import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { IGroup } from '../../../utils/ModalTypes';
import { LoaderIcon } from '../../../icons/index';
import groupService from '../../../services/group/group.service';
import { notifyError, notifySuccess } from '../../alert';

const AddAccount = ({ showModal, onClose }: { showModal: Boolean, onClose: () => void }) => {
  const [isBrowser, setBrowser] = useState<Boolean>(false)
  const [FormDataAccount, setFormDataAccount] = useState<IGroup>({
    groupName: '',
    groupEmail: '',
    group_id: ''
  });
  const [ImageUploadValue, setImageUploadValue] = useState<string>();
  const [fileLoader, setFileloader] = useState<Boolean>(false);

  useEffect(() => {
    setBrowser(true)
  }, [])
  const handleClose = () => {
    onClose()
  }
  const onImageChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    const files = [...Object.values(target.files!)];
    setFileToBase([...files]);
  }
  const errors: string[] = [];

  if (!FormDataAccount?.groupName) {
    errors.push("The group name required!");
  }
  if (!FormDataAccount?.groupEmail) {
    errors.push("The group email required!");
  }
  const setFileToBase = async (files: File[]) => {
    const media = [];
    for (const file of files) {
      setFileloader(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'hcm_app');
      formData.append('cloud_name', 'real-service-ltd');
      try {
        let response = await fetch('https://api.cloudinary.com/v1_1/hcm_app/real-service-ltd', {
          method: 'POST',
          body: formData
        })
        const data = await response.json();
        media.push(data.secure_url);
        setImageUploadValue(data.secure_url);
        setFileloader(false);

      } catch (err: any) {
        reportError(err);
      }
    }
    return media;
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let result = await groupService.createGroup(FormDataAccount);
      if (result.status === 200) {
        notifySuccess("Successfully Created the Hospitals group");
        setFormDataAccount({
          groupName: '',
          groupEmail: '',
          group_id: ''
        });
        handleClose();
      }
    } catch (error: any) {
      const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Created, try again!" : error.error;
      reportError(ERROR_MESSAGE);
      setFormDataAccount({
        groupName: '',
        groupEmail: '',
        group_id: ''
      });
    }
  }
  const ModalContent = showModal ? (
    <div className="modal-portal bg-modalG h-screen w-screen flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
      <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw] ">
        <div className="modal-content">
          <div className="modal-header py-2 flex justify-between">
            <h5 className="modal-title font-bold text-backG">Add Group</h5>
            <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className='py-1'>
                <label className="block text-gray-700 text-sm font-bold">
                  Group Name
                </label>
                <input value={FormDataAccount?.groupName} onChange={(e) => setFormDataAccount({ ...FormDataAccount, groupName: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
              <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                  Email
                </label>
                <input value={FormDataAccount?.groupEmail} onChange={(e) => setFormDataAccount({ ...FormDataAccount, groupEmail: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
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
            <div className="modal-footer flex py-2 gap-2 text-[14px] justify-between">
              <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2  btn-secondary" data-dismiss="modal" onClick={handleClose}>Cancel</button>
              <button type="submit" className="btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg  btn-secondary" data-dismiss="modal" >{fileLoader ? `${<LoaderIcon />} Loading` : "Save"}</button>
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

export default AddAccount