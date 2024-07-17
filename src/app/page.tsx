import Banner from "@/components/Banner/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner title="Home" />
      <div className="bg-white h-screen mt-[24vh] ml-[21vw] p-7 shadow-md">
        <p>Hello World</p>
      </div>
    </div>
  );
}
