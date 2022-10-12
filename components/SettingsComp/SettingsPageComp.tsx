import Link from 'next/link'
import React, { useState } from 'react'
import { FaBell, FaHome, FaPlus } from 'react-icons/fa'
import { AlertIcon, ClockIcon } from '../../icons'
import NewMessageTemplate from './Modals/NewMessageTemplate'
import ViewMessage from './Modals/ViewMessage'
import ServicesFee from './ServicesFee'

const SettingsPageComp = () => {
    const [showModal, setShowModal] = useState<Boolean>(false)
    const [NewMessageModal, setNewMessageModal] = useState<Boolean>(false)
    const [showMessage, setshowMessage] = useState<Boolean>(false)

    return (
        <div className="px-2 py-4">
            <div className="content-link pb-4 text-backG text-[12px] flex gap-4">
                <FaHome /><Link href='/HCM/Dashboard' > Settings / </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
                <div className="chart-data flex gap-[4em] min-w-[45vw] h-[50vh] bg-white rounded-lg p-5 border-2 border-[#0000003]">
                    <div className="bg-white hidden lg:flex flex-col gap-6">
                        <h5>Set Reminder</h5>
                        <ClockIcon />
                    </div>
                    <div className='bg-white-500 w-full'>
                        <h5>Select the Time Zone</h5>
                        <div className='py-10'>
                            <form className='lg:flex gap-4 flex-col'>
                                <input className="shadow appearance-none bg-inputG border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date-image" type="time" placeholder="Date" />
                                <button type="submit" className="btn bg-backG text-white py-2 px-4 lg:px-10 flex place-items-center gap-4 justify-center lg:py-3 btn-secondary" data-dismiss="modal"><FaBell />Notify</button>
                            </form>
                            <p className='text-[10px] text-[#00000073]'>Notify the Doctor and Patients before the prescribed time, the operations should start</p>
                        </div>
                    </div>
                </div>
                <ServicesFee />
            </div>
            <div className='flex flex-col md:flex-row gap-2'>
                <div className='gap-2 '>
                    <div className='py-5'>
                        <h1 className='font-bold'>License Expiration Duration</h1>
                    </div>
                    <div className='w-full border-2 flex place-items-center justify-center p-5 gap-[2em] border-[#000000082] md:min-w-[45vw] h-[50vh] bg-white rounded-lg'>
                        <div className="hidden lg:flex">
                            <AlertIcon />
                        </div>
                        <div className='py-5'>
                            <h5>Alert</h5>
                            <p className=' text-[#00000073] py-5 '>The System needs reactivation before the below dates. The permanent access will be retrieved after the below dates.The System needs reactivation before the below dates. The permanent access will be retrieved after the below dates.The System needs reactivation before the below dates. The permanent access will be retrieved after the below dates.The System needs reactivation before the below dates. The permanent access will be retrieved after the below dates.</p>
                            <button type="button" className="btn bg-backG text-white py-2 px-4 font-bold lg:px-10 flex place-items-center gap-4 justify-center lg:py-3 btn-secondary" data-dismiss="modal">12 . 02 . 2022</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:block'>
                    <div className='py-1  place-items-center  flex pr-5  justify-between'>
                        <h1 className='font-bold'>Message Templates</h1>
                        <div>
                            <button onClick={() => setNewMessageModal(true)} className='p-5 bg-backG text-white rounded-full border-none outline-none '><FaPlus /></button>
                            <NewMessageTemplate onClose={() => setNewMessageModal(false)} NewMessageModal={NewMessageModal} />
                        </div>
                    </div>
                    <div className='bg-white  min-w-[30vw] lg:block relative h-[50vh]  rounded-lg px-4 border-2 border-[#0000003]'>
                        <div className='flex justify-between px-2 place-items-center py-8'>
                            <h5 className='font-bold'>Template Models 2/4</h5>
                            <span className='text-backG text-[10px] font-bold hover:cursor-pointer'>Show More</span>
                        </div>
                        <div className='bottom-0 absolute'>
                            <div onClick={() => setshowMessage(true)} className='bg-white hover:border-t-2  hover:border-[#0000003] hover:border-opacity-60 hover:border-b-2 hover:drop-shadow-xl hover:cursor-pointer duration-400 p-2'>
                                <h5 className='font-bold'>New Template Title</h5>
                                <div className='py-2'>
                                    <p className='text-[#00000073]'>Instructured Supplementary Service Data (USSD) is a technology unique to GSM. It is a capability built into the GSM standard for support of transmitting information</p>
                                </div>
                            </div>
                            <ViewMessage showMessage={showMessage} onClose={()=>setshowMessage(false)}>
                                <p className='text-[#00000073]'>
                                Instructured Supplementary Service Data (USSD) is a technology unique to GSM. It is a capability built into the GSM standard for support of transmitting informationInstructured Supplementary Service Data (USSD) is a technology unique to GSM. It is a capability built into the GSM standard for support of transmitting information
                                </p>
                            </ViewMessage>
                            <div className='bg-white hover:border-t-2  hover:border-[#0000003] hover:border-opacity-60 hover:border-b-2 hover:drop-shadow-xl hover:cursor-pointer duration-400 p-2'>
                                <h5 className='font-bold'>New Template Title</h5>
                                <div className='py-2'>
                                    <p className='text-[#00000073]'>Instructured Supplementary Service Data (USSD) is a technology unique to GSM. It is a capability built into the GSM standard for support of transmitting information</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPageComp