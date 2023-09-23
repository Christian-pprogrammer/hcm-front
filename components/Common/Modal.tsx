import React, { useState, useEffect, ReactNode } from 'react';
import * as ReactDOM from 'react-dom';
import { IGroup } from '../../utils/ModalTypes';
import { notifySuccess } from '../alert';
import groupService from '../../services/group/group.service';
import { LoaderIcon } from '../../icons';

// const AddAccount = ({ showModal, onClose }: { showModal: Boolean, onClose: () => void }) => {
  const Modal = ({ showModal, onClose, children }: { showModal: Boolean, onClose: () => void, children: ReactNode }) => {
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

  //const ModalContent = showModal || 1 == 1 ? (

  const ModalContent = showModal || 1 == 1 ? (
    <div className="modal-portal bg-modalG h-screen w-screen flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
      <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-1/2 lg:w-[30vw] ">
        <div className="modal-content">
          <div className="modal-header py-2 flex justify-between">
            <h5 className="modal-title font-bold text-backG">Add Group</h5>
            <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div className="modal-body">
              {children}
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

export default Modal