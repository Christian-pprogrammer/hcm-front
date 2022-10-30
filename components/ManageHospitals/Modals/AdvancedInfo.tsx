import React,{useState,useEffect,memo} from 'react'
import hospitalCategoryService from '../../../services/hospital/hospital-category.service';
import { CreateHospitalDto } from '../../../utils/ModalTypes'
import { notifyError, notifyInfo } from '../../alert';

const AdvancedInfo = ({FormData,setFormData}:{FormData:CreateHospitalDto, setFormData : any}) => {
    const [CategoryArr, setCategoryArr] = useState<any>(null);
    async function fetchData () {
        try {
            notifyInfo("category Being Fetched");
            const data = await hospitalCategoryService.getHospitalCategories();
            console.log(data.data)
            setCategoryArr(data.data);
        }catch(error:any){
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
          }
    }
    useEffect(()=>{
        fetchData();
    },[])
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
                <select onChange={(e)=>setFormData({...FormData,hospitalCategoryId: e.target.value})} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Enter your Location">
                   {CategoryArr ? CategoryArr.map((category:any,i:any)=>(
                    <>
                       <option value="">Select The Value</option>
                        <option value={category.hospital_category_id}>{category.hospitalCategory}</option>
                        </>
                   )):
                    <span>Category Not found</span>
                   }
                </select>
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
            </div>
        </>

    )
}

export default memo(AdvancedInfo);