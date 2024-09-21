'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone';

const AbsenMasuk = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (selectedImage) return; // Cegah upload jika gambar sudah ada

    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }, [selectedImage]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    },
    disabled: !!selectedImage // Disable jika gambar sudah diupload
  });

  const removeImage = () => {
    setSelectedImage(null);
    setIsFullScreen(false);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/images/leftArrow2.svg" alt="" height={30} width={30} />
        </Link>
        <h1 className="font-bold text-2xl mx-auto">Absen Masuk</h1>
      </div>

      <div className="flex justify-center items-center mt-6 text-white">
        <div className="flex flex-col justify-center items-center bg-accentColor p-8 w-[80%] rounded-lg">
          <p className="font-bold">10 September 2024 - 8:11:46 AM</p>

          {/* Dropzone area */}
          <div
            {...getRootProps()}
            className="relative flex flex-col justify-center items-center mt-4 w-full p-8 border-2 border-dashed border-white rounded-md cursor-pointer"
          >
            <input {...getInputProps()} />
            {selectedImage ? (
              <>
                {/* Gambar yang diupload */}
                <div
                  className="relative w-[200px] h-[200px]"
                  onClick={(e) => {
                    e.stopPropagation(); // Mencegah event click upload saat gambar di klik
                    setIsFullScreen(true); // Set mode full-screen
                  }}
                >
                  <Image
                    src={selectedImage}
                    alt="Selected"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  {/* Tombol X untuk remove gambar */}
                  <button
                    className="absolute top-2 right-2 text-black p-1"
                    onClick={(e) => {
                      e.stopPropagation(); // Mencegah modal terbuka saat klik X
                      removeImage();
                    }}
                  >
                    ✕
                  </button>
                </div>
              </>
            ) : (
              <>
                <Image src="/images/camera.svg" alt="Camera icon" height={50} width={50} />
                <p>Tap atau drop gambar di sini</p>
              </>
            )}
          </div>

          <button className="text-accentColor bg-white mt-4 p-2 w-[40%] rounded-full">
            Absen Masuk
          </button>
        </div>
      </div>

      {/* Modal untuk menampilkan gambar secara full 50% */}
      {isFullScreen && selectedImage && (
        <div
          className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setIsFullScreen(false)} // Tutup modal saat area luar diklik
        >
          {/* Preview gambar 50% dari ukuran layar */}
          <div className="w-1/2 h-1/2">
            <Image
              src={selectedImage}
              alt="Full view"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AbsenMasuk;





// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';

// const AbsenMasuk = () => {
//   return (
//     <div className="w-[100%]">
//       <div className="flex items-center">
//         <Link href="/">
//           <Image src="/images/leftArrow2.svg" alt="" height={30} width={30} />
//         </Link>
//         <h1 className="font-bold text-2xl mx-auto">Absen Masuk</h1>
//       </div>

//       <div className="flex justify-center items-center mt-6 text-white">
//         <div className="flex flex-col justify-center items-center bg-accentColor p-8 w-[80%] rounded-lg">
//           <p className="font-bold">10 September 2024 - 8:11:46 AM</p>
//           <div className="flex flex-col justify-center items-center mt-4 p-24 border-2 border-dashed border-white rounded-md">
//             <Image src="/images/camera.svg" alt="" height={50} width={50} />
//             <p>Tap untuk pilih gambar</p>
//           </div>
//           <button className="text-accentColor bg-white mt-4 p-2 w-[40%] rounded-full">Absen Masuk</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AbsenMasuk;
