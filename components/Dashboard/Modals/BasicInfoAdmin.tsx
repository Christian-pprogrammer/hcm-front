import React, { useEffect, useState } from 'react';
import { IRole, IUser } from '../../../utils/ModalTypes';
import roleService from '../../../services/role/role.service';
import { system_users } from '../../../utils/constants';

const BasicInfoAdmin = ({ FormDataAdmin, setFormDataAdmin }: { FormDataAdmin: IUser, setFormDataAdmin: React.Dispatch<React.SetStateAction<IUser>> }) => {
    // const relevantErrors = errors.filter(error => error.includes("password") || error.includes("role"));
    const errors: string[] = []
    const [roles, setRoles] = useState<IRole[]>([])

    if (!FormDataAdmin.role) {
        errors.push("The role is required!");
    }
    if (!FormDataAdmin.password) {
        errors.push("The password is required!");
    }

    useEffect(() => {
        async function handleRoleFetch() {
            const roles = await roleService.getAllRoles();
            setRoles(roles?.data.filter((roleObj: IRole) => (roleObj.role !== system_users.SUPER_ADMIN)));
        }
        handleRoleFetch()
    }, [])

    return (
        <>
            <div className='py-1'>
                <label className="block text-gray-700 text-sm font-bold">
                    Password
                </label>
                <input value={FormDataAdmin?.password} onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, password: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password credentials" />
            </div>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Role
                </label>
                <select value={FormDataAdmin?.role} onChange={(e) => setFormDataAdmin({ ...FormDataAdmin, role: e.target.value })} className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                    {roles && roles.map((option: IRole) => (
                        <option key={option.role_id} value={option.role}>{option.role}</option>
                    ))}
                </select>
            </div>
            {errors.length > 0 && (
                <div className='py-2'>
                    <ul>
                        {errors.map((error: string, index: number) => (
                            <li key={index + 1} className='flex text-[10px] place-items-center gap-6 text-red-500'>
                                <span aria-hidden="true">&times;</span><span>{error}</span></li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}
export default BasicInfoAdmin
