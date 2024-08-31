import TambahDataGuruPembimbing from "@/components/TambahDataGuruPembimbing/page"
import Banner from '@/components/Banner/page';
import WhiteTemplate from "@/components/WhiteTemplate/page";

export default function TambahData () {
    return (
        <div className="w-full">
            <Banner title="Tambah Data Siswa" />
            <WhiteTemplate>
                <TambahDataGuruPembimbing />
            </WhiteTemplate>
        </div>
    )
}