import Image from "next/image";
import React from "react";

const DetilAbsen = () => {
  return (
    <div className=" relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/bgBlue.png"
          alt=""
          width={45}
          height={45}
          className="h-[50%] w-full rounded-md"
        />

        <div className="z-10 -mt-72 flex flex-col items-center justify-center text-white">
          <Image
            src="/images/report2.svg"
            alt="report2"
            width={50}
            height={50}
            className="h-20 w-20 mb-4"
          />
          <h1 className="text-2xl font-bold">Senin, 25 September 2024</h1>
          <p>Jenis Absen : Absen Masuk</p>
        </div>
      </div>

      <div className="absolute w-[70%] h-[50%]  bg-slate-600 shadow-buttonShadow">
          <div className="">
            <p>Status Absen</p>
            <p>Di dalam radius</p>
          </div>
      </div>
    </div>
  );
};

export default DetilAbsen;
