import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FaMap } from 'react-icons/fa'
import MapAppointments from './Modals/MapAppointments'
import SendAppointments from './Modals/SendAppointments'
import { notifyError } from '../alert'
import appointmentService from '../../services/appointments/appointment.service'
import { useSelector } from 'react-redux'
import FetchDataLoader from '../loaders/FetchDataLoader'
import { unixTimeToUsualDate } from "../../utils/functions";


const AppointmentList = ({ onClose }: { onClose: any }, scheduleId: any) => {
  const router = useRouter();
    const [MapModal, setMapModal] = useState<Boolean>(false);
    const [SendAppModal, setSendAppModal] = useState<Boolean>(false);
    const [showAction, setShowActions] = useState<Boolean>(false);
    const [appointments, setAppointments] = useState<any[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedDepartment, setSelectedDepartment] = useState<string>('');
    const [selectedHospital, setSelectedHospital] = useState<string>('');
    const [selectedDoctor, setSelectedDoctor] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);

    const authUser = useSelector((state: any) => state.authUser);

    const handleBackPage = () => {
        onClose()
    }

    const handleFilter = () => {
      // Filter appointments based on selected criteria
      let filteredAppointments = appointments.filter(appointment => {

        // Get current date
        const currentDate = new Date();

        // Calculate date ranges based on selected option
        let startDate: any, endDate: any;
        if (selectedDate === 'today') {
            startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
            endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
        } else if (selectedDate === 'week') {
            const firstDayOfWeek = currentDate.getDate() - currentDate.getDay(); // First day of the week
            startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), firstDayOfWeek);
            endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), firstDayOfWeek + 7);
        } else if (selectedDate === 'month') {
            startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        } else if (selectedDate === 'year') {
            startDate = new Date(currentDate.getFullYear(), 0, 1);
            endDate = new Date(currentDate.getFullYear() + 1, 0, 0);
        }

          return (
            (selectedDate === '' || (new Date(appointment.appointmentDate) >= startDate && new Date(appointment.appointmentDate) < endDate)) &&
              (selectedDepartment === '' || appointment.department == selectedDepartment) &&
              (selectedHospital === '' || appointment.hospital == selectedHospital) &&
              (selectedDoctor === '' || appointment.doctorName == selectedDoctor)
          );
      });

      // Sort filtered appointments by appointment date
      filteredAppointments.sort((a, b) => {
          return new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime();
      });

      // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredAppointments.slice(indexOfFirstItem, indexOfLastItem);

      return filteredAppointments;
    };

    useEffect(() => {
      async function fetchAppointments() {
        const { scheduleId } = router.query;
        let appointments;
        try {
          if (scheduleId && typeof scheduleId === "string") {
            appointments = await appointmentService.getScheduleAppointments(scheduleId);
          } else {
            appointments = await appointmentService.getPatientAllAppointments();
          }
          setAppointments(appointments.data);
        } catch (error: any) {
          const ERROR_MESSAGE = error.response
            ? error.response?.data?.error || "Not Fetched, try again!"
            : error.error;
          notifyError(ERROR_MESSAGE);
        }
      }
      fetchAppointments();
    }, [authUser.user, router.query]);

    return (
        <div className="px-2 bg-[#F7F7F7]">
            <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
                <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                    <div className='flex gap-10'>
                        <div className="px-2 ">
                            <select name="" id="" className='bg-white border-2 border-[#00000020]  rounded-2xl outline-none px-2 py-2' value={selectedDate} onChange={e => setSelectedDate(e.target.value)}>
                                <option value="">Period</option>
                                <option value="today">Today</option>
                                <option value="week">Week</option>
                                <option value="month">Month</option>
                                <option value="year">Year</option>
                            </select>
                        </div>
                        <div className="px-2 ">
                            <select name="" id="" className='bg-white border-2 border-[#00000020]  rounded-2xl outline-none px-2 py-2' value={selectedDepartment} onChange={e => setSelectedDepartment(e.target.value)}>
                                <option value="">Department</option>
                                <option value="pediatery">Pediatery</option>
                                <option value="Determology">Determology</option>
                                <option value="Surgery">Surgery</option>
                            </select>
                        </div>
                        <div className="px-2 ">
                            <select name="" id="" className='bg-white border-2 border-[#00000020]  rounded-2xl outline-none px-2 py-2' value={selectedHospital} onChange={e => setSelectedHospital(e.target.value)}>
                                <option value="">Hospital</option>
                                <option value="Legacy">Legacy</option>
                                <option value="Kanombe">Kanombe</option>
                                <option value="Faisal">Faisal</option>
                            </select>
                        </div>
                        <div className="px-2 ">
                            <select name="" id="" className='bg-white border-2 border-[#00000020]  rounded-2xl outline-none px-2 py-2' value={selectedDoctor} onChange={e => setSelectedDoctor(e.target.value)}>
                                <option value="">Doctor</option>
                                <option value="Kanimba">Kanimba</option>
                                <option value="Sebatunzi">Sebatunzi</option>
                                <option value="Mpano">Mpano</option>
                            </select>
                        </div>
                    </div>
                    {authUser?.role == "SCHEDULE_MANAGER" &&
                    <div className="md:flex hidden justify-end gap-4">
                        <div className='flex gap-2'>
                            <button disabled={showAction ? false : true} onClick={() => setSendAppModal(true)} className='py-4 bg-linear border-backG border-2 text-backG flex place-items-center justify-center px-4 gap-2 rounded-lg'>
                                <FaMap className='text-backG' />
                                <span>Reschedule App...nts</span>
                            </button>
                            <SendAppointments SendAppModal={SendAppModal} onClose={() => setSendAppModal(false)} />
                            {/* <button onClick={() => setSendAppModal(true)} className='py-4 ripple text-[14px] bg-linear border-backG border-2 text-backG flex place-items-center justify-center px-4  rounded-lg  gap-6'>
                                <FaPaperPlane className='text-backG' />
                                <span>Send Appointment</span>
                            </button> */}
                            {/* <MapAppointments appointmentId={appointment.appointment_id} MapModal={MapModal} onClose={() => setMapModal(false)} /> */}
                        </div>
                    </div>
                    }
                </div>
                <div className=' w-full overflow-x-auto'>
                    <table className=' table-auto w-full'>
                        <thead>
                            <tr>
                                <th className='py-5 text-[#000000c8] text-sm '>Time</th>
                                {authUser?.role == "SCHEDULE_MANAGER" && <th className='py-5 text-[#000000c8] text-sm '>Patient Name</th> }
                                <th className='py-5 text-[#000000c8] text-sm '>Hospital</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Department</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Doctor's name</th>
                                <th className='py-5 text-[#000000c8] text-sm '>Appointment Date</th>
                                <th className='py-5 text-[#000000c8] text-sm '>{authUser?.role == "SCHEDULE_MANAGER" ? "Appointment Status" : "Book Appointment"}</th>
                            </tr>
                        </thead>
                        <tbody>
                          {handleFilter().length > 0 ? (
                            handleFilter().filter((appointment: any) => {
                              // Check if user role is "PATIENT" and appointment status is "CREATED"
                              if (authUser.role === "PATIENT") {
                                return appointment.appointmentStatus === "CREATED";
                              }
                              // For other roles, no filter is applied
                              return true;
                            })
                            .map((appointment: any, index: number) => (
                            <tr
                             key={appointment.appointmentDate + index++}
                             className='bg-inputG group hover:cursor-pointer hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white py-4'
                            >
                                <td className='py-2  text-center flex place-items-center  whitespace-nowrap  lg:px-5 '>
                                  {authUser?.role == "SCHEDULE_MANAGER" &&
                                    <input type="checkbox" className="h-4 w-4 bg-inputG" onClick={() => setShowActions(true)} />
                                  }
                                    <span className='text-[#00000043] pl-2 font-bold'>{appointment.time}</span>
                                </td>
                                {authUser?.role == "SCHEDULE_MANAGER" && <td className='py-2  whitespace-nowrap lg:px-5 text-center'>
                                    <span className='text-black font-bold'>{appointment.patientName ? appointment.patientName : "Not booked"}</span>
                                </td>}
                                <td className='px-10 whitespace-nowrap text-center'>
                                    <span className='text-[#00000043]'>{appointment.hospital}</span>
                                </td>
                                <td className='px-10 whitespace-nowrap text-center'>
                                    <span className='text-[#00000043]'>{appointment.department}</span>
                                </td>
                                <td className='px-10 whitespace-nowrap text-center'>
                                    <span className='text-[#00000043]'>{appointment?.showDoctor == true ? appointment.doctorName : ""}</span>
                                </td>
                                <td className='px-10  whitespace-nowrap py-2 text-center flex justify-center place-items-center '>
                                    {unixTimeToUsualDate(appointment.appointmentDate)}
                                </td>
                                {authUser?.role == "PATIENT" && <td className='px-10 whitespace-nowrap text-center gap-10 text-backG'>
                                  <button onClick={() => setMapModal(true)} className='hover:bg-slate-100 group-hover:bg-inputG p-3 rounded-lg'> Book</button> <MapAppointments MapModal={MapModal} appointmentId={appointment.appointment_id} onClose={() => setMapModal(false)} />
                                </td>}
                                {authUser?.role == "SCHEDULE_MANAGER" && <td className='px-10 whitespace-nowrap text-center gap-10 text-backG'>
                                  <button className='hover:bg-slate-100 group-hover:bg-inputG p-3 rounded-lg'></button> {appointment.appointmentStatus}
                                </td>}

                            </tr>
                            ))
                            ) : (
                              <tr className="bg-slate-50">
                                <td className="px-10 py-2">
                                  <FetchDataLoader />
                                </td>
                                <td className="font-bold animate-pulse" colSpan={7}>
                                  No appointments found
                                </td>
                              </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="px-5 py-3 flex justify-end">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="mx-1 px-3 py-1 rounded-md bg-blue-600 text-white"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={(currentPage * itemsPerPage) >= appointments.length}
                        className="mx-1 px-3 py-1 rounded-md bg-blue-600 text-white"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AppointmentList;
