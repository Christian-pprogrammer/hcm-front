import React from 'react'
import { PatientInterface } from '../../../utils/ModalTypes'

const PersonalInfo = ({ FormData, setFormData }: { FormData: PatientInterface, setFormData: any }) => {
  return (
    <>
      <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">
          Patient Name
        </label>
        <input value={FormData?.patientName} onChange={(e) => setFormData({ ...FormData, patientName: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your patient 's name" />
        <small className='text-[12px] text-red-500'>Enter Valid info</small>
      </div>
      <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">
          Patient Number
        </label>
        <input value={FormData?.patientNumber} onChange={(e) => setFormData({ ...FormData, patientNumber: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your patient's file number" />
        <small className='text-[12px] text-red-500'>Enter Valid info</small>
      </div>
      <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">
          Patient Tel
        </label>
        <input value={FormData?.patientTel} onChange={(e) => setFormData({ ...FormData, patientTel:e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your patient's tel" />
        <small className='text-[12px] text-red-500'>Enter Valid info</small>
      </div>
    </>
  )
}

export default PersonalInfo