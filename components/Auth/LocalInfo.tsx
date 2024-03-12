import React, { useEffect, useRef, useState } from 'react';
import { LocationIcon } from '../../icons';
import { FormStructure } from '../../utils/FormData';

const provinces = [
    { name: 'City of Kigali', districts: ['Kicukiro', 'Gasabo', 'Nyarugenge'] },
    { name: 'East', districts: ['Nyagatare', 'Gatsibo', 'Kayonza', 'Rwamagana', 'Kirehe', 'Ngoma', 'Bugesera'] },
    { name: 'North', districts: ['Musanze', 'Burera', 'Gakenke', 'Gicumbi', 'Rulindo'] },
    { name: 'South', districts: ['Kamonyi', 'Muhanga', 'Ruhango', 'Huye', 'Gisagara', 'Nyamagabe', 'Nyaruguru', 'Nyanza'] },
    { name: 'West', districts: ['Nyabihu', 'Karongi', 'Rubavu', 'Ngororero', 'Rusizi', 'Rutsiro', 'Nyamasheke'] }
];

const districtsSectorsMap: any = {
    'Kicukiro': ['Gahanga', 'Gatenga', 'Gikondo', 'Kagarama', 'Kanombe', 'Kicukiro', 'Kigarama', 'Masaka', 'Niboye', 'Nyarugunga'],
    'Gasabo': ['Bumbogo', 'Gatsata', 'Jali', 'Gikomero', 'Gisozi', 'Jabana', 'Kinyinya', 'Ndera', 'Nduba', 'Rusororo', 'Rutunga', 'Kacyiru', 'Kimihurura', 'Kimironko', 'Remera'],
    'Nyarugenge': ['Gitega', 'Kanyinya', 'Kigali', 'Kimisagara', 'Mageragere', 'Muhima', 'Nyakabanda', 'Nyamirambo', 'Nyarugenge', 'Rwezamenyo'],
    'Nyagatare': ['Gatunda', 'Karama', 'Karangazi', 'Katabagemu', 'Kiyombe', 'Matimba', 'Mimuli', 'Mukama', 'Musheli', 'Nyagatare', 'Rukomo', 'Rwempasha', 'Rwimiyaga', 'Tabagwe'],
    'Gatsibo': ['Gasange', 'Gatsibo', 'Gitoki', 'Kabarore', 'Kageyo', 'Kiramuruzi', 'Kiziguro', 'Muhura', 'Murambi', 'Ngarama', 'Nyagihanga', 'Remera', 'Rugarama', 'Rwimbogo'],
    'Kayonza': ['Gahini', 'Kabare', 'Kabarondo', 'Mukarange', 'Murama', 'Murundi', 'Mwiri', 'Ndego', 'Nyamirama', 'Rukara', 'Ruramira', 'Rwinkwavu'],
    'Rwamagana': ['Fumbwe', 'Gahengeri', 'Gishari', 'Karenge', 'Kigabiro', 'Muhazi', 'Munyaga', 'Munyiginya', 'Musha', 'Muyumbu', 'Mwulire', 'Nyakariro', 'Nzige', 'Rubona'],
    'Kirehe': ['Gahara', 'Gatore', 'Kigarama', 'Kigina', 'Kirehe', 'Mahama', 'Mpanga', 'Musaza', 'Mushikiri', 'Nasho', 'Nyamugari', 'Nyarubuye'],
    'Ngoma': ['Gashanda', 'Karembo', 'Kazo', 'Mugesera', 'Murama', 'Mutenderi', 'Remera', 'Rukira', 'Rukumberi', 'Rurenge', 'Sake', 'Zaza'],
    'Bugesera': ['Gashora', 'Juru', 'Kamabuye', 'Ntarama', 'Mareba', 'Mayange', 'Musenyi', 'Mwogo', 'Ngeruka', 'Nyamata', 'Nyarugenge', 'Rilima', 'Ruhuha', 'Rweru', 'Shyara'],
    'Kamonyi': ['Gacurabwenge', 'Karama', 'Kayenzi', 'Kayumbu', 'Mugina', 'Musambira', 'Ngamba', 'Nyamiyaga', 'Nyarubaka', 'Rugalika', 'Rukoma', 'Runda'],
    'Muhanga': ['Muhanga', 'Cyeza', 'Kibangu', 'Kiyumba', 'Mushishiro', 'Kabacuzi', 'Nyabinoni', 'Nyamabuye', 'Nyarusange', 'Rongi', 'Rugendabari', 'Shyogwe'],
    'Ruhango': ['Kinazi', 'Byimana', 'Bweramana', 'Mbuye', 'Ruhango', 'Mwendo', 'Kinihira', 'Ntongwe', 'Kabagari'],
    'Huye': ['Gishamvu', 'Karama', 'Kigoma', 'Kinazi', 'Maraba', 'Mbazi', 'Mukura', 'Ngoma', 'Ruhashya', 'Huye', 'Rusatira', 'Rwaniro', 'Simbi', 'Tumba'],
    'Nyanza': ['Busasamana', 'Busoro', 'Cyabakamyi', 'Kibirizi', 'Kigoma', 'Mukingo', 'Muyira', 'Ntyazo', 'Nyagisozi', 'Rwabicuma'],
    'Nyaruguru': ['Cyahinda', 'Busanze', 'Kibeho', 'Mata', 'Munini', 'Kivu', 'Ngera', 'Ngoma', 'Nyabimata', 'Nyagisozi', 'Muganza', 'Ruheru', 'Ruramba', 'Rusenge'],
    'Nyamagabe': ['Buruhukiro', 'Cyanika', 'Gatare', 'Kaduha', 'Kamegeli', 'Kibirizi', 'Kibumbwe', 'Kitabi', 'Mbazi', 'Mugano', 'Musange', 'Musebeya', 'Mushubi', 'Nkomane', 'Gasaka', 'Tare', 'Uwinkingi'],
    'Gisagara': ['Gikonko', 'Gishubi', 'Kansi', 'Kibilizi', 'Kigembe', 'Mamba', 'Muganza', 'Mugombwa', 'Mukindo', 'Musha', 'Ndora', 'Nyanza', 'Save'],
    'Nyabihu': ['Bigogwe', 'Jenda', 'Jomba', 'Kabatwa', 'Karago', 'Kintobo', 'Mukamira', 'Muringa', 'Rambura', 'Rugera', 'Rurembo', 'Shyira'],
    'Rubavu': ['Bugeshi', 'Busasamana', 'Cyanzarwe', 'Gisenyi', 'Kanama', 'Kanzenze', 'Mudende', 'Nyakiliba', 'Nyamyumba', 'Nyundo', 'Rubavu', 'Rugerero'],
    'Rusizi': ['Bugarama', 'Butare', 'Bweyeye', 'Gikundamvura', 'Gashonga', 'Giheke', 'Gihundwe', 'Gitambi', 'Kamembe', 'Muganza', 'Mururu', 'Nkanka', 'Nkombo', 'Nkungu', 'Nyakabuye', 'Nyakarenzo', 'Nzahaha', 'Rwimbogo'],
    'Nyamasheke': ['Ruharambuga', 'Bushekeri', 'Bushenge', 'Cyato', 'Gihombo', 'Kagano', 'Kanjongo', 'Karambi', 'Karengera', 'Kirimbi', 'Macuba', 'Nyabitekeri', 'Mahembe', 'Rangiro', 'Shangi'],
    'Ngororero': ['Bwira', 'Gatumba', 'Hindiro', 'Kabaya', 'Kageyo', 'Kavumu', 'Matyazo', 'Muhanda', 'Muhororo', 'Ndaro', 'Ngororero', 'Nyange', 'Sovu'],
    'Rutsiro': ['Boneza', 'Gihango', 'Kigeyo', 'Kivumu', 'Manihira', 'Mukura', 'Murunda', 'Musasa', 'Mushonyi', 'Mushubati', 'Nyabirasi', 'Ruhango', 'Rusebeya'],
    'Karongi': ['Bwishyura', 'Mutuntu', 'Rubengera', 'Gitesi', 'Ruganda', 'Rugabano', 'Gishyita', 'Gishari', 'Mubuga', 'Murambi', 'Murundi', 'Rwankuba', 'Twumba'],
    'Musanze': ['Busogo', 'Cyuve', 'Gacaca', 'Gashaki', 'Gataraga', 'Kimonyi', 'Kinigi', 'Muhoza', 'Muko', 'Musanze', 'Nkotsi', 'Nyange', 'Remera', 'Rwaza', 'Shingiro'],
    'Burera': ['Bungwe', 'Butaro', 'Cyanika', 'Gahunga', 'Gitovu', 'Kagogo', 'Kinoni', 'Kinyababa', 'Kivuye', 'Nemba', 'Rugarama', 'Rugengabari', 'Ruhunde', 'Rusarabuye', 'Rwerere'],
    'Gakenke': ['Busengo', 'Coko', 'Cyabingo', 'Gakenke', 'Gashenyi', 'Mugunga', 'Janja', 'Kamubuga', 'Karambo', 'Kivuruga', 'Mataba', 'Minazi', 'Muhondo', 'Muyongwe', 'Muzo', 'Nemba', 'Ruli', 'Rusasa', 'Rushashi'],
    'Gicumbi': ['Bukure', 'Bwisige', 'Byumba', 'Cyumba', 'Giti', 'Kaniga', 'Manyagiro', 'Miyove', 'Kageyo', 'Mukarange', 'Muko', 'Mutete', 'Nyamiyaga', 'Nyankenke II', 'Rubaya', 'Rukomo', 'Rushaki', 'Rutare', 'Ruvune', 'Rwamiko', 'Shangasha'],
    'Rulindo': ['Base', 'Burega', 'Bushoki', 'Buyoga', 'Cyinzuzi', 'Cyungo', 'Kinihira', 'Kisaro', 'Masoro', 'Mbogo', 'Murambi', 'Ngoma', 'Ntarabana', 'Rukozo', 'Rusiga', 'Shyorongi', 'Tumba']
};

