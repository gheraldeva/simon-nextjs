import WhiteTemplate from "@/components/WhiteTemplate";
import SiswaCard from "./siswacard";

export default function LaporanSiswa() {
    return (
        <div>
            <WhiteTemplate>
                <h1 className="text-2xl mb-5 font-bold">Laporan Siswa</h1>
                <p className="text-accentColor font-medium">Selasa, 15 Desember 2022</p>
                <div className="grid grid-cols-3 gap-5">
                    <SiswaCard name="Gheral Deva Bagus" kelas="XI RPL 2" />
                    <SiswaCard name="Gheral Deva Bagus" kelas="XI RPL 2" />
                    <SiswaCard name="Gheral Deva Bagus" kelas="XI RPL 2" />
                    <SiswaCard name="Gheral Deva Bagus" kelas="XI RPL 2" />
                </div>
            </WhiteTemplate>
        </div>
    );
}