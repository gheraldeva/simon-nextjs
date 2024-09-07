import TambahDataGuruPembimbing from "@/components/TambahDataGuruPembimbing/TambahDataGuruPembimbinf";
import Banner from "@/components/Banner/page";
import WhiteTemplate from "@/components/WhiteTemplate/WhiteTemplate";

export default function TambahData() {
  return (
    <div className="w-full">
      <Banner title="Tambah Data Siswa" />
      <WhiteTemplate>
        <TambahDataGuruPembimbing />
      </WhiteTemplate>
    </div>
  );
}
