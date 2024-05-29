import Patients from "./components/patients/patients";
import DetailsPanel from "./components/details-panel/details-panel";
import LabResults from "./components/lab-results/lab-results";

export default function Home() {
  return (
    <main className="w-full h-full bg-customAsh grid grid-cols-[1fr_2fr_1fr] gap-8">

      <div className="grid grid-rows-[1fr] h-screen pb-4">
        <Patients/>
      </div>

      <div className="grid grid-rows-[1fr] h-screen pb-4">
        <div className="bg-customWhite rounded-lg px-3 py-4 flex flex-col gap-8 shadow-md">
          Diagnosis History
        </div>
      </div>

      <div className="grid grid-rows-[2fr_1fr] h-screen gap-4 pb-4">
        <DetailsPanel/>
        <LabResults/>
      </div>
    </main>
  );
};

