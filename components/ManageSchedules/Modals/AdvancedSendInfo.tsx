import Multiselect from 'multiselect-react-dropdown'
import React, { useState } from 'react'
import { SendAppointmentInterface } from '../../../utils/ModalTypes'
import { PriceArr, PriceStructure } from '../../../utils/Prices';

const AdvancedSendInfo = ({ FormData, setFormData }: { FormData: SendAppointmentInterface, setFormData: any }) => {
    interface SelectedData{
        SelectedService : PriceStructure;
    }
    const [selectData,setSelectData] = useState<SelectedData[]>([])
    const handleOnSelect = (e:React.FormEvent<HTMLFormElement>|any) => {
        setSelectData(e);
        setFormData({...FormData,services:selectData})
    }
    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Services
                </label>
                <Multiselect onSelect={handleOnSelect} loading={false} options={PriceArr} displayValue={"ServiceName"} className="shadow appearance-none bg-inputG border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select " />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Schedule Date
                </label>
                <input value={FormData?.scheduleDate} onChange={(e)=>setFormData({...FormData,scheduleDate: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="schedule date" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Appointment Hour
                </label>
                <input value={FormData?.appointmentHr} onChange={(e) => setFormData({ ...FormData, appointmentHr: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="End Hour" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
        </>
    )
}

export default AdvancedSendInfo
