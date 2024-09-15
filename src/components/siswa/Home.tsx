import Link from 'next/link'
import React from 'react'

const MenungguProses = () => {
  return (
    <div className="-mt-20">
      <div className="">
        <h1 className="font-bold text-3xl">Selamat Datang, Siswa</h1>
        <p>NISN : 21414125125</p>
      </div>
      <div className="bg-accentColor bg-[url('/images/logoLowOpacity.png')] bg-no-repeat bg-center bg-cover p-20 mt-10 rounded-xl flex flex-col items-center">
        <h1 className="w-full text-center text-white text-xl">Belum ada instansi yang dipilih</h1>
        <Link href={"/siswa/daftarinstansi"} className="w-auto py-2 px-12 mt-4 mx-auto text-white border border-white bg-transparent hover:bg-white hover:text-accentColor transition duration-300 ease-in-out rounded-full">
          Pilih
        </Link>
      </div>
    </div>
  )
}

export default MenungguProses