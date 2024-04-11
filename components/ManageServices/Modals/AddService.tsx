import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import servicesService from '../../../services/services/services.service';
import { notifyError, notifySuccess } from '../../alert';
import { useSelector } from 'react-redux';
import Multiselect from 'multiselect-react-dropdown';
import { AddServices, IService } from '../../../utils/Prices';

const AddService = ({ showModal, onClose }: { showModal: Boolean, onClose: () => void }) => {
  interface SelectedData {
    service: string;
    service_id: string;
  }
  const [FormData, setFormData] = useState<AddServices>({
    serviceIds: [],
    moible: ""
  });

  const [isBrowser, setBrowser] = useState<Boolean>(false);
  const authUser = useSelector((state: any) => state.authUser);
  const [servicesArr, setServiceArr] = useState<IService[]>([]);
  const [selectData, setSelectData] = useState<SelectedData[]>([]);
  const [allServiceIds, setAllServiceIds] = useState<string[]>([]);

    const handleOnServiceSelect = (selectedServices: SelectedData[]) => {
      setSelectData(selectedServices);
      const serviceIds = selectedServices.map(service => service.service_id);
      setFormData({...FormData, serviceIds})
      }

    useEffect(() => {
        setBrowser(true)
        async function fetchData() {
          try {
              const data = await servicesService.getAllServices();
              setServiceArr(data.data);
          } catch (error: any) {
              const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Error fetching services, try again!" : error.error;
              reportError(ERROR_MESSAGE);
              notifyError(ERROR_MESSAGE);
          }
      }
      fetchData()
    }, [])
    const handleClose = () => {
        onClose()
    }
    const handleClick = async (e: any) => {
        e.preventDefault();
        console.log(FormData);
        try {
            const hospitalId = await authUser.user?.hospital?.hospitalId;
            let result = await servicesService.addServiceToHospital(hospitalId, FormData);
            if (result.status === 200) {
                notifySuccess("Successfully removed all services");
                handleClose();
            }
        } catch (error: any) {
            const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Failure, try again!" : error.error;
            notifyError(ERROR_MESSAGE);
            console.log(error);
        }
    }
    const ModalContent = showModal ? (
        <div className="modal-portal bg-modalG h-screen w-screen flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
            <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow w-full md:w-[30vw]">
                <div className="modal-content">
                    <div className="modal-header py-4 flex justify-between">
                        <h5 className="modal-title font-bold">Add services to hospital</h5>
                        <button type="button" className="close text-backG hover:scale-125 duration-300 text-xl " data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="py-1">
                      <label className="block text-gray-700 text-sm font-bold">
                          Services
                      </label>
                      <Multiselect onSelect={handleOnServiceSelect} loading={false} options={servicesArr} displayValue={"service"} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="py-1">
                      <label className="block text-gray-700 text-sm font-bold">
                          Telephone
                      </label>
                      <input value={FormData?.moible} onChange={(e) => setFormData({ ...FormData, moible: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your number" />
                    </div>
                    <div className="modal-footer flex py-4 justify-between">
                        <button type="button" className="btn ripple bg-slate-500 text-white py-2 px-6 lg:px-6 rounded-sm shadow-lg lg:py-2  btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                        <button type="button" className="btn ripple bg-backG text-white py-2 px-6 lg:px-6 lg:py-2 rounded-sm shadow-lg  btn-secondary" data-dismiss="modal" onClick={handleClick}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    ) : null
    if (isBrowser) {
        return ReactDOM.createPortal(ModalContent, document.getElementById('modal-root') as HTMLElement)
    } else {
        return null
    }

}

export default AddService
