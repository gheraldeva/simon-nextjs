"use client";

import { useState } from 'react';
import { motion } from 'framer-motion'; // Optional untuk animasi
import { FaCheck } from 'react-icons/fa'; // Menggunakan react-icons untuk ikon centang
import WhiteTemplate from '@/components/WhiteTemplate';
import SiswaCard from '@/components/siswacard';

const amenities = [
    { name: 'Januari', description: 'High-speed wireless internet access.' },
    { name: 'Februari', description: 'Flat-screen television with cable channels.' },
    { name: 'Maret', description: 'Fully equipped kitchen with modern appliances.' },
    { name: 'April', description: 'Private parking space available.' },
    { name: 'Mei', description: 'Outdoor swimming pool with lounge chairs.' },
    { name: 'Juni', description: 'Fitness center with various equipment.' },
];
type HistoriAbsenSiswa = { params: { siswa: string } }

const RadioGroup= (props :HistoriAbsenSiswa) => {
    const { params } = props
    const [selectedAmenity, setSelectedAmenity] = useState<string | null>(null);
    const selectedDescription = amenities.find(amenity => amenity.name === selectedAmenity)?.description;

    return (
        <div className="space-y-4">
            <WhiteTemplate>
                <h1 className='text-2xl font-bold text-center'>Absen {params.siswa}</h1>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Select Month</label>
                    <div className="flex space-x-2">
                        {amenities.map((amenity) => (
                            <motion.div
                                key={amenity.name}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedAmenity(amenity.name)}
                                className={`px-4 py-2 rounded-full border cursor-pointer flex items-center space-x-2 transition-colors duration-200 ${selectedAmenity === amenity.name
                                        ? 'bg-accentColor text-white border-blue-400'
                                        : 'bg-gray-100 text-gray-400 border-gray-600'
                                    }`}
                            >
                                {selectedAmenity === amenity.name && <FaCheck className="mr-2" />}
                                <span>{amenity.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {selectedAmenity && (
                    <div className="mt-4 p-4 rounded-lg border border-gray-600">
                        <h3 className="text-lg font-medium">Description</h3>
                        <div className='flex flex-col gap-3'>
                            <SiswaCard url='/guru/detailabsen' variant='done' name='Adit' kelas='XI RPL 3' />
                            <SiswaCard url='/guru/detailabsen' variant='' name='Adit' kelas='XI RPL 3' />
                            <SiswaCard url='/guru/detailabsen' variant='profile' name='Adit' kelas='XI RPL 3' />
                        </div>
                    </div>
                )}
            </WhiteTemplate>
        </div>
    );
};

export default RadioGroup;
