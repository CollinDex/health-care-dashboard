import Patients from "./components/patients/patients";
import DetailsPanel from "./components/details-panel/details-panel";
import LabResults from "./components/lab-results/lab-results";
import DiagnosticHistory from "./components/diagnosis-history/diagnosis-history";
import DiagnosticList from "./components/diagnostic-list/diagnostic-list";

export default function Home() {
  return (
    <main className="w-full h-full bg-customAsh grid grid-cols-[1fr_2fr_1fr] gap-8 mt-8">

      <div className="grid grid-rows-[1fr] h-screen pb-4">
        <Patients/>
      </div>

      <div className="grid grid-rows-[2fr_1fr] h-screen gap-4 pb-4">
          <DiagnosticHistory/>
          <DiagnosticList/>
      </div>

      <div className="grid grid-rows-[2fr_1fr] h-screen gap-4 -mt-4 pb-4">
        <DetailsPanel/>
        <LabResults/>
      </div>
    </main>
  );
};