const LocalInfo = ({ FormData, setFormData, onValidityChange} : {FormData:FormStructure , setFormData :any, onValidityChange: (newValidity: boolean) => void }) => {
    const [isProvinceValid, setIsProvinceValid] = useState<boolean>(true);
    const [isDistrictValid, setIsDistrictValid] = useState<boolean>(true);
    const [isSectorValid, setIsSectorValid] = useState<boolean>(true);
    const validityRef = useRef<boolean>(false);

    useEffect(() => {
        setIsProvinceValid(!!FormData.province);
        setIsDistrictValid(!!FormData.district);
        setIsSectorValid(!!FormData.sector);
        const isValid = !! (isProvinceValid && isDistrictValid && isSectorValid);
        validityRef.current = isValid;
       onValidityChange(validityRef.current);
    }, [FormData, isDistrictValid, isProvinceValid, isSectorValid, onValidityChange]);

    const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...FormData, province: event.target.value, district: '', sector: '' });
    };

    const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...FormData, district: event.target.value, sector: '' });
    };

    const handleSectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...FormData, sector: event.target.value });
    };

    return (
        <>
            <div className='pt-4'>
                <label className='font-bold text-[12px]'>Province <span className='text-red-500 pl-2'>*</span> </label>
                <div className='py-2'>
                    <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                        <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                            <LocationIcon />
                        </div>
                        <select
                            value={FormData.province}
                            onChange={handleProvinceChange}
                            className='place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md text-backG'
                        >
                            <option value="">Select Province</option>
                            {provinces.map((province, index) => (
                                <option key={index} value={province.name}>{province.name}</option>
                            ))}
                        </select>
                    </div>
                    <small className={`text-[10px] ${!isProvinceValid && 'text-red-500'}`}>
                        {!isProvinceValid ? "Please select a province" : ""}
                    </small>
                </div>
            </div>

            {FormData.province && (
                <div className='py-4'>
                    <label className='font-bold text-[12px]'>District <span className='text-red-500 pl-2'>*</span> </label>
                    <div className='py-2'>
                        <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                            <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                                <LocationIcon />
                            </div>
                            <select
                                value={FormData.district}
                                onChange={handleDistrictChange}
                                className='place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md text-backG'
                            >
                                <option value="">Select District</option>
                                {provinces.find(p => p.name === FormData.province)?.districts.map((district, index) => (
                                    <option key={index} value={district}>{district}</option>
                                ))}
                            </select>
                        </div>
                        <small className={`text-[10px] ${!isDistrictValid && 'text-red-500'}`}>
                            {!isDistrictValid ? "Please select a district" : ""}
                        </small>
                    </div>
                </div>
            )}

            {FormData.district && (
                <div className='py-4'>
                    <label className='font-bold text-[12px]'>Sector <span className='text-red-500 pl-2'>*</span> </label>
                    <div className='py-2'>
                        <div className='flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG '>
                            <div className='flex rounded-l-md place-items-center justify-center bg-inputG p-2'>
                                <LocationIcon />
                            </div>
                            <select
                                value={FormData.sector}
                                onChange={handleSectorChange}
                                className='place-items-center align-middle w-full px-2 py-4 bg-inputG outline-none rounded-r-md text-backG'
                            >
                                <option value="">Select Sector</option>
                                {districtsSectorsMap[FormData.district].map((sector: string, index: number) => (
                                    <option key={index} value={sector}>{sector}</option>
                                ))}
                            </select>
                        </div>
                        <small className={`text-[10px] ${!isSectorValid && 'text-red-500'}`}>
                            {!isSectorValid ? "Please select a sector" : ""}
                        </small>
                    </div>
                </div>
            )}
        </>
    );
};

export default LocalInfo;
