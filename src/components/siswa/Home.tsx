import React from 'react'

const SiswaHome = () => {
  return (
    <div className='m-10 w-[100%]'>
      <div className="">
        <h1 className='font-bold text-3xl'>Selamat Datang, Siswa</h1>
        <p>NISN : 21414125125</p>
      </div>
      <div className="bg-accentColor mt-10 w-[60%] h-[30%] rounded-md">
        <h1>Belum ada instansi yang dipilih</h1>
        <button className=' text-white border-white'>Pilih</button>
      </div>
    </div>
  )
}

export default SiswaHome