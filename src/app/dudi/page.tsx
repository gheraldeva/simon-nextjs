"use client";

import { LinkIcon, RightArrow } from "@/components/icons/icons";
import { DudiHomeComponent } from "@/components/siswa/BelumInstansi";
import SiswaCard from "@/components/siswacard";
import WhiteTemplate from "@/components/WhiteTemplate";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomeGuruPage() {
    const [siswa, setSiswa] = useState<Array<{
        [x: string]: string; nama: string; nis: string; idPKL: string
    }>>([]);
    const [loading, setLoading] = useState(true);
    const [dudi, setDudi] = useState<any>({});

    useEffect(() => {
        axios.get("http://localhost:2008/pembimbingDudi/pengajuan-pkl", { withCredentials: true })
            .then((res) => {
                if (res.data && Array.isArray(res.data.data)) {
                    // Memetakan data siswa dan idPKL
                    const siswaData = res.data.data.map((item: { siswa: any; id: string, status: string }) => ({
                        nama: item.siswa.nama,
                        nis: item.siswa.nis,
                        idPKL: item.id,
                        status: item.status
                    }));
                    setSiswa(siswaData);
                }
            })
            .catch((error) => {
                console.error("Error fetching siswa data:", error);
            })
            .finally(() => {
                setLoading(false);
            });

        axios.get("http://localhost:2008/pembimbingDudi/profile", { withCredentials: true })
            .then((res) => {
                setDudi(res.data.data);
                console.log(res.data.data);
                
            })
            .catch((error) => {
                console.error("Error fetching dudi data:", error);
            })
    }, []);

    return (
        <div className="w-[100%]">
            <WhiteTemplate>
                <div>
                    <div className="">
                        <h1 className="font-bold text-3xl">Selamat Datang, {dudi.nama}</h1>
                        <p>Username : {dudi.username}</p>
                    </div>
                    <DudiHomeComponent />
                    <Link className="items-center" href={"/dudi/ajuanpkl"}>
                        <div className="flex justify-between items-end">
                            <h2 className="font-semibold text-xl mt-10 text-gray-500">Ajuan PKL</h2>
                            <LinkIcon />
                        </div>
                    </Link>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {siswa.map((s, index) => (
                            <SiswaCard
                                key={index}
                                url={`/dudi/ajuanpkl/${s.idPKL}`}  // Menggunakan idPKL untuk URL
                                variant={s.status}
                                name={s.nama.toUpperCase()}
                                kelas={s.nis}
                            />
                        ))}
                    </div>
                </div>
            </WhiteTemplate>
        </div>
    );
}
