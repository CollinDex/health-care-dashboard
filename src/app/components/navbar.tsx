import Image from "next/image";
import NavLinks from "./navlinks";
import Profile from "./profile";
import { linkArray, defaultProfile } from "../utils/app-data";

const NavBar = () => {
    const links = linkArray;
    const profile = defaultProfile;
    return (
        <div className="w-full text-black bg-customWhite rounded-full py-3 px-6 grid grid-cols-[1fr_2fr_1fr] gap-4 items-center">
            <div className="hover:cursor-pointer">
                <Image
                    src="/TestLogo.svg"
                    width={150}
                    height={50}
                    alt="Hero Icon"
                    priority= {true}
                />
            </div>
            <NavLinks navLinks={links}/>
            <Profile profile={profile}/>
        </div>
    );
};

export default NavBar;