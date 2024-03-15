import React, { useState, useEffect } from 'react'
import { GenderOptions, ISelectData, NewUserStatusArr } from '../../../utils/SelectOptions'
import Multiselect from 'multiselect-react-dropdown';
import { IRole, IUser } from '../../../utils/ModalTypes';
import roleService from '../../../services/role/role.service';
import { system_users } from '../../../utils/constants';
import servicesService from '../../../services/services/services.service';
import { IService } from '../../../utils/Prices';
import { notifyError } from '../../alert';
import { useSelector } from 'react-redux';

const AdvancedUserInfo = ({ FormData, setFormData }: { FormData: IUser, setFormData: React.Dispatch<React.SetStateAction<IUser>> }) => {
    interface SelectedData {
        SelectedServiceName: string;
    }
    const errors: string[] = [];
    const [selectData, setSelectData] = useState<SelectedData[]>([]);
    const [roles, setRoles] = useState<IRole[]>([]);
    const [servicesArr, setServiceArr] = useState<IService[]>([]);
    const authUser = useSelector((state: any) => state.authUser);
    const hospitalId = authUser.user.hospital.hospitalId
    const handleOnServiceSelect = (selectedServices: SelectedData[]) => {
        setSelectData(selectedServices);
        const serviceNames = selectedServices.map(service => service.SelectedServiceName);
        setFormData({ ...FormData, services: serviceNames });
    }

    if (!FormData.role) {
        errors.push("The role is required!");
    }
    if (!FormData.status) {
        errors.push("The status is required!");
    }
    if (!FormData.services) {
        errors.push("The services is required!");
    }
    if (!FormData.gender) {
        errors.push("The gender is required!");
    }
    if (FormData.password !== FormData.confirmPassword) {
        errors.push("The Password Should match the confirm password");
    }
    useEffect(() => {
        async function handleRoleFetch() {
            const roles = await roleService.getAllRoles();
            setRoles(roles?.data.filter((roleObj: IRole) => (roleObj.role !== system_users.SUPER_ADMIN && roleObj.role !== system_users.GROUP_ADMIN && roleObj.role !== system_users.HOSPITAL_ADMIN)));
        }
        handleRoleFetch()
        async function fetchData() {
            try {
                const groupId = await authUser.user?.group?.groupId
                const data = await servicesService.getAllServices();
                setServiceArr(data.data);
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Services Error, try again!" : error.error;
                reportError(ERROR_MESSAGE);
            }
        }
        fetchData()
        async function fetchServices() {
            try {
                const data = await servicesService.getHospitalServices(hospitalId);
                setServiceArr(data.data);
                console.log("The data", data)
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
                reportError(ERROR_MESSAGE);
            }
        }
        fetchServices();
    }, [authUser, hospitalId])
    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Gender Options
                </label>
                <select onChange={(e) => setFormData({ ...FormData, gender: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                    {GenderOptions.map((option: ISelectData) => (
                        <option key={option.id} value={option.value}>{option.text}</option>
                    ))}
                </select>
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Role
                </label>
                <select value={FormData?.role} onChange={(e) => setFormData({ ...FormData, role: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                    <option value={''}>{'Select Role'}</option>
                    {roles && roles.map((option: IRole) => (
                        <option key={option.role_id} value={option.role}>{option.role}</option>
                    ))}
                </select>
            </div>

            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Working Status
                </label>
                <select onChange={(e) => setFormData({ ...FormData, status: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                    {NewUserStatusArr.map((option: ISelectData) => (
                        <option key={option.id} value={option.value}>{option.text}</option>
                    ))}
                </select>
            </div>

            {FormData?.role === system_users.DOCTOR &&
                <div className="py-1">
                    <label className="block text-gray-700 text-sm font-bold">
                        Services
                    </label>
                    <Multiselect onSelect={handleOnServiceSelect} loading={false} options={servicesArr} displayValue={"service"} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
            }
            {errors.length > 0 && (
                <div className='py-2'>
                    <ul>
                        {errors.map((error: string, index: number) => (
                            <li key={index} className='flex text-[10px] place-items-center gap-6 text-red-500'>
                                <span aria-hidden="true">&times;</span><span>{error}</span></li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default AdvancedUserInfo
