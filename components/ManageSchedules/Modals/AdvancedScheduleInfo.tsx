import React from 'react'
import { NewScheduleInterface } from '../../../utils/ModalTypes'

const AdvancedScheduleInfo = ({ FormData, setFormData }: { FormData: NewScheduleInterface, setFormData: any }) => {
    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Schedule Date
                </label>
                <input value={FormData?.scheduleDate} onChange={(e) => setFormData({ ...FormData, scheduleDate: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="schedule date" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Start Hour
                </label>
                <input value={FormData?.startHour} onChange={(e) => setFormData({ ...FormData, startHour: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Start Hour" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    End Hour
                </label>
                <input value={FormData?.endHour} onChange={(e) => setFormData({ ...FormData, endHour: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="End Hour" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
        </>
    )
}

export default AdvancedScheduleInfo