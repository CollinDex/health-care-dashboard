import ResultCard from "../result-card/result-card";
import { labResults } from "@/app/utils/app-data";

const LabResults = () => {
    const results = labResults;
    return (
        <div className="bg-customWhite rounded-lg py-4 flex flex-col gap-4 shadow-md overflow-y-auto">
            <div className="flex flex-row justify-between items-center px-3">
                <h1 className="font-bold text-left text-2xl drop-shadow-sm">Lab Results</h1>
            </div>
            <div className="flex flex-col gap-2 pl-2 overflow-y-auto">
                {results.map((result) => <ResultCard key={result.id} result={result}/>)}
            </div>
        </div>
    );
};

export default LabResults;