import TambahDataSiswa from "@/components/TambahDataSiswa/TambahDataSiswa";
import Banner from "@/components/Banner/page";
import WhiteTemplate from "@/components/WhiteTemplate/WhiteTemplate";

export default function TambahData() {
  return (
    <div className="w-full">
      <Banner title="Tambah Data Siswa" />
      <WhiteTemplate>
        <TambahDataSiswa />
      </WhiteTemplate>
    </div>
  );
}
