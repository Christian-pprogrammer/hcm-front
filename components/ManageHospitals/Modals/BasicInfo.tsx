import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { ServicesArr, ServiceStructure } from '../../../utils/Prices';
import { AddHospitalStructure } from '../../../utils/ModalTypes';

const BasicInfo = ({FormData,setFormData}:{FormData:AddHospitalStructure, setFormData: any}) => {
    interface SelectedData {
        SelectedService: ServiceStructure;
    }
    const [selectData, setSelectData] = useState<SelectedData[]>([]);
    const handleOnSelect = (e:React.FormEvent<HTMLFormElement>|any) =>{
        setSelectData(e);
        setFormData({...FormData,service:selectData});
    }
    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Hospital Name
                </label>
                <input value={FormData?.hospitalName} onChange={(e)=>setFormData({...FormData,hospitalName: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your hospital name" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Email
                </label>
                <input value={FormData?.email} onChange={(e)=>setFormData({...FormData,email:e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    New Services / Map Services
                </label>
                <Multiselect onSelect={handleOnSelect} loading={false} options={ServicesArr} displayValue={"ServiceName"} className="shadow appearance-none bg-inputG border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" placeholder="Select " />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    New License Expiration
                </label>
                <input value={FormData?.newlicenseDate} onChange={(e)=>setFormData({...FormData,newlicenseDate: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date-image" type="date" placeholder="Date" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
        </>
    )
}

export default BasicInfo