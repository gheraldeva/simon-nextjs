import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold -mt-11">Profile Saya</h1>
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
      <div className="block justify-center text-center absolute top-0 right-0 mr-52 mt-40">
        <Image
          src="/images/ProfilPic.png"
          alt="gambar profil"
          height="200"
          width="200"
          className=""
        />
        <div className="">
          <h1 className="text-3xl font-bold mt-3">Aditya Putra</h1>
          <p className="mt-2">NISN : 21414125125</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
