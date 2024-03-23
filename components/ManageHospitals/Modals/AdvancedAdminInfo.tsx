import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IHospital, IHospitalAdmin } from '../../../utils/ModalTypes';
import hospitalService from '../../../services/hospital/hospital.service';
import { notifyError } from '../../alert';

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

const AdvancedInfoAdmin = ({
  FormDataAdmin,
  setFormDataAdmin,
  hospId,
}: {
  FormDataAdmin: IHospitalAdmin;
  setFormDataAdmin: React.Dispatch<React.SetStateAction<IHospitalAdmin>>;
  hospId: any;
}) => {
  const errors: string[] = [];
  const [hospitals, setHospitals] = useState<IHospital[]>([]);

  const fetchHospitals = useCallback(async () => {
    try {
      const response = await hospitalService.getAllHospitals();
      const data = response.data;
      setHospitals(data);
      console.log("Set state", hospitals);
      console.log("Fetched hospitals", data);
    } catch (error: any) {
      const ERROR_MESSAGE = error.response
        ? error.response?.data?.error || "Admin creation failed, try again!"
        : error.error;
      notifyError(ERROR_MESSAGE);
    }
  }, []);

  useEffect(() => {
    fetchHospitals();
  }, [fetchHospitals])

  if (!FormDataAdmin.hospitalId) {
    errors.push("The hospital is required!");
  }
  if (!FormDataAdmin.password) {
    errors.push("The password is required!");
  }
  if (!FormDataAdmin.province) {
    errors.push("The province is required!");
  }
  if (!FormDataAdmin.district) {
    errors.push("The district is required!");
  }
  if (!FormDataAdmin.sector) {
    errors.push("The sector is required!");
  }

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormDataAdmin({
      ...FormDataAdmin,
      province: event.target.value,
      district: "",
      sector: "",
    });
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormDataAdmin({
      ...FormDataAdmin,
      district: event.target.value,
      sector: "",
    });
  };

  const handleSectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormDataAdmin({ ...FormDataAdmin, sector: event.target.value });
  };

  const handleHospitalChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormDataAdmin({ ...FormDataAdmin, hospitalId: event.target.value });
  };

  return (
    <>
      <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">
          Password
        </label>
        <input
          value={FormDataAdmin?.password}
          onChange={(e) =>
            setFormDataAdmin({ ...FormDataAdmin, password: e.target.value })
          }
          className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Password credentials"
        />
      </div>
      <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">
          Province
        </label>
        <div className="flex hover:border-solid hover:border-2 hover:rounded-md duration-500 rounded-md border-2 border-[white] hover:border-backG ">
          <select
            value={FormDataAdmin.province}
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
            value={FormDataAdmin.district}
            onChange={handleDistrictChange}
            className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select District</option>
            {provinces
              .find((p) => p.name === FormDataAdmin.province)
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
          value={FormDataAdmin.sector}
          onChange={handleSectorChange}
          className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Sector</option>
          {districtsSectorsMap[FormDataAdmin.district]?.map(
            (sector: string, index: number) => (
              <option key={index} value={sector}>
                {sector}
              </option>
            )
          )}
        </select>
      </div>
      <div className="py-1">
        <label className="block text-gray-700 text-sm font-bold">
          Hospital
        </label>
        <select
          value={FormDataAdmin.hospitalId}
          onChange={handleHospitalChange}
          className="shadow appearance-none bg-inputG hover:border-solid hover:border-2 duration-500 rounded-md hover:border-backG border-2 border-white w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select hospital</option>
          {hospitals?.map((hospital: IHospital, index: number) => (
            <option key={hospital.hospitalId} value={hospital.hospitalId}>
              {hospital.hospitalName}
            </option>
          ))}
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
export default AdvancedInfoAdmin;
