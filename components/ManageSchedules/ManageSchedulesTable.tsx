import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FaCheck, FaHome, FaPencilAlt, FaPlus, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import scheduleService from "../../services/schedules/schedule.service";
import { notifyError } from "../alert";
import DeleteSchedule from "./Modals/DeleteSchedule";
import EditSchedule from "./Modals/EditSchedule";
import NewSchedule from "./Modals/NewSchedule";
import FetchDataLoader from "../loaders/FetchDataLoader";
import { ISchedule } from "../../utils/ModalTypes";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import doctorService from "../../services/users/doctor.service";

type DoctorNamesType = { [key: string]: string };

const ManageSchedulesTable = ({ showAppFunc }: { showAppFunc: () => void }) => {
  const [DeleteModal, setDeleteModal] = useState<boolean>(false);
  const [ScheduleData, setScheduleData] = useState<ISchedule[]>([]);
  const [EditModal, setEditModal] = useState<boolean>(false);
  const [NewScheduleModal, setNewScheduleModal] = useState<boolean>(false);
  const [searchtext, setSearchText] = useState<string>("");
  const [doctorNames, setDoctorNames] = useState<DoctorNamesType>({});
  const authUser = useSelector((state: any) => state.authUser);
  const router = useRouter().pathname;

  useEffect(() => {
    async function fetchData() {
      try {
        const schedules = await scheduleService.getHospitalSchedules(authUser.user.hospital.hospitalId);
        console.log(schedules);
        setScheduleData(schedules.data);

        // Fetch doctor names for each schedule
      const doctorNamesMap: DoctorNamesType = {};
      await Promise.all(
        schedules.data.map(async (schedule: any) => {
          try {
            const doctorName = await doctorService.getDoctor(schedule.doctorId);
            doctorNamesMap[String(schedule.doctorId)] = doctorName.data.fullName;
          } catch (error) {
            console.error(`Error fetching doctor name for schedule ${schedule.id}:`, error);
          }
        })
      );
      setDoctorNames(doctorNamesMap);
      } catch (error: any) {
        const ERROR_MESSAGE = error.response
          ? error.response?.data?.error || "Not Fetched, try again!"
          : error.error;
        notifyError(ERROR_MESSAGE);
      }
    }
    fetchData();
  }, []);

  const unixTimeToUsualDate = (unixTimestamp: string) => {
    // Create a new Date object using the Unix timestamp (in milliseconds)
    const date = new Date(unixTimestamp);

    // Extract the components of the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');

    // Construct the date string in the desired format
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  const handleShowApp = () => {
    showAppFunc();
  };
  var element = (
    <div className="bg-white border-2 h-5/6  rounded-lg border-[#0000002] overflow-auto">
      <div className="flex px-5 place-items-center justify-between gap-6 py-5">
        <div className="flex gap-10">
          <div className="px-2 ">
            <select
              name=""
              id=""
              className="form-control rounded-lg outline-none border-none text-backG py-4 px-10 bg-inputG"
            >
              <option defaultValue="">Selct Doctor</option>
              <option defaultValue="today">Yesterday</option>
              <option defaultValue="today">Week</option>
              <option defaultValue="today">Month</option>
            </select>
          </div>
          <div className="px-2 ">
            <select
              name=""
              id=""
              className="form-control rounded-lg outline-none border-none text-backG py-4 px-10 bg-inputG"
            >
              <option defaultValue="">All Services</option>
              <option defaultValue="today">Yesterday</option>
              <option defaultValue="today">Week</option>
              <option defaultValue="today">Month</option>
            </select>
          </div>
          <div className="px-2 ">
            <select
              name=""
              id=""
              className="form-control rounded-lg outline-none border-none text-backG py-4 px-10 bg-inputG"
            >
              <option defaultValue="">All Statuses</option>
              <option defaultValue="today">Yesterday</option>
              <option defaultValue="today">Week</option>
              <option defaultValue="today">Month</option>
            </select>
          </div>
        </div>
        <div className="md:flex hidden justify-end gap-4">
          <div>
            <DatePicker placeholder="Select Dates" inputClass="form-control rounded-lg outline-none border-none text-backG py-4 px-10 bg-inputG" multiple plugins={[<DatePanel key={"key"} />]} />
          </div>
          <div>
            <button
              onClick={() => setNewScheduleModal(true)}
              className="py-4 ripple text-[14px] bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6"
            >
              <FaPlus />
              <span>New Schedule</span>
            </button>
            {NewScheduleModal && (
              <NewSchedule
                NewScheduleModal={NewScheduleModal}
                onClose={() => setNewScheduleModal(false)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Doctor</th>
              <th scope="col" className="px-6 py-3">Schedule Status</th>
              <th scope="col" className="px-6 py-3">Service Department</th>
              <th scope="col" className="px-6 py-3">Appointment Slots</th>
              <th scope="col" className="px-6 py-3">Date of Start</th>
              <th scope="col" className="px-6 py-3">Number of days</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ScheduleData ? (
              ScheduleData.map((schedule: any) => (
                <tr
                  key={schedule.schedule_id}
                  onClick={handleShowApp}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {doctorNames[String(schedule.doctorId)] || 'Loading...'}
                  </th>
                  <td className="px-6 py-4">
                    {
                      schedule?.scheduleStatus == "INCOMPLETE" || "ACTIVE" ? (<span className="text-[#45ff17] font-bold">Incomplete</span>): schedule?.scheduleStatus == "COMPLETED" ? (<span className="text-[#ff2e17] font-bold">Completed</span>): <span className="text-[#3a32d4] font-bold">Finished</span>
                    }
                  </td>
                  <td className="px-6 py-4">{schedule?.serviceName}</td>
                  <td className="px-6 py-4">{schedule?.appointmentNumber}</td>
                  <td className="px-6 py-4">{unixTimeToUsualDate(schedule?.scheduleDates[0].date)}</td>
                  <td className="px-6 py-4">{(schedule?.scheduleDates).length}</td>
                  <td className="flex items-center px-6 py-4 space-x-3 text-backG">
                    <button onClick={() => setEditModal(true)}>
                      <FaPencilAlt />
                    </button>
                    <EditSchedule
                      EditModal={EditModal}
                      onClose={() => setEditModal(false)}
                    />
                    <button onClick={() => setDeleteModal(true)}>
                      {" "}
                      <FaTrash />
                    </button>{" "}
                    <DeleteSchedule
                      showModal={DeleteModal}
                      onClose={() => setDeleteModal(false)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-slate-50">
                <td className="px-10 py-2">
                  <FetchDataLoader />
                </td>
                <td className="font-bold animate-pulse">
                  Fetching the data...
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <nav className="flex items-center justify-between p-2" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
      </div>
    </div>
  );
  return (
    <div>
      {router == "/schedule-manager/dashboard" ? (
        element
      ) : (
        <div className="px-2 bg-[#F7F7F7]">
          <div className="content-link py-2 text-backG text-[12px] flex gap-4">
            <FaHome />
            <Link href="/schedule-manager/schedules">Manage Schedules / </Link>
          </div>
          <div>{element}</div>
        </div>
      )}
    </div>
  );
};

export default ManageSchedulesTable;
