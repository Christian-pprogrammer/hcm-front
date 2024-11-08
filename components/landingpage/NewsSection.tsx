import React from 'react'

const NewsSection = () => {
    return (
        <div className="min-h-[60vh]  flex place-items-center bg-white  py-10 px-0 lg:px-[8em]">
            <div className='bg-backG py-20 px-20 lg:p-20 text-center gap-8 min-w-full text-white min-h-[50vh] lg:min-w-[50vw] flex flex-col'>
                <h1 className='font-semibold text-[18px]'>Subscribe to Our newsLetter </h1>
                <p className='text-[#ffffffa2] text-[14px]'>
                    Moving to more intensive, and often expensive, treatments as needed1. Text message software and smartphone apps can be integrated into electronic health records (EHRs) to send alerts and reminders to patients
                </p>
                <form className='flex flex-col gap-2 md:flex-row '>
                    <input type="text" className="w-full outline-blue-500 outline-3 text-backG p-5  bg-white" placeholder="Subscribe to Our newsLetter" />
                    <button type="submit" className="bg-backG hover:scale-110 duration-300 hover:bg-white hover:text-backG hover:border-backG text-white p-5 px-20 border-2 border-white ">Subscribe</button>
                </form>
            </div>
            <div className=' hidden lg:flex -translate-y-20 -translate-x-10 '>
                <iframe src="https://player.vimeo.com/video/518101367?title=0&portrait=0&byline=0&autoplay=true&muted=false" style={{minWidth : '40vw',minHeight : '50vh'}} frameBorder="0" ></iframe>
            </div>
        </div>
    )
}

export default NewsSection