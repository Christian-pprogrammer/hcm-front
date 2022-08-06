import React from 'react'

const Header = () => {
  return (
    <header className='bg-white drop-shadow-xl px-2 md:px-2 lg:px-[4em] flex justify-between h-[10vh] '>
        <div className='flex gap-4'>
            <div className=' flex justify-center place-items-center rounded-full bg-white'>
                <img className='h-4/5 w-4/5  object-contain' src="https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg" alt=""/>
            </div>
            <div className='flex flex-col justify-center place-items-center'>
                <h1>The HCM Appointment System</h1>
                <p className='text-[#000000b3] text-left text-[12px]'>HCM Corporations</p>
            </div>
        </div>
        <div className='flex justify-center place-items-center md:gap-[2em] lg:gap-[8em]'>
        <ul className='text-black text-[14px] font-semibold  hidden md:flex gap-10'>
            <li><a className='text-backG  border-b-2 border-solid border-backG py-2' href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">SHOWCASE</a></li>
            <li><a href="#">APPOINTMENT</a></li>
        </ul>
        <div>
            <button className="btn border-solid hover:bg-backG hover:text-white duration-600 border-backG border-2 rounded-md flex justify-center place-items-center text-backG py-2 px-10 font-semibold">Login</button>
        </div>
        </div>
    </header>
  )
}

export default Header