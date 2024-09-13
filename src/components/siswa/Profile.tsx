import Image from "next/image";
import React from "react";


const Profile = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold ml-10">Profile Saya</h1>
      <div className="flex justify-center mt-20 w-full">
        <div>
          <div className="flex flex-col items-center justify-center w-full">
            <Image
              src="/download.jpg"
              alt="gambar profil"
              height="200"
              width="200"
              className="rounded-full border-5 border-primaryColor"
            />
            <h1 className="text-3xl font-bold mt-3">Aditya Putra</h1>
            <p className="mt-2">NISN : 21414125125</p>
          </div>
          <div className="">
            <div className="block">
              <p className="p-1 mt-5 font-bold">Kelas</p>
              <p className="text-lightGrayForm border-2 border-lightWhite p-3 rounded-xl w-96">
                XI RPL 3
              </p>
            </div>
            <div className="block">
              <p className="p-1 mt-5 font-bold">No. Telepon</p>
              <p className="text-lightGrayForm border-2 border-lightWhite p-3 rounded-xl w-96">
                08123456789
              </p>
            </div>
            <div className="block">
              <p className="p-1 mt-5 font-bold">Alamat</p>
              <p className="text-lightGrayForm border-2 border-lightWhite p-3 rounded-xl w-96">
                Jl. Abcdefg
              </p>
            </div>
            <div className="block">
              <p className="p-1 mt-5 font-bold">Status PKL</p>
              <p className="text-lightGrayForm border-2 border-lightWhite p-3 rounded-xl w-96">
                Sedang PKL
              </p>
            </div>
            <div className="block">
              <p className="p-1 mt-5 font-bold">Guru Pemimbing</p>
              <p className="text-lightGrayForm border-2 border-lightWhite p-3 rounded-xl w-96">
                Baiq Lah
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Profile;
