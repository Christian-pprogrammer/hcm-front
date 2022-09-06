import React,{ useState} from 'react'
import { FaCheck, FaPlus } from 'react-icons/fa'
import { PriceArr } from '../../utils/Prices'
import ChangeServiceFee from './Modals/ChangeServiceFee'

const ServicesFee = () => {
  const [showModal, setShowModal] = useState<Boolean>(false)

    const TotalPriceData = () =>{
        let TotalPrice = 0
        PriceArr.map((item)=>{
          TotalPrice += item.servicePrice
        })
        return TotalPrice
      }
  return (
    <div className=" bg-white min-w-[30vw]    lg:block relative  rounded-lg p-5 border-2 border-[#0000003]">
    <div className='flex justify-between'>
      <h5 className='font-bold'>Active Prices</h5>
      <div>
        <button onClick={() =>setShowModal(true)} className='p-5 bg-backG text-white rounded-full border-none outline-none -translate-y-2'><FaPlus/></button>
        <ChangeServiceFee onClose={() => setShowModal(false)} showModal={showModal} />
      </div>
    </div>
    <ul className='flex flex-col gap-4'>
      {PriceArr.map((price, i) => (
      <li key={i} className='flex place-items-center pr-3 justify-between'>
        <div className='text-slate-500 flex gap-4 place-items-center justify-center'>
          <div className='flex text-slate-500 border-2 border-slate-500 w-8 p-2 h-8 rounded-full place-items-center justify-center'>
            <FaCheck/>
          </div>
          <span className='text-sm'>
            {price.serviceName}
          </span>
        </div>
        <span className='text-lg font-bold'>${price.servicePrice}</span>
      </li>
      ))}
    </ul>
    
  </div>
  )
}

export default ServicesFee