import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaCheck, FaGlobe, FaPlus } from 'react-icons/fa'
import AddLanguage from './Modals/AddLanguage';
import { ILanguage } from '../../utils/ModalTypes';
import languageService from '../../services/users/language.service';
import { notifyError } from '../alert';
import LanguagesDataFetch from './LanguagesDataFetch';
import FetchDataLoader from '../loaders/FetchDataLoader';

const LanguagesTable = () => {
    const [searchtext, setSearchText] = useState<string>('');
    const [AddLanguageModal, setAddLanguageModal] = useState<boolean>(false);
    const [languagesArr, setLanguageArr] = useState<ILanguage[]>([])
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await languageService.getAllLanguage();
                setLanguageArr(data.data);
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
                notifyError(ERROR_MESSAGE);
            }
        }
        fetchData()
    }, []);
    const STATUS = 'Active'
    return (
        <div className="px-2 bg-[#F7F7F7] ">
            <div className="content-link py-2 text-backG text-[12px] flex gap-4">
                <FaGlobe /><Link href='/HCM/Dashboard'>Manage Languages / </Link>
            </div>
            <div className="bg-white border-2 h-[85vh]  rounded-lg border-[#0000002]">
                <div className="flex px-5 place-items-center justify-between gap-6 py-5">
                    <div className='flex gap-10'>
                        <h1 className="pt-3 font-bold text-[1.1em]">Languages Statistics</h1>
                        <div className="px-2 ">
                            <select name="" id="" className='bg-white border-2 border-[#00000020]  rounded-2xl outline-none px-2 py-2'>
                                <option defaultValue="today">Today</option>
                                <option defaultValue="today">Yesterday</option>
                                <option defaultValue="today">Week</option>
                                <option defaultValue="today">Month</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:flex hidden justify-end gap-4">
                        <div>
                            <input type="text" onChange={(e) => setSearchText(e.target.value)} value={searchtext} className="form-control rounded-lg outline-none border-none text-backG py-4 px-20 bg-inputG" placeholder="Search Account Name" />
                        </div>
                        <div>
                            <button onClick={() => setAddLanguageModal(true)} className='py-4 ripple text-[14px] bg-backG text-white flex place-items-center justify-center px-8  rounded-lg  gap-6'>
                                <FaPlus />
                                <span>New Language</span>
                            </button>
                            <AddLanguage showModal={AddLanguageModal} onClose={() => setAddLanguageModal(false)} />
                        </div>
                    </div>
                </div>
                <div className=' w-full overflow-x-auto'>
                    <table className=' table-auto w-full  '>
                        <thead>
                            <tr className='text-left'>
                                <th className='py-5 text-[#000000c8] text-sm px-10'>Language</th>
                                <th className='py-5 text-[#000000c8] text-sm px-10'>Language Code</th>
                                <th className='py-5 text-[#000000c8] text-sm px-10'>Language Status</th>
                                <th className='py-5 text-[#000000c8] text-sm px-10'>Description</th>
                            </tr>
                        </thead>
                        <tbody className='text-[14px]'>
                            {languagesArr ? languagesArr.map((language: ILanguage) => (
                                <LanguagesDataFetch language={language} key={language.language_id} />
                            )) :
                                <tr>
                                    <td className='px-10 py-4'>
                                        <FetchDataLoader />
                                    </td>
                                    <td className='font-bold animate-pulse'>Fetching the data...</td>
                                </tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LanguagesTable