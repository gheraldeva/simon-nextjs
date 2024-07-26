import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r fixed w-[100%] from-right-linear px-16 to-left-linear h-[10vh] flex items-center justify-between p-1">
            <div className="flex items-center gap-4">
                <Image src={"/images/logo_simon.svg"} alt="logo" priority width="70" height="100" />
                <div>
                    <Link href="/"><p className="text-white text-3xl">Simon<strong>PKL</strong></p></Link>
                    <p className="text-white text-[0.6rem]">Solusinya PKL!</p>
                </div>

                <div className="flex flex-row">
                    <Image className="ml-100" src={"/images/bell.svg"} alt="bell logo" width="20" height="20" />
                    <Image className="ml-5" src={"/images/profile_icon.svg"} alt="profile and arrow" width="20" height="20" />
                    <Image className="ml-1  " src={"/images/arrow.svg"} alt="profile and arrow" width="15" height="15" />
                </div>

            </div>

        </nav>
    );
}