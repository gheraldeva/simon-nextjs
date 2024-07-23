'use client'
export default function TambahDataSiswa() {
  return (
    <div className="w-full mx-auto">
      <h1 className="font-bold text-gray-900 dark:text-black mx-10">
        Tambah Data
      </h1>
      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400" />

      <form className="mx-10">
        <div className="space-y-1.5">
          <div className="flex items-center">
            <label
              htmlFor="name"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              Nama :
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan nama..."
              required
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="nis"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              NIS :
            </label>
            <input
              type="text"
              id="nis"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan NIS..."
              required
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="tempat"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              Tempat/Tgl Lahir:
            </label>
            <input
              type="text"
              id="tempat"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan Tempat/Tgl Lahir:..."
              required
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="agama"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              Agama :
            </label>
            <input
              type="text"
              id="agama"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan Agama..."
              required
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="kelas"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              Kelas :
            </label>
            <input
              type="text"
              id="kelas"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan Kelas..."
              required
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="jurusan"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              Jurusan :
            </label>
            <input
              type="text"
              id="jurusan"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan Jurusan..."
              required
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="noTelpon"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              No Telpon :
            </label>
            <input
              type="text"
              id="noTelpon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan No Telpon..."
              required
            />
          </div>
          <div className="flex items-center space-x-4">
            <label
              htmlFor="jenis-kelamin"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              Jenis Kelamin:
            </label>

            <div className="flex items-center">
              <input
                type="radio"
                id="option1"
                name="radiogroup"
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <label htmlFor="option1" className="ml-2 text-black-700">
                Laki-Laki
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="option2"
                name="radiogroup"
                className="form-radio h-4 w-4 text-indigo-600"
              />
              <label htmlFor="option2" className="ml-2 text-black-700">
                Perempuan
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-3">
            <button className="p-1.5 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              Batalkan
            </button>
            <button className="p-1.5 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              Simpan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

