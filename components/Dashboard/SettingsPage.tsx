import Link from 'next/link'
import React, { useState } from 'react'
import { FaCheck, FaHome, FaPlus } from 'react-icons/fa'
import SettingsSvg from '../../icons/SettingsSvg'
import { PriceArr } from '../../utils/Prices'
import SettingsNewPrice from './SettingNewPrices'

const SettingsPage = () => {
  const [showModal, setShowModal] = useState<Boolean>(false)
  const [showMenu,setShowMenu] = useState<Boolean>(false)
  const TotalPriceData = () =>{
    let TotalPrice = 0
    PriceArr.map((item)=>{
      TotalPrice += item.servicePrice
    })
    return TotalPrice
  }
  return (
    <div className="px-2 bg-[#F7F7F7]">
      <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
        <button onClick={()=>setShowMenu(true)}><FaHome/></button><Link href='/Dash/Dashboard'>Settings / </Link>
      </div>
      <div className="flex flex-col lg:flex-row ">
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-lg'>Patient Fee restriction </h1>
          <p className='text-slate-400 text-sm pr-5'>This is the settings page includes different prices that the system admin is able to change and renovatte according to the market price. No worries the price rate should be increased and notify the active users of the system easily and at once. The active prices are prescribed nearby</p>
          <div className='hidden lg:block'>
            <SettingsSvg/>
          </div>
        </div>
        <div className=" bg-white min-w-[25vw] px-2 md:h-[85vh]  lg:block relative  rounded-lg">
          <div className='flex justify-between'>
            <h1 className='font-bold text-lg'>Active Prices</h1>
            <div>
              <button onClick={() =>setShowModal(true)} className='p-5 bg-backG text-white rounded-full border-none outline-none -translate-y-2'><FaPlus/></button>
              <SettingsNewPrice onClose={() => setShowModal(false)} showModal={showModal} />
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
          <div className='flex py-5 justify-between place-items-center'>
            <h1 className='text-sm font-bold'>
              Total Price
            </h1>
            <div className='bg-backG font-bold text-white w-32 h-14 flex place-items-center justify-center'>
              <span className='py-2 px-10'>${TotalPriceData()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage