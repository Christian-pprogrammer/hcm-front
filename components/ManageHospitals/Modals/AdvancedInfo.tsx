import React, { useState, useEffect, memo } from 'react'
import hospitalCategoryService from '../../../services/hospital/hospital-category.service';
import { ICategory, IHospital } from '../../../utils/ModalTypes'
import { notifyError, notifyInfo } from '../../alert';

const AdvancedInfo = ({ FormData, setFormData, setIsValid }: { FormData: IHospital, setFormData: React.Dispatch<React.SetStateAction<IHospital>>, setIsValid: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [CategoryArr, setCategoryArr] = useState<ICategory[]>([]);
    const errors: string[] = []
    async function fetchData() {
        try {
            notifyInfo("Category on fetch!");
            const data = await hospitalCategoryService.getHospitalCategories();
            setCategoryArr(data.data);
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
        }
    }
    useEffect(() => {
        fetchData();
        if (errors.length > 0) {
            setIsValid(true)
        }
    }, [setIsValid, errors.length])
    if (!FormData.appointmentPrice) {
      errors.push("Appointment Price is required!");
    }
    if (!FormData.location) {
        errors.push("The Location is required!");
    }
    if (!FormData.hospitalCategoryId) {
        errors.push("The Hospital Category is required!");
    }
    return (
        <>
          <div className="py-1">
                <label htmlFor="appointmentPrice" className="block text-gray-700 text-sm font-bold">
                    Appointment price

                </label>
                <input value={FormData?.appointmentPrice} onChange={(e) => setFormData({ ...FormData, appointmentPrice: parseFloat(e.target.value) })} className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="appointmentPrice" type="number" placeholder="Appointment price" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Location
                </label>
                <input value={FormData?.location} onChange={(e) => setFormData({ ...FormData, location: e.target.value })} className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter your Location -- Country" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Category
                </label>
                <select onChange={(e) => setFormData({ ...FormData, hospitalCategoryId: e.target.value })} className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Enter your Location">
                    {CategoryArr ? CategoryArr.map((category: ICategory, i: number) => (
                        <>
                            <option value={''}>Select The Value</option>
                            <option value={category.hospital_category_id}>{category.hospitalCategory}</option>
                        </>
                    )) :
                        <span>Category Not found</span>
                    }
                </select>
            </div>
            {errors.length > 0 && (
                <div className='py-2'>
                    <ul>
                        {errors.map((error: string, index: number) => (
                            <li key={index} className='flex text-[10px] place-items-center gap-6 text-red-500'>
                                <span aria-hidden="true">&times;</span><span>{error}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>

    )
}

export default memo(AdvancedInfo);
