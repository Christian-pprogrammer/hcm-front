import Image from "next/image";
import React from "react";
import { AdminHospital } from "../../utils/FormData";

interface TopAccountsProps {
  hospitalAdmins: AdminHospital[];
}

const TopAccounts : React.FC<TopAccountsProps> = ({ hospitalAdmins }) => {
  console.log(hospitalAdmins);
  return (
    <div className=" bg-backG min-w-[20vw] h-[75vh] hidden lg:block relative  rounded-lg">
      <div className="text-center gap-2 py-10 flex justify-center text-white place-items-center flex-col">
        <h1 className="font-bold text-white ">
          Account Management - Top Active
        </h1>
        <p>
          The Statistics of the system are as follows including different logged
          in account feel free to check their recent activities{" "}
        </p>
      </div>
      <div className="absolute bottom-0 gap-4 flex flex-col h-1/2 w-full px-2 bg-inputG">
      {hospitalAdmins.map((hospitalAdmin:AdminHospital, key: number) => (
        <div key={key++} className="text-center  hover:bg-backG group duration-300 hover:text-white group hover:cursor-pointer w-full bg-white  rounded-lg flex py-10 md:py-8 flex-row justify-center gap-6 place-items-center">
        <div className="flex flex-col justify-center place-items-center">
          <h1 className="font-bold">{hospitalAdmin.hospital}</h1>
          <p className="text-slate-400 group-hover:text-white">
            Admin : {hospitalAdmin.hospitalAdmin || "Not yet assigned"}
          </p>
        </div>
      </div>
      ))}
    </div>
    </div>
  );
};

export default TopAccounts;
