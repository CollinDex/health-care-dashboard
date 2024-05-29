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
