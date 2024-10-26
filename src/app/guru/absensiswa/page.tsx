import SiswaCard from "@/components/siswacard";
import WhiteTemplate from "@/components/WhiteTemplate";

export default function LaporanSiswa() {
    return (
        <div>
            <WhiteTemplate>
                <h1 className="text-2xl mb-5 font-bold">Absen Siswa</h1>
                <p className="text-accentColor font-medium">Selasa, 15 Desember 2022</p>
                <div className="grid grid-cols-3 mt-5 gap-5">
                    <SiswaCard url="/guru/historiabsen/GheralDeva" variant="profile" name="Gheral Deva Bagus" kelas="XI RPL 2" />
                    <SiswaCard url="/guru/historiabsen/GheralDeva" variant="profile" name="Gheral Deva Bagus" kelas="XI RPL 2" />
                    <SiswaCard url="/guru/historiabsen/GheralDeva" variant="profile" name="Gheral Deva Bagus" kelas="XI RPL 2" />
                    <SiswaCard url="/guru/historiabsen/GheralDeva" variant="profile" name="Gheral Deva Bagus" kelas="XI RPL 2" />
                </div>
            </WhiteTemplate>
        </div>
    );
}