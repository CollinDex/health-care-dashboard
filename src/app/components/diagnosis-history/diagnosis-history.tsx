import Image from "next/image";

const DiagnosticHistory = () => {
    return (
        <div className="flex flex-col gap-4 bg-customWhite shadow-md rounded-lg px-4 py-5">
        <h1 className="font-bold text-2xl text-left drop-shadow-sm">Diagnosis History</h1>
        <div>Blood Presure Chart</div>
        <div className="flex flex-row gap-6 justify-evenly">
            <div className="h-64 w-56 bg-respRateBg shadow-md rounded-lg px-3 py-4 flex flex-col gap-4 justify-between">
                <Image
                    src= '/LungsIcon.svg'
                    width={95}
                    height={95}
                    alt="Respiratory Rate"
                    priority= {true}
                    className="rounded-full bg-customWhite"
                />
                <div className="flex flex-col gap-0">
                    <h1 className="font-bold text-md text-left drop-shadow-sm">Respiratory Rate</h1>
                    <h1 className="font-bold text-3xl text-left drop-shadow-sm">20 bpm</h1>
                </div>
                <h1 className="text-sm text-left drop-shadow-sm">Normal</h1>
            </div>
            <div className="h-64 w-56 bg-tempBg shadow-md rounded-lg px-3 py-4 flex flex-col gap-4 justify-between">
                <Image
                    src= '/ThermometerIcon.svg'
                    width={95}
                    height={95}
                    alt="Temperature"
                    priority= {true}
                    className="rounded-full bg-customWhite"
                />
                <div className="flex flex-col gap-0">
                    <h1 className="font-bold text-md text-left drop-shadow-sm">Temperature</h1>
                    <h1 className="font-bold text-3xl text-left drop-shadow-sm">98.6°F</h1>
                </div>
                <h1 className="text-sm text-left drop-shadow-sm">Normal</h1>
            </div>
            <div className="h-64 w-56 bg-heartRateBg shadow-md rounded-lg px-3 py-4 flex flex-col gap-4 justify-between">
                <Image
                    src= '/HeartIcon.svg'
                    width={95}
                    height={95}
                    alt="Heart Rate"
                    priority= {true}
                    className="rounded-full bg-customWhite"
                />
                <div className="flex flex-col gap-0">
                    <h1 className="font-bold text-md text-left drop-shadow-sm">Heart Rate</h1>
                    <h1 className="font-bold text-3xl text-left drop-shadow-sm">78 bpm</h1>
                </div>
                <div className="flex flex-row">
                    <Image
                        src= '/ArrowDownIcon.svg'
                        width={10}
                        height={5}
                        alt="Down Arrow"
                        priority= {true}
                        className="rounded-full pr-1"
                    />
                    <h1 className="text-sm text-left drop-shadow-sm">Lower than Average</h1>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DiagnosticHistory;