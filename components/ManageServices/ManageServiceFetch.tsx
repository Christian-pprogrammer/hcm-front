import React, { useState } from 'react'
import { IService } from '../../utils/Prices'
import MapHospital from './Modals/MapHospital'
import { FaCheck } from 'react-icons/fa'

const ManageServiceFetch = ({ service, showModal }: { service: IService, showModal: boolean }) => {
    const [showMapModal, setshowMapModal] = useState<boolean>(false)
    return (
        <tr key={service.service_id} className="bg-white hover:bg-inputG text-[14px] hover:cursor-pointer">
            <td className="py-4 px-10 w-4">
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus: -blue-600 t-gray-800 focus:ring-2 0 y-600" />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
            </td>
            <td scope="row" className="py-4 px-6 font-semibold text-gray-900 whitespace-nowrap">
                {service.service}
            </td>
            <td scope="row" className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap ">
                {(service.status === "Active") ? <div className='text-backG bg-linear w-10 h-10 border-2 border-backG flex justify-center place-items-center  rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] py-2 font-bold'>Inactive</span>}
            </td>
            <td className='px-6 py-4'>
                {service.createdAt}
            </td>
            {showModal &&
                <td className='whitespace-nowrap text-[#00000043] py-2'>
                    <button onClick={() => setshowMapModal(true)} className='text-backG bg-linear py-1.5 ripple hover:text-white px-6 border-2 border-backG text-[12px] rounded-md font-bold'> Map </button>
                </td>
            }
            <MapHospital showModal={showMapModal} onClose={() => setshowMapModal(false)} id={service.service_id}/>
        </tr>
    )
}

export default ManageServiceFetch