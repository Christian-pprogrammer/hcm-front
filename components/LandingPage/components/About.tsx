import React from 'react'

const  About = () => {
    return (
        <div className="min-h-screen pt-[14em] lg:pt-[8em] bg-white px-8 lg:px-[8em]">
            <div>
                <div className="text-backG py-10 lg:py-0 flex gap-6 ">
                    <img src="/assets/arrow.svg"  alt="" /><span>About HCM System</span>
                </div>
                <h1 className="font-semibold text-center text-xl ">About HCM Appointment System</h1>
            </div>
            <div className="flex md:flex-col py-[5em] lg:flex-row md:py-2 lg:py-[5em] gap-2 md:gap-6 justify-around">
                
                    <img className='rounded-lg hidden  md:flex md:px-2 sm:py-5 object-cover' src="https://media.istockphoto.com/photos/female-doctor-talking-with-earphone-while-explaining-medical-to-a-picture-id1314931058?b=1&k=20&m=1314931058&s=170667a&w=0&h=A3RbUHf2-twRXh85ltwPAPJasdhl-UOmu6j9NOoqQq0=" alt="" />
                <div className='md:px-10 px-4 flex flex-col gap-8'>
                    <h1 className="font-semibold ">HCM Appointment System Basis</h1>
                    <p className='sm:text-[12px] text-[14px]'>
                    Text message-based health interventions provide patients with reminders, education, or self-management assistance for a broad spectrum of health conditions. Interventions are most frequently used as a part of broader health promotion efforts or to help individuals manage chronic diseases1. Text messages may be standardized or tailored to specific patients and sent at varied frequencies based on the intervention2. Text messaging can be combined with other approaches or delivered as part of a stepped care or progressive intervention that is tailored to patients’ needs, beginning with the least intensive treatment and moving to more intensive, and often expensive, treatments as needed1. Text message software and smartphone apps can be integrated into electronic health records (EHRs) to send alerts and reminders to patients
                    </p>
                    <div>
                    <button className='btn my-5 bg-backG text-white p-5 px-10 rounded-lg'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About