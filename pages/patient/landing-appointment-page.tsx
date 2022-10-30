import React from 'react'
import Header from '../../components/landingpage/Header'
import AppointmentPage from '../../components/ManageAppointments/AppointmentPage'
import RouteProtector from '../../middlewares/RouteProtector'
import { system_users } from '../../utils/constants'

//Appointment Page for the Landing website page
const LandingAppointmentPage = () => {
  return (
    <RouteProtector only={system_users.PATIENT}>
    <>
    <Header/>
    <div className=" flex justify-end min-h-screen bg-[#F7F7F7] py-4 flex-col relative lg:px-10">
        <AppointmentPage/>
    </div>
    </>
    </RouteProtector>
  )
}

export default LandingAppointmentPage
