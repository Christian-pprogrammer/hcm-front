import React from 'react'
import { FaBell, FaUser } from 'react-icons/fa'
import { NotificationIcon, PersonaIcon } from '../../icons'

const Navbar = () => {
  return (
    <div className="flex px-2 sticky top-0 right-0 duration-500 z-20 place-items-center  h-16 bg-white text-black justify-between">
        <div>
            <h1 className='font-bold text-sm lg:text-xl '>HCM System </h1>
        </div>
        <div className='flex justify-between place-items-center gap-4 '>
            <div className='flex bg-slate-200 relative rounded-full p-4 place-items-center justify-center'>
                <div className='absolute top-0 right-2 h-2 w-2 rounded-full bg-backG'></div>
                <FaBell className='text-[grey] cursor-pointer'/>
            </div>
            <div className='md:flex hidden border-2 border-[grey] bg-slate-200 relative rounded-full w-8  h-8 place-items-center justify-center'>
                <FaUser className='text-[grey] cursor-pointer'/>
            </div>
            <div className='justify-center px-4 md:px-8 place-items-center flex '>
                <span className='font-semibold '>
                    Super Admin
                </span>
            </div>
            <div className='flex   '>
                <select className='bg-slate-200 rounded-xl outline-none md:px-6 px-2 text-sm md:text-base py-2' name="international" id="">
                    <option value="EN"> EN</option>
                    <option value="FR"> FR</option>
                    <option value="DE"> DE</option>
                    <option value="RW_rw"> KI</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Navbar