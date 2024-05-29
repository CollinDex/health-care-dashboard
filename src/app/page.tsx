import Patients from "./components/patients/patients";

export default function Home() {
  return (
    <main className="w-full h-full bg-customAsh grid grid-cols-[1fr_2fr_1fr] gap-8 ">
      <Patients/>
      <div className="bg-customWhite rounded-lg px-3 py-4 flex flex-col gap-8 shadow-md">Diagnosis History</div>
      <div className="bg-customWhite rounded-lg px-3 py-4 flex flex-col gap-8 shadow-md">Details Panel</div>
    </main>
  );
};

