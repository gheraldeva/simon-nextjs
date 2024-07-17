export default function TambahDataSiswa() {
    return (
      <div>
        <h1 className="font-bold text-gray-900 dark:text-black mx-10">
          Tambah Data
        </h1>
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-400" />
  
        <form>
          <div className="">
            <div className="mb-2">
              <label
                htmlFor="name"
                className="mr-7 font-bold text-gray-900 dark:text-black mx-10"
              >
                Nama :
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
                placeholder="Masukkan nama..."
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="font-bold text-gray-900 dark:text-black mx-10"
              >
                NIS :
              </label>
              <input
                type="text"
                id="nis"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
                placeholder="Masukkan NIS..."
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="tempat"
                className="font-bold text-gray-900 dark:text-black mx-10"
              >
                Tempat/Tgl Lahir:
              </label>
              <input
                type="tempat"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
                placeholder="Masukkan Tempat/Tgl Lahir:..."
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="agama"
                className="font-bold text-gray-900 dark:text-black mx-10"
              >
                Agama :
              </label>
              <input
                type="text"
                id="agama"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
                placeholder="Masukkan Agama..."
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="kelas"
                className="font-bold text-gray-900 dark:text-black mx-10"
              >
                Kelas :
              </label>
              <input
                type="text"
                id="kelas"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
                placeholder="Masukkan Kelas..."
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="jurusan"
                className="font-bold text-gray-900 dark:text-black mx-10"
              >
                Jurusan :
              </label>
              <input
                type="text"
                id="jurusan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
                placeholder="Masukkan Jurusan..."
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="noTelpon"
                className="font-bold text-gray-900 dark:text-black mx-10"
              >
                No Telpon :
              </label>
              <input
                type="text"
                id="noTelpon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/5 p-2.5 dark:placeholder-gray-400"
                placeholder="Masukkan No Telpon..."
                required
              />
            </div>
              <div className="flex items-center space-x-4 mb-2">
                <label
                  htmlFor="jenis-kelamin"
                  className="font-bold text-gray-900 dark:text-black mx-10"
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
  
            <div />
          </div>
          <div className="m-3 space-x-4 ml-auto">
            <button className="p-1.5 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              Batalkan
            </button>
            <button className="p-1.5 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              Simpan
            </button>
          </div>
        </form>
      </div>
    );
  }
  