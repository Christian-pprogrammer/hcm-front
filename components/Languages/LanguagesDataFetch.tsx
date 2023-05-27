import React from 'react'
import { ILanguage } from '../../utils/ModalTypes'
import { FaCheck } from 'react-icons/fa'

const LanguagesDataFetch = ({ language }: { language: ILanguage }) => {
    return (
        <tr key={language.language_id} className='bg-inputG font-semibold py-4 hover:cursor-pointer  hover:bg-white duration-300 hover:drop-shadow-lg border-4 border-white'>
            <td className='py-4 px-10 whitespace-nowrap '>
                {language.language_name}
            </td>
            <td className='py-4  whitespace-nowrap px-10 '>
                {language.language_standard_code}
            </td>
            <td className='px-10  whitespace-nowrap py-4'>
                {language.status === 'Active' ? <div className='text-backG bg-linear w-10 h-10 border-2 border-backG flex justify-center place-items-center rounded-full font-bold '><FaCheck /></div> : <span className='text-[#FF1744] font-bold'>Inactive</span>}
            </td>
            <td className='whitespace-nowrap px-10 text-[#00000037]'>
                {language.language_description}
            </td>
        </tr>
    )
}

export default LanguagesDataFetch