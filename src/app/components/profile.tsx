import Image from "next/image";
import { ProfileProps } from "../types/types";

const Profile: React.FC<ProfileProps> = ({profile}) => {
    return (
        <div className="flex flex-row gap-2 items-center justify-end">
            <div className="hover:cursor-pointer">
                <Image
                    src= {profile.profilePhoto}
                    width={50}
                    height={50}
                    alt="Profile Photo"
                    priority= {true}
                    className="rounded-full h-10 w-10"
                />
            </div>
            <div className="flex flex-col pr-2 border-r border-r-2 border-customAsh">
                <h1 className="text-sm font-bold text-left">{profile.name}</h1>
                <h1 className="text-sm text-left">{profile.title}</h1>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <div>
                    <Image
                        src= '/SettingsIcon.svg'
                        width={18}
                        height={18}
                        alt="Settings"
                        priority= {true}
                        className="hover:cursor-pointer hover:bg-activeState hover:rounded-full"
                    />
                </div>
                <div>
                    <Image
                        src= '/MoreVertical.svg'
                        width={4}
                        height={18}
                        alt="More"
                        priority= {true}
                        className="hover:cursor-pointer hover:bg-activeState"
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;