import { ProccessPkl, SuccessPkl } from "./icons/icons";


interface NotificationProps {
    status: "success" | "proccess" | "error";
    perusahaan: string;
}

export function NotificationChildren({ status, perusahaan }: NotificationProps) {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-2 w-[70%] px-3 py-1 border-2 rounded-md">
                <div className="flex w-[100%] justify-evenly gap-3">
                    <div className="flex items-center justify-between w-[100%]">
                        <div className="flex items-center gap-3 ">
                            {status === "success" && <SuccessPkl />}
                            {status === "proccess" && <ProccessPkl />}
                            {status === "success" && <h4 className="font-semibold text-lg">Kabar Baik!</h4>}
                            {status === "proccess" && <h4 className="font-semibold text-lg">Dalam Proses!</h4>}
                        </div>
                        <h4 className="font-semibold text-lg">19:25</h4>
                    </div>
                </div>
                <div className="ml-12">
                    <p>Ajuan PKL-mu yang telah Anda ajukan di {perusahaan}</p>
                </div>
                <div className="flex justify-center gap-2 my-2">
                    <span className="text-accentColor w-[40%] border-2 border-accentColor font-semibold rounded-sm text-center p-1 cursor-pointer hover:shadow-lg">Tandai Telah Dibaca</span>
                    <span className="text-white bg-accentColor w-[40%] font-semibold rounded-sm text-center p-1 cursor-pointer hover:shadow-lg">Lihat Selengkapnya</span>
                </div>
            </div>
        </div>
    )
}