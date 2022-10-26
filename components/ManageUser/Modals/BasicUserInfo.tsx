import React,{ useState } from 'react'
import { NewUserInterface } from '../../../utils/ModalTypes'
import { AccountTypeArr, NewUserStatusArr } from '../../../utils/SelectOptions'
import { ServicesArr, ServiceStructure } from '../../../utils/Prices';
import Multiselect from 'multiselect-react-dropdown';

const BasicUserInfo = ({ FormData, setFormData }: { FormData: NewUserInterface, setFormData: any }) => {
    interface SelectedData {
        SelectedService: ServiceStructure;
    }
    const [selectData, setSelectData] = useState<SelectedData[]>([]);
    const handleOnServiceSelect = (e: React.FormEvent<HTMLFormElement> | any) => {
        setSelectData(e);
        setFormData({ ...FormData, services: selectData });
    }
    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Role
                </label>
                <select value={FormData?.role} onChange={(e) => setFormData({ ...FormData, role: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                    {AccountTypeArr.map((option) => (
                        <option key={option.id} value={option.value}>{option.text}</option>
                    ))}
                </select>
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>

            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Working Status
                </label>
                <select onChange={(e)=>setFormData({...FormData,status: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                    {NewUserStatusArr.map((option) => (
                        <option key={option.id} value={option.value}>{option.text}</option>
                    ))}
                </select>
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            {FormData?.role=="DOCTOR"&&
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Services
                </label>
                <Multiselect onSelect={handleOnServiceSelect} loading={false} options={ServicesArr} displayValue={"ServiceName"} className="shadow appearance-none bg-inputG border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" placeholder="Select " />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
            }
        </>
    )
}

export default BasicUserInfo