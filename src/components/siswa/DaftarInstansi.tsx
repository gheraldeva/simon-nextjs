
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
    <div className="w-[100%]">
      <div className="flex items-center">
        <h1 className="font-bold text-2xl mx-auto">Daftar Instansi</h1>
      </div>
      <div className="flex justify-between mt-7 border-t-3 border-b-3 border-lineColor">
        <div className="flex justify-center items-center mx-8">
          <div className="bg-accentColor p-2.5 rounded-full overflow-hidden">
            <Image
              src="/images/arrowDownWhite.svg"
              alt="arrow down"
              height={10}
              width={10}
              className="object-cover"
            />
          </div>
          <p className="border-r-2 p-3">Nama</p>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <p>PT. Tech Tawar Apps</p>
        </div>
        <Link href="" className="text-limeGreen flex items-center mr-12">
          Ajukan
        </Link>
      </div>
    </div>
  );
};

export default ExpandableList;
