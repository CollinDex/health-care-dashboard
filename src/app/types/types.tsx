export interface NavLink {
    name: string;
    src: string;
    label: string;
};

export interface NavLinksProps {
    navLinks: NavLink[];
};

export interface Profile {
    name: string,
    profilePhoto: string,
    title: string
};

export interface ProfileProps {
    profile: Profile
};

export interface Patient {
    id: number,
    name: string,
    sex: string,
    profilePicture: string,
    age: number
}

export interface PatientCardProps {
    patients: Patient;
}

export interface Result {
    testName: string,
    fileUrl: string,
    id: number
}

export interface ResultCardProps {
    result: Result;
}
