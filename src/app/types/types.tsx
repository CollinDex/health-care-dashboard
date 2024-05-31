export interface PatientApiData {
    name: string,
    gender: string,
    age: number,
    profile_picture: string,
    date_of_birth: string,
    phone_number: string,
    emergency_contact: string,
    insurance_type: string,
    diagnosis_history: {
        month: string,
        year: number,
        blood_pressure: {
            systolic: {
                value: number,
                levels: string
            },
            diastolic: {
                value: number,
                levels: string
            }
        },
        heart_rate: {
            value: number,
            levels: string
        },
        respiratory_rate: {
            value: number,
            levels: string
        },
        temperature: {
            value: number,
            levels: string
        }
    }[],
    diagnostic_list: {
        name: string,
        description: string,
        status: string
    }[],
    lab_results: string []
};

export interface PatientsData {
    patients: PatientApiData []
};

export interface NavLink {
    name: string;
    src: string;
    label: string;
};

export interface NavLinksProps {
    navLinks: NavLink[]
};

export interface Profile {
    name: string,
    profilePhoto: string,
    title: string
};

export interface ProfileProps {
    profile: Profile
};


export interface PatientCardProps {
    patient: PatientApiData
};

export interface Result {
    testName: string,
    fileUrl: string,
    id: number
};

export interface ResultCardProps {
    result: Result
};

export interface PatientDetails {
    id: number,
    name: string,
    profilePhoto: string,
    dateOfBirth: string,
    gender: string,
    contactInfo: string,
    emergencyContact: string,
    insuranceProvider: string
};

export interface DiagnosisListProps {
    diagnosis: {
        name: string,
        description: string,
        status: string
    }[]
}; 