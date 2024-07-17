import Banner from "@/components/Banner/page";
import WhiteTemplate from "@/components/WhiteTemplate/page";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Banner title="Home" />
      <WhiteTemplate>
        <div className="mx-16">
          <h1 className="text-center text-2xl mb-5">Selamat Datang di Aplikasi <br /> Monitoring PKL admin <strong>SMKN 2 MATARAM</strong></h1>
          <Image src="/images/welcome.png" alt="welcome" width={1000} height={200} className="w-full" />
        </div>
      </WhiteTemplate>
    </div>
  );
}
