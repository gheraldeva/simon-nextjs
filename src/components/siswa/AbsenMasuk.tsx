import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const AbsenMasuk = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/images/leftArrow2.svg" alt="" height={30} width={30} />
        </Link>
        <h1 className="font-bold text-2xl mx-auto">Absen Masuk</h1>
      </div>

      <div className="flex justify-center items-center mt-8 text-white">
        <div className="flex flex-col justify-center items-center bg-accentColor p-8 w-[80%] rounded-lg">
          <p className="font-bold">10 September 2024 - 8:11:46 AM</p>
          <div className="flex flex-col justify-center items-center mt-4 p-20 border-2 border-dashed border-white rounded-md">
            <Image src="/images/camera.svg" alt="" height={50} width={50} />
            <p>Tap untuk pilih gambar</p>
          </div>
          <button className="text-accentColor bg-white mt-4 p-2 w-[40%] rounded-full">Absen Masuk</button>
        </div>
      </div>
    </div>
  );
}

export default AbsenMasuk;
