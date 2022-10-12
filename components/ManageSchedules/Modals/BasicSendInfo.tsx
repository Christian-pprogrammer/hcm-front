import React from 'react'
import { SendAppointmentInterface } from '../../../utils/ModalTypes'

const BasicSendInfo = ({ FormData, setFormData }: { FormData: SendAppointmentInterface, setFormData: any }) => {
    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Patient Name
                </label>
                <input value={FormData?.patientName} onChange={(e)=>setFormData({...FormData,patientName: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="name" placeholder="Patient Name" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Patient Record Number
                </label>
                <input value={FormData?.patientRecordNumber} onChange={(e)=>setFormData({...FormData,patientRecordNumber: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Patient File Record Number" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Patient Telephone
                </label>
                <input value={FormData?.patientTel} onChange={(e)=>setFormData({...FormData,patientTel: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Patient Tel" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
        </>
    )
}

export default BasicSendInfo