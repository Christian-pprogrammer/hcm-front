import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { ISchedule, IUser } from "../../../utils/ModalTypes";
import userService from "../../../services/users/user.service";
import { notifyError } from "../../alert";
import servicesService from "../../../services/services/services.service";
import doctorService from "../../../services/users/doctor.service";
import { useSelector } from "react-redux";
import { IService } from "../../../utils/Prices";

const BasicScheduleInfo = ({
  FormData,
  setFormData,
}: {
  FormData: ISchedule;
  setFormData: React.Dispatch<React.SetStateAction<ISchedule>>;
}) => {
  const [servicesArr, setServiceArr] = useState<IService[]>([]);
  // const []
  const errors: string[] = [];
  const authUser = useSelector((state: any) => state.authUser);
  const hospitalId = authUser.user.hospital.hospitalId;
  const [serviceId, setServiceId] = useState('');
  let [DoctorArr, setDoctorArr] = useState<IUser[]>([]);
  if (!FormData.doctor_id) {
    errors.push("The Doctor is required!");
  }
  if (!FormData.service_id) {
    errors.push("The Service is required!");
  }
  if (!FormData.type) {
    errors.push("Select hour orientation");
  }

  useEffect(() => {
    async function fetchData() {
      try {
        // const data = await servicesService.getHospitalServices(hospitalId);
        const data = await servicesService.getAllServices();
        console.log(data);
        setServiceArr(data.data);
      } catch (error: any) {
        const ERROR_MESSAGE = error.response
          ? error.response?.data?.error || "Not Fetched, try again!"
          : error.error;
        reportError(ERROR_MESSAGE);
      }
    }
    fetchData();
  }, [hospitalId]);

  async function fetchDoctors(servId: string) {
    try {
      const doctor_arr_data = await doctorService.getDoctorsByHospitalAndService(hospitalId, servId);
      console.log(doctor_arr_data.data);
      setDoctorArr(doctor_arr_data.data.data);
    } catch (error: any) {
      const ERROR_MESSAGE = error.response
          ? error.response?.data?.error || "Not Fetched, try again!"
          : error.error;
        reportError(ERROR_MESSAGE);
    }
  }


  return (
    <>
      <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">
          Services
        </label>
        <select
          value={FormData?.service_id}
          onChange={(e) =>
            [setFormData({ ...FormData, service_id: e.target.value }), fetchDoctors(e.target.value)]
          }
          className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Select the status"
        >
          <option value={""}>{"Select Service"}</option>
          {servicesArr &&
            servicesArr.map((option: IService) => (
              <option key={option.service_id} value={option.service_id}>
                {option.service}
              </option>
            ))}
        </select>
      </div>
      <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">Doctor</label>
        <select
          value={FormData?.doctor_id}
          onChange={(e) =>
            [setFormData({ ...FormData, doctor_id: e.target.value }), setServiceId(e.target.value)]
          }
          className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Select the status"
        >
          <option value={""}>{"Select Doctor"}</option>
          {DoctorArr &&
            DoctorArr.map((option: IUser) => (
              <option key={option.id} value={option.id}>
                {option.fullName}
              </option>
            ))}
        </select>
      </div>
      <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">Hour Orientation</label>
        <select
          value={FormData?.type}
          onChange={(e) =>
            setFormData({ ...FormData, type: e.target.value })
          }
          className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Select the hour orientation"
        >
          <option value={""}>{"Select hour orientation"}</option>
          <option value={"FIXED"}>Fixed hour</option>
          <option value={"VARIABLE"}>Variable hour</option>
        </select>
      </div>

      {errors.length > 0 && (
        <div className="py-2">
          <ul>
            {errors.map((error: string, index: number) => (
              <li
                key={index}
                className="flex text-[10px] place-items-center gap-6 text-red-500"
              >
                <span aria-hidden="true">&times;</span>
                <span>{error}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BasicScheduleInfo;
