import React from "react";

const SiswaHome = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="font-bold text-3xl">Selamat Datang, Siswa</h1>
        <p>NISN : 21414125125</p>
      </div>
      <div className="bg-accentColor bg-[url('/images/logoLowOpacity.png')] bg-no-repeat bg-center bg-cover p-24 mt-10 rounded-xl flex flex-col items-center">
        <h1 className="w-full text-center text-white text-xl">Belum ada instansi yang dipilih</h1>
        <button className="w-auto py-2 px-12 mt-6 mx-auto text-white border border-white bg-transparent rounded-full">
          Pilih
        </button>
      </div>
    </div>
  );
};

export default SiswaHome;
