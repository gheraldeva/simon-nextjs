'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Item {
  id: number;
  companyName: string;
  description: string;
  studentCount: number;
  status: 'Lulus' | 'Proses' | 'Belum Lulus';
}

const ExpandableList: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const items: Item[] = [
    { id: 1, companyName: 'PT. ABC', description: 'PKL di PT. ABC', studentCount: 5, status: 'Lulus' },
    { id: 2, companyName: 'PT. XYZ', description: 'PKL di PT. XYZ', studentCount: 3, status: 'Proses' },
    { id: 3, companyName: 'PT. DEF', description: 'PKL di PT. DEF', studentCount: 4, status: 'Belum Lulus' },
  ];

  const toggleExpand = (id: number) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const handleAjukan = (id: number) => {
    setSelectedItem(id);
    alert(`Mengajukan status siswa dengan id: ${id}`);
  };

  return (
    <div className="space-y-4">
      <h1 className='font-bold text-3xl mb-10'>Daftar Instansi</h1>
      {items.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded-lg cursor-pointer" // Tambahkan cursor-pointer agar kotak terlihat dapat diklik
          onClick={() => toggleExpand(item.id)} // Menggunakan seluruh kotak sebagai trigger
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {expandedItems.includes(item.id) ? (
                <FaChevronUp className="mr-2 text-blue-500" />
              ) : (
                <FaChevronDown className="mr-2 text-blue-500" />
              )}

              <h3 className="text-lg font-semibold">{item.companyName}</h3>
            </div>

            <div className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-lg">
              {item.studentCount} Siswa
            </div>
          </div>

          <div
            className={`transition-all duration-300 overflow-hidden ${
              expandedItems.includes(item.id) ? 'max-h-40' : 'max-h-0'
            }`}
          >
            {expandedItems.includes(item.id) && (
              <div className="mt-4">
                <p>{item.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAjukan(item.id);
                  }}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Ajukan
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
      {selectedItem && (
        <div className="mt-4 text-green-500">
          Status siswa dengan id {selectedItem} telah diajukan!
        </div>
      )}
    </div>
  );
};

export default ExpandableList;
