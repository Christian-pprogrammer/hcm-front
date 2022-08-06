import Link from 'next/link'
import React from 'react'
import { FaAppStore, FaGoogle, FaIntercom, FaLinkedin, FaQuestion, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-backG  text-white py-10 min-h-[30vh] md:px-[2em]' >
        <div className='flex flex-col justify-center   text-center md:text-left md:flex-row mx-auto px-10 lg:px-0 gap-6'>
          <div className='text-white font-bold flex gap-8 flex-col text-center  text-[14px] lg:text-[16px]'>
              <h1>HCM Corp</h1>
              <ul className=' text-[#ffffffb9] font-normal flex flex-col gap-4 list-none '>
                  <li className='flex place-items-center justify-center md:justify-start gap-6'><FaIntercom/> www.hcmappointmentsystem.com</li>
                  <li className='flex place-items-center justify-center md:justify-start gap-6'><FaQuestion/> help/support</li>
              </ul>
          </div>
          <div className='text-white flex-1 font-bold flex gap-8 flex-col text-[14px] lg:text-[16px]'>
              <h1>Projects</h1>
              <ul className=' text-[#ffffffb9]  font-normal flex flex-col gap-4 list-none '>
                  <li className='hover:text-white duration-300'><Link href='/'>Appointment Live</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Programs</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Medical Online Services</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Showcase</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Help/Support</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Categories</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Recent Projects</Link></li>
              </ul>
          </div>
          <div className='text-white flex-1 font-bold flex gap-8 flex-col  text-[14px] lg:text-[16px]'>
              <h1>About</h1>
              <ul className=' text-[#ffffffb9]  font-normal flex flex-col gap-4 list-none '>
                  <li className='hover:text-white duration-300'><Link href='/'>About Us</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>How it works</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Medical Solutions</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Appointment Steps</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>News</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Updates</Link></li>
              </ul>
          </div>
          <div className='text-white flex-1 font-bold flex gap-8 flex-col text-[14px] lg:text-[16px]'>
              <h1>Terms & Policies</h1>
              <ul className=' text-[#ffffffb9]  font-normal flex flex-col gap-4 list-none '>
                  <li className='hover:text-white duration-300'><Link href='/'>Privacy Policy </Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Terms and Conditions</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Copyright</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Code of Conduct</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Fees and Charges</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Audit Session</Link></li>
              </ul>
          </div>
          <div className='text-white flex-1 font-bold flex gap-8 flex-col  text-[14px] lg:text-[16px]'>
              <h1>Partners</h1>
              <ul className=' text-[#ffffffb9]  font-normal flex flex-col gap-4 list-none '>
                  <li className='hover:text-white duration-300'><Link href='/'>Medical Services</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Health Ministry</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Private Instistutions</Link></li>
                  <li className='hover:text-white duration-300'><Link href='/'>Hospitals & Polyclinics</Link></li>
              </ul>
          </div>
          <div className='text-white flex-1 font-bold flex gap-8 flex-col  text-[14px] lg:text-[16px]'>
              <h1>Apps</h1>
              <div className='flex flex-col gap-4' >
                <button className='py-4 px-6 rounded-xl flex justify-center place-items-center gap-8  border-2 border-white'><FaAppStore/><div className='flex flex-col '><small className='text-[12px] text-[#ffffff88]'>Available On</small><span>App Store</span></div></button>
                <button className='py-4 px-6 rounded-xl flex justify-center place-items-center gap-8  border-2 border-white'><FaGoogle/><div className='flex flex-col '><small className='text-[12px] text-[#ffffff88]'>Get it On</small><span>Google</span></div></button>
              </div>
          </div>
          </div>
          <div className='border-t-2 flex-col gap-6 md:flex-row  border-[#ffffffb9] my-10 flex py-2 place-items-center '>
              <h1 className='font-bold text-white text-sm'>HCM Corp</h1>
              <p className='text-[#ffffffb9] px-20'>Appointment.rw ® is a registered Trademark of HCM Technology Limited (ACN 142 189 759)
Copyright © 2022 HCM Technology Pty Limited (ACN 142 189 759)</p> 
              <div className='flex justify-between py-2 gap-4'>
                <Link href='/'>
                <div className='rounded-full hover:scale-125 hover:cursor-pointer duration-300 text-backG place-items-center bg-white p-5'>
                  <FaTwitter/>
                </div>
                </Link>
                <Link href='/'>
                <div className='rounded-full hover:scale-125 hover:cursor-pointer duration-300 text-backG place-items-center bg-white p-5'>
                  <FaLinkedin/>
                </div>
                </Link>
                <Link href='/'>
                <div className='rounded-full hover:scale-125 hover:cursor-pointer duration-300 text-backG place-items-center bg-white p-5'>
                  <FaWhatsapp/>
                </div>
                </Link>
          
          
              </div>
          </div>
      </footer>
  )
}

export default Footer