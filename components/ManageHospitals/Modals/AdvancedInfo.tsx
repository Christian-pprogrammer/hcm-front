import React from 'react'
import { AddHospitalStructure } from '../../../utils/ModalTypes'
import { CategoryArr } from '../../../utils/SelectOptions'

const AdvancedInfo = ({FormData,setFormData}:{FormData:AddHospitalStructure, setFormData : any}) => {

    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Location
                </label>
                <input value={FormData?.location} onChange={(e)=>setFormData({...FormData,location: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter your Location -- Country" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Category
                </label>
                <select onChange={(e)=>setFormData({...FormData,category: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Enter your Location">
                   {CategoryArr.map((category)=>(
                        <option key={category.id} value={category.value}>{category.text}</option>
                   ))}
                </select>
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    District
                </label>
                <input value={FormData?.district} onChange={(e)=>setFormData({...FormData,district: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter your Location -- District" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Sector
                </label>
                <input value={FormData?.sector} onChange={(e)=>setFormData({...FormData,sector: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter your Location -- Sector" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
        </>

    )
}

export default AdvancedInfo