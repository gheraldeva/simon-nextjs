"use client";

// src/components/TambahDataSiswa.tsx
import React, { useState } from "react";
import * as yup from "yup";

interface FormData {
  name: string;
  nip: string;
  tempatLahir: string;
  tanggalLahir: string;
  agama: string;
  noTelpon: string;
  jenisKelamin: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Username is required"),
  nip: yup.string().required(),
  tempatLahir: yup.string().required(),
  tanggalLahir: yup.string().required(),
  agama: yup.string().required(),
  noTelpon: yup.string().required(),
  jenisKelamin: yup.string().required(),
});

const TambahDataSiswa: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    nip: "",
    tempatLahir: "",
    tanggalLahir: "",
    agama: "",
    noTelpon: "",
    jenisKelamin: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:2008/addSiswa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Data berhasil disimpan!");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  return (
    <div className="w-full mx-auto">
      <h1 className="font-bold text-gray-900 dark:text-black mx-10">
        Tambah Data
      </h1>
      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400" />

      <form className="mx-10" onSubmit={handleSubmit}>
        <div className="">
          <div className="flex items-center mb-20">
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
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="nip"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              NIP :
            </label>
            <input
              type="text"
              id="nip"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan NIP..."
              value={formData.nip}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="tempatLahir"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              Tempat Lahir :
            </label>
            <input
              type="text"
              id="tempatLahir"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 p-2.5 dark:placeholder-gray-400"
              placeholder="Masukkan Tempat Lahir..."
              value={formData.tempatLahir}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label
              htmlFor="tanggalLahir"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              Tanggal Lahir :
            </label>
            <input
              type="date"
              id="tanggalLahir"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex-1 p-2.5 dark:placeholder-gray-400"
              value={formData.tanggalLahir}
              onChange={handleChange}
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
              value={formData.agama}
              onChange={handleChange}
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
              value={formData.noTelpon}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center space-x-4">
            <label
              htmlFor="jenisKelamin"
              className="font-bold text-gray-900 dark:text-black w-1/4 text-right mr-4"
            >
              Jenis Kelamin :
            </label>

            <div className="flex items-center">
              <input
                type="radio"
                id="jenisKelaminLakiLaki"
                name="jenisKelamin"
                className="form-radio h-4 w-4 text-indigo-600"
                value="Laki-Laki"
                checked={formData.jenisKelamin === "Laki-Laki"}
                onChange={handleChange}
              />
              <label
                htmlFor="jenisKelaminLakiLaki"
                className="ml-2 text-black-700"
              >
                Laki-Laki
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="jenisKelaminPerempuan"
                name="jenisKelamin"
                className="form-radio h-4 w-4 text-indigo-600"
                value="Perempuan"
                checked={formData.jenisKelamin === "Perempuan"}
                onChange={handleChange}
              />
              <label
                htmlFor="jenisKelaminPerempuan"
                className="ml-2 text-black-700"
              >
                Perempuan
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-3">
            <button
              type="button"
              className="p-3 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Batalkan
            </button>
            <button
              type="submit"
              className="p-3 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Simpan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TambahDataSiswa;
