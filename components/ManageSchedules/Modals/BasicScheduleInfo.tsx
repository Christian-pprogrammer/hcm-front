import Multiselect from 'multiselect-react-dropdown'
import React,{useState} from 'react'
import { NewScheduleInterface } from '../../../utils/ModalTypes'
import { ServicesArr, ServiceStructure } from '../../../utils/Prices'

const BasicScheduleInfo = ({ FormData, setFormData }: { FormData: NewScheduleInterface, setFormData: any }) => {
    interface SelectedData{
        SelectedService : ServiceStructure;
    }
    const [selectData,setSelectData] = useState<SelectedData[]>([])
    const handleOnSelect = (e:React.FormEvent<HTMLFormElement> | any)=> {
        setSelectData(e);
        setFormData({...FormData,services:selectData});
    };
    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Doctor Name
                </label>
                <input value={FormData?.doctorName} onChange={(e) => setFormData({ ...FormData, doctorName: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="name" placeholder="Doctor Name" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Doctor Email
                </label>
                <input value={FormData?.doctorEmail} onChange={(e) => setFormData({ ...FormData, doctorEmail: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="name" placeholder="Doctor Email" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Services
                </label>
                <Multiselect onSelect={handleOnSelect} loading={false} options={ServicesArr} displayValue={"ServiceName"} className="shadow appearance-none bg-inputG border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select " />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
        </>
    )
}

export default BasicScheduleInfo