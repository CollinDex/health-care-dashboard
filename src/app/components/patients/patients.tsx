import Image from "next/image";
import { patientsData } from "@/app/utils/app-data";
import PatientCard from "../patient-card/patient-card";

const Patients = () => {
    const patients = patientsData;
    return (
        <div className="bg-customWhite rounded-lg py-4 flex flex-col gap-8 shadow-md overflow-y-scroll">
            <div className="flex flex-row justify-between items-center px-3">
                <h1 className="font-bold text-left text-2xl drop-shadow-sm">Patients</h1>
                <div className="hover:cursor-pointer">
                    <Image
                        src="/SearchIcon.svg"
                        width={18}
                        height={18}
                        alt="Search Icon"
                        priority= {true}
                        className="w-auto h-auto"
                    />
                </div>
            </div>
            {patients.map((patient) => <PatientCard key={patient.id} patients={patient}/>)}
        </div>
    );
};




export default Patients;