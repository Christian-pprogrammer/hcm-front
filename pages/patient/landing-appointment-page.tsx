import React from 'react'
import Header from '../../components/landingpage/Header'
import AppointmentPage from '../../components/ManageAppointments/AppointmentPage'

//Appointment Page for the Landing website page 
const LandingAppointmentPage = () => {
  return (
    <>
    <Header/>
    <div className=" flex justify-end min-h-screen bg-[#F7F7F7] py-4 flex-col relative lg:px-10">
        <AppointmentPage/>
    </div>
    </>
  )
}

export default LandingAppointmentPage