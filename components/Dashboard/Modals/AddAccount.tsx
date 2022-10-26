import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import {  GroupDtoForm, GroupDtoDummy } from '../../../utils/ModalTypes';
import {LoaderIcon} from '../../../icons/index';
import groupService from '../../../services/group/group.service';
import { notifyError, notifySuccess } from '../../alert';

const AddAccount = ({ addAccount,onClose } : {addAccount: Boolean,onClose: any}) => {
  const [isBrowser, setBrowser] = useState<Boolean>(false)
  const [FormDataAccount,setFormDataAccount] = useState<GroupDtoForm>(GroupDtoDummy);
  const [ImageUploadValue,setImageUploadValue] = useState<string>();
  const [fileLoader,setFileloader] = useState<Boolean>(false);
  
  useEffect(() => {
    setBrowser(true)
  }, [])
  const handleClose = () => {
    onClose() 
  }
  const onImageChange = (e:React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    const files = [...Object.values(target.files!)];
    setFileToBase([...files]);
  }
  const setFileToBase = async (files:File[]) => {
    const media = [];
    for(const file of files) {
      setFileloader(true);
      const formData = new FormData();
      formData.append('file',file);
      formData.append('upload_preset','hcm_app');
      formData.append('cloud_name','real-service-ltd');
      try{
        let response = await fetch('https://api.cloudinary.com/v1_1/hcm_app/real-service-ltd',{
          method: 'POST',
          body:formData
        })
        const data = await response.json();
        media.push(data.secure_url);
        setImageUploadValue(data.secure_url);
        setFileloader(false);

      }catch(err:any){
        reportError(err);
      }
    }
    return media;
  }
  const handleSubmit = async (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(ImageUploadValue);
    try{
      let result = await groupService.createGroup(FormDataAccount);
      if(result.status === 200){
        notifySuccess("Successfully Created the Hospitals group");
        setFormDataAccount(GroupDtoDummy);
        handleClose();
      }
    }catch(error:any){
      const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Created, try again!" : error.error;
      notifyError(ERROR_MESSAGE);
      setFormDataAccount(GroupDtoDummy);
    }
  }
  const ModalContent = addAccount ? (
    <div className="modal-portal bg-modalG h-screen w-screen flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
    <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow  ">
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
            <input value={FormDataAccount?.groupName} onChange={(e)=>setFormDataAccount({...FormDataAccount,groupName:e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            <small className='text-[12px] text-red-500'>Enter Valid info</small>
          </div>
          <div className="py-1">
            <label className="block text-gray-700 text-sm font-bold">
                Email
            </label>
            <input value={FormDataAccount?.email} onChange={(e)=>setFormDataAccount({...FormDataAccount,email:e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
            <small className='text-[12px] text-red-500'>Enter Valid info</small>
          </div>
        </div>
        <div className="modal-footer flex py-2 gap-2  justify-between">
          <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
          <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" >{fileLoader ? `${<LoaderIcon/>} Loading` : "Save"}</button>
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

export default AddAccount