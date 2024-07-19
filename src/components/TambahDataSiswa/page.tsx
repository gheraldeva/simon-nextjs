// 'use client'

export default function TambahDataSiswa() {
  return (
    <div className="">
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

// // pages/form.tsx
// import React, { useState, ChangeEvent, FormEvent } from "react";

// interface FormData {
//   nama: string;
//   nis: string;
//   tempatTanggalLahir: string;
//   agama: string;
//   kelas: string;
//   jurusan: string;
//   noTelpon: string;
//   jenisKelamin: string;
// }

// const TambahDataSiswa: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     nama: "",
//     nis: "",
//     tempatTanggalLahir: "",
//     agama: "",
//     kelas: "",
//     jurusan: "",
//     noTelpon: "",
//     jenisKelamin: "",
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     // Tambahkan logika untuk submit data
//     console.log(formData);
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "0 auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//       }}
//     >
//       <h2>Tambah Data</h2>
//       <form onSubmit={handleSubmit}>
//         {[
//           "nama",
//           "nis",
//           "tempatTanggalLahir",
//           "agama",
//           "kelas",
//           "jurusan",
//           "noTelpon",
//         ].map((field, index) => (
//           <div key={index} style={{ marginBottom: "10px" }}>
//             <label style={{ display: "block", marginBottom: "5px" }}>
//               {field.charAt(0).toUpperCase() +
//                 field
//                   .slice(1)
//                   .replace(/([A-Z])/g, " $1")
//                   .trim()}{" "}
//               :
//             </label>
//             <input
//               type="text"
//               name={field}
//               value={formData[field as keyof FormData]}
//               onChange={handleChange}
//               style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//             />
//           </div>
//         ))}
//         <div style={{ marginBottom: "10px" }}>
//           <label style={{ display: "block", marginBottom: "5px" }}>
//             Jenis Kelamin :
//           </label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 name="jenisKelamin"
//                 value="Laki-Laki"
//                 checked={formData.jenisKelamin === "Laki-Laki"}
//                 onChange={handleChange}
//               />{" "}
//               Laki-Laki
//             </label>
//             <label style={{ marginLeft: "20px" }}>
//               <input
//                 type="radio"
//                 name="jenisKelamin"
//                 value="Perempuan"
//                 checked={formData.jenisKelamin === "Perempuan"}
//                 onChange={handleChange}
//               />{" "}
//               Perempuan
//             </label>
//           </div>
//         </div>
//         <button
//           type="submit"
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Simpan
//         </button>
//         <button
//           type="button"
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#ccc",
//             color: "#333",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//             marginLeft: "10px",
//           }}
//         >
//           Batalkan
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TambahDataSiswa;
