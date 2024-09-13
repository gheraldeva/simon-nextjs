import React from "react";
import Image from "next/image";
import Link from "next/link";

const DaftarInstansi = () => {
  return (
    <div>
      <div className="flex items-center">
        <Image src="/images/leftArrow2.svg" alt="" height={30} width={30} />
        <h1 className="font-bold text-2xl mx-auto">Daftar Instansi</h1>
      </div>
      <div className="flex justify-between mt-11 border-t-3 border-b-3 border-lineColor">
        <div className="flex items-center">
          <Image
            src="/images/arrowDownWhite.svg"
            alt="arrow down"
            height={30}
            width={30}
            className="bg-accentColor p-2 rounded-full fill-white"
          />

          <p className="border-r-2 p-4 pr-4">Nama</p>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <p>PT. Tech Tawar Apps</p>
        </div>
        <Link href="" className="text-limeGreen flex items-center">
          Ajukan
        </Link>
      </div>
    </div>
  );
};

export default DaftarInstansi;
