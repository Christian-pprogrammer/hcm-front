import React from 'react'

const Hero= () => {
  return (
    <div className="min-h-[80vh] py-[6em]  hero bg-white text-white px-4 lg:px-[8em]">
        <div className='py-10 '>
          <small>Welcome to HCM Project</small>
          <p className='text-2xl sm:text-4xl  lg:text-6xl font-semibold'>Time and health are two precious assets that we do not recognize and appreciate until they have been depleted.</p>
        </div>
        <div className='py-10'>
          <button className='bg-white  hover:bg-backG hover:text-white duration-500 text-backG font-semibold md:p-6 md:px-10 text-[12px] p-4 px-5 md:text-[16px] rounded-full'>Book appointment</button>
        </div>
    </div>
  )
}

export default Hero