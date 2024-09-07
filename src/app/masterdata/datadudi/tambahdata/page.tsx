import TambahDataDudi from "@/components/TambahDataDudi/TambahDataDudi";
import Banner from "@/components/Banner/page";
import WhiteTemplate from "@/components/WhiteTemplate/WhiteTemplate";

export default function TambahData() {
  return (
    <div className="w-full">
      <Banner title="Tambah Data Dudi" />
      <WhiteTemplate>
        <TambahDataDudi />
      </WhiteTemplate>
    </div>
  );
}
