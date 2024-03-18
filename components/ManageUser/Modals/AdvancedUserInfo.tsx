import React, { useState, useEffect } from 'react'
import { GenderOptions, ISelectData } from '../../../utils/SelectOptions'
import Multiselect from 'multiselect-react-dropdown';
import { IUser } from '../../../utils/ModalTypes';
import servicesService from '../../../services/services/services.service';
import { IService } from '../../../utils/Prices';
import { useSelector } from 'react-redux';

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
const AdvancedUserInfo = ({ FormData, setFormData }: { FormData: IUser, setFormData: React.Dispatch<React.SetStateAction<IUser>> }) => {
    interface SelectedData {
        service: string;
        service_id: string;
    }
    const errors: string[] = [];
    const [selectData, setSelectData] = useState<SelectedData[]>([]);
    const [servicesArr, setServiceArr] = useState<IService[]>([]);
    const authUser = useSelector((state: any) => state.authUser);
    const hospitalId = authUser.user.hospital.hospitalId;

    const handleOnServiceSelect = (selectedServices: SelectedData[]) => {
        setSelectData(selectedServices);
        const serviceIds = selectedServices.map(service => service.service_id);
        setFormData({ ...FormData, servicesManaged: serviceIds });
    }

    if (!FormData.servicesManaged) {
        errors.push("The services is required!");
    }
    if (!FormData.gender) {
        errors.push("The gender is required!");
    }
    if (!FormData.province) {
      errors.push("The province is required!");
    }
    if (!FormData.district) {
      errors.push("The district is required!");
    }
    if (!FormData.sector) {
        errors.push("The sector is required!");
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await servicesService.getAllServices();
                console.log(data.data);
                setServiceArr(data.data);
            } catch (error: any) {
                const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Services Error, try again!" : error.error;
                reportError(ERROR_MESSAGE);
            }
        }
        fetchData()
        // async function fetchServices() {
        //     try {
        //         const data = await servicesService.getHospitalServices(hospitalId);
        //         console.log(data.data);
        //         setServiceArr(data.data);
        //         console.log("The data", data)
        //     } catch (error: any) {
        //         const ERROR_MESSAGE = error.response ? error.response?.data?.error || "Not Fetched, try again!" : error.error;
        //         reportError(ERROR_MESSAGE);
        //     }
        // }
        // fetchServices();
    }, [authUser, hospitalId])

    const handleProvinceChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setFormData({
        ...FormData,
        province: event.target.value,
        district: "",
        sector: "",
      });
    };

    const handleDistrictChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setFormData({
        ...FormData,
        district: event.target.value,
        sector: "",
      });
    };

    const handleSectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData({ ...FormData, sector: event.target.value });
    };

    return (
        <>
            <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Gender
                </label>
                <select onChange={(e) => setFormData({ ...FormData, gender: e.target.value })} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Select the status">
                    {GenderOptions.map((option: ISelectData) => (
                        <option key={option.id} value={option.value}>{option.text}</option>
                    ))}
                </select>
            </div>

            {FormData?.type == "SERVICE" &&
                <div className="py-1">
                    <label className="block text-gray-700 text-sm font-bold">
                        Services
                    </label>
                    <Multiselect onSelect={handleOnServiceSelect} loading={false} options={servicesArr} displayValue={"service"} className="shadow hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white appearance-none bg-inputG w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
            }
            <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">
          Province
        </label>
        <div className="flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG ">
          <select
            value={FormData.province}
            onChange={handleProvinceChange}
            className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Province</option>
            {provinces.map((province, index) => (
              <option key={index} value={province.name}>
                {province.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">
          District
        </label>
        <div className="flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG ">
          <select
            value={FormData.district}
            onChange={handleDistrictChange}
            className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select District</option>
            {provinces
              .find((p) => p.name === FormData.province)
              ?.districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">Sector</label>
        <select
          value={FormData.sector}
          onChange={handleSectorChange}
          className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Sector</option>
          {districtsSectorsMap[FormData.district]?.map(
            (sector: string, index: number) => (
              <option key={index} value={sector}>
                {sector}
              </option>
            )
          )}
        </select>
      </div>
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
