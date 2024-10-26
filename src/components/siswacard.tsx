import { DoneIcon, NotDone, ProfileBlue, ProfileIcon, RightArrow, TandaSeru } from "@/components/icons/icons";
import Link from "next/link";

export default function SiswaCard({name,kelas,variant,url}:{name:string,kelas:string,variant:string,url:string}) {
    return (
    <Link href={url} className="w-full">
        <div className="flex justify-between p-2 gap-2 bg-white rounded-lg shadow-md">
            <div className="">
                {variant == "done" ? <DoneIcon /> : variant == "profile" ? <ProfileBlue /> : variant == "proses" ? <TandaSeru /> : variant == "diterima" ? <DoneIcon /> :  <NotDone />}
            </div>
            <div className="">
                <h5 className="font-semibold">{name}</h5>
                <p>{kelas}</p>
            </div>
            <RightArrow />
        </div>
    </Link>
    )
}