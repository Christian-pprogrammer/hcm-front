import React from 'react';
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { ISchedule } from '../../../utils/ModalTypes';

const AdvancedScheduleInfo = ({ FormData, setFormData }: { FormData: ISchedule, setFormData: React.Dispatch<React.SetStateAction<ISchedule>> }) => {
    const errors: string[] = [];
    if (!FormData.dates) {
        errors.push("The start date is required!");
    }
    if (!FormData.start_time) {
        errors.push("The start time is required!");
    }
    if (!FormData.appointmentNumber) {
        errors.push("The appointment slots is required!");
    }
    if (!FormData.end_time) {
        errors.push("The end time is required!");
    }
    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Schedule Dates
                </label>
                <DatePicker id="date-image" multiple value={FormData?.dates} onChange={e => setFormData({ ...FormData, dates: e })} placeholder="Select Dates" inputClass="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" plugins={[<DatePanel key={"key"} />]} />
                {/* <input value={FormData?.dates} onChange={(e) => setFormData({ ...FormData, dates: e.target.value })} className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date-image" type="date" placeholder="Date" /> */}
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Start Time
                </label>
                <input value={FormData?.start_time} onChange={(e) => setFormData({ ...FormData, start_time: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" step="1" placeholder="Start Hour" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    End Time
                </label>
                <input value={FormData?.end_time} onChange={(e) => setFormData({ ...FormData, end_time: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" step="1" placeholder="End Hour" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Appointment slots
                </label>
                <input value={FormData?.appointmentNumber} onChange={(e) => setFormData({ ...FormData, appointmentNumber: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Appointment slots" />
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
        </>
    )
}

export default AdvancedScheduleInfo
