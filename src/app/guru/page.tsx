"use client";

import { ProfileIcon } from "@/components/icons/icons";
import { GuruHomeComponent } from "@/components/siswa/BelumInstansi";
import SiswaCard from "@/components/siswacard";
import WhiteTemplate from "@/components/WhiteTemplate";
import axios from "axios";
import { useEffect, useState } from "react";



export default function HomeGuruPage() {
    const [Siswa, setSiswa] = useState([]);

    useEffect(() => {
       axios.get("http://localhost:2008/guru-pembimbing/siswa", { withCredentials: true }).then((res) => {
           setSiswa(res.data.data)
       })
    },[])
    console.log(Siswa);
    

    return (
        <div className="w-[100%]">
            <WhiteTemplate>
                <div>
                    <div className="">
                        <h1 className="font-bold text-3xl">Selamat Datang, Sulaiman S.Pd</h1>
                        <p>NIRP : 1212121313</p>
                    </div>
                    <GuruHomeComponent />
                    <h2 className=" font-medium text-xl mt-10 mb-5 text-gray-500">Siswa Bimbingan</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {Siswa.map((item: any) => (
                            <SiswaCard key={item.id} variant="profile" url="/guru/profilesiswa" name={item.nama} kelas={item.kelas.nama.toUpperCase()} />
                        ))}
                    </div>
                </div>
            </WhiteTemplate>
        </div>
    )
